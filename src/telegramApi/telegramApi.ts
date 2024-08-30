import axios from 'axios';
import { config } from 'dotenv';
config();
class TelegramApi {
  async sendMessage(id: number, message: string) {
    return axios.post(
      `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage?chat_id=${id}&parse_mode=html&text=${message}`,
    );
  }
}
export default new TelegramApi();
