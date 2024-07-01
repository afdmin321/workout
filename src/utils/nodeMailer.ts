import { createTransport } from 'nodemailer';
class NodeMailer {
  async sendMessage(email: string, message: any) {
    const transporter = createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'afdmin321@mail.ru',
        pass: 'r9utdpw3MkE2hsKkF5cS',
      },
    });

    const result = await transporter.sendMail({
      from: '"IT department" <n-moskovchenko@mail.ru>',
      to: email,
      subject: 'New Order Workout',
      text: JSON.stringify(message),
      html: message,
    });

    console.log(result);
    return result;
  }
}
export default new NodeMailer();
