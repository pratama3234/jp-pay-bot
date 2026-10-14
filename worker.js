
export default {
  async fetch(request, env) {
    if (request.method === 'POST') {
      const update = await request.json();
      const chatId = update.message?.chat.id;
      const text = update.message?.text || '';
      
      let reply = `Halo! JP PAY USDT EXCHANGE\n\nKetik /start`;
      if (text.includes('/start')) {
        reply = `✨ *JP PAY USDT EXCHANGE* ✨\n\n✅ Bot ON 24 Jam via Cloudflare\n💰 Rate USDT Hari Ini\n\nMenu:\n/start - Menu utama\n/rate - Cek kurs\n\nDeveloped by @JP_PAY158`;
      }
      if (text.includes('/rate')) {
        reply = `💵 *RATE JP PAY*\n1 USDT = Rp 16.450\nStok tersedia!\nHubungi @JP_PAY158`;
      }

      await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: reply, parse_mode: 'Markdown' })
      });
      return new Response('OK');
    }
    return new Response('Bot JP PAY Aktif di Cloudflare!');
  }
}
