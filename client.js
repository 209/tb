const TelegramBotClient = require('telegram-bot-client');
const client = new TelegramBotClient(process.env.TELEGRAM_API_TOKEN);

module.exports = client;
