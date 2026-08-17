// Fonction serverless Vercel — exécutée côté serveur, jamais dans le navigateur.
// Reçoit les soumissions du formulaire de contact et envoie deux emails via Brevo :
//   1. Notification pour la propriétaire du portfolio (Alyssa)
//   2. Accusé de réception automatique pour le visiteur

// Neutralise le HTML saisi par le visiteur (évite l'injection dans les emails).
const esc = (s) =>
  String(s ?? '').replace(/[<>&"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]),
  );

export default async function handler(req, res) {
  // 1) Méthode acceptée : POST uniquement
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, message, website } = req.body || {};

  // 2) Anti-robot (honeypot) : le champ "website" est caché aux humains.
  //    S'il est rempli → c'est un bot, on répond OK sans rien envoyer.
  if (website) return res.status(200).json({ ok: true });

  // 3) Validation minimale
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs manquants' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  const API_KEY = process.env.BREVO_API_KEY;
  const SENDER = process.env.SENDER_EMAIL; // expéditeur vérifié dans Brevo
  const OWNER = process.env.OWNER_EMAIL;   // adresse de réception (Alyssa)

  if (!API_KEY || !SENDER || !OWNER) {
    console.error('Variables Brevo manquantes (BREVO_API_KEY / SENDER_EMAIL / OWNER_EMAIL)');
    return res.status(500).json({ error: 'Configuration serveur incomplète' });
  }

  // 4) Envoi via l'API Brevo
  async function sendEmail(payload) {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': API_KEY,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  }

  try {
    // EMAIL 1 — Notification pour Alyssa
    await sendEmail({
      sender: { name: 'Portfolio', email: SENDER },
      to: [{ email: OWNER }],
      replyTo: { email, name }, // Répondre = écrire directement au visiteur
      subject: `Nouveau contact : ${name}`,
      htmlContent:
        `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">` +
        `<h2 style="color:#7c3aed">Nouveau message depuis ton portfolio</h2>` +
        `<p><b>Nom :</b> ${esc(name)}</p>` +
        `<p><b>Email :</b> ${esc(email)}</p>` +
        `<p><b>Message :</b><br>${esc(message).replace(/\n/g, '<br>')}</p>` +
        `<hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>` +
        `<p style="color:#888;font-size:12px">Envoyé automatiquement depuis alyssa-portfolio-seven.vercel.app</p>` +
        `</div>`,
    });

    // EMAIL 2 — Confirmation automatique pour le visiteur
    await sendEmail({
      sender: { name: 'Alyssa Nkolo', email: SENDER },
      to: [{ email, name }],
      subject: 'Merci pour votre message !',
      htmlContent:
        `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">` +
        `<p>Bonjour ${esc(name)},</p>` +
        `<p>Merci de l'intérêt que vous portez à mon travail. ` +
        `J'ai bien reçu votre message et je reviens vers vous sous 48 h.</p>` +
        `<p>À très vite,<br><b>Alyssa Nkolo</b></p>` +
        `<hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>` +
        `<p style="color:#888;font-size:12px">Ceci est un message automatique. Vous pouvez répondre à cet email — j'y aurai accès.</p>` +
        `</div>`,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Erreur Brevo:', e);
    return res.status(500).json({ error: 'Envoi impossible' });
  }
}
