import axios from 'axios';
import { config } from 'dotenv';
config();
class TelegramApi {
  async sendMessage(message: string) {
    console.log(message);
    const a = await axios.post(
      `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage?chat_id=${1478881318}&parse_mode=html&text=${message}`,
    );
    console.log(a);
  }
}
export default new TelegramApi();
