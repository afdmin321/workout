import axios from 'axios';
import { config } from 'dotenv';
config();
class TelegramApi {
  async sendMessage(message: string) {
    axios
      .post(
        `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage?chat_id=${1478881318}&parse_mode=html&text=${message}`,
      )
      .then((res) => res)
      .catch((err) => console.log(err));
  }
}
export default new TelegramApi();
