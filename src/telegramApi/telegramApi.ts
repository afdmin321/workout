import axios from 'axios';
import { config } from 'dotenv';
config();
class TelegramApi {
  async sendMessage(message) {
    const a = await axios.post(
      `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage?chat_id=${1478881318}&parse_mode=html&text=${message}`,
    );
  }
}
export default new TelegramApi();
