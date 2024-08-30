import { createTransport } from 'nodemailer';

class NodeMailer {
  async sendMessage(email: string, message: any) {
    const transporter = createTransport({
      host: 'mail.nic.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'design@xn----etbbcx3acanefm9n.xn--p1ai',
        pass: '12qwasZX',
      },
      dkim: {
        domainName:
          'nicmail20230706._domainkey.xn----etbbcx3acanefm9n.xn--p1ai',
        keySelector: '2019',
        privateKey:
          '-----BEGIN PRIVATE KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmPP1E5p9XlmyNMULIbFLR6wc6TTdjQ69Ry+6+3wj/CZNUGw3ieUSRHxlTyCaqABmS8i0kJGYCkLiBKR0zECSy74M/FmxJ1Z6BB5WplEpdgmZljRFWJM0zxpRuSS6kKibSvB+XYWGH8KfQa4DsGMTT5e6wGG6xAgHQefGPGCbnTEF8iJ84qOojZ27dDWRUA1KSBWj3aJ6E5oYJjd3Qbw1cHr9v+Kq0nzCMY7DVECn+kcx9W1pV/PYT8hyFzzJc9gZEXBk8Kr47wFHYuSfxBCH1FPyTyl/RYD2Ds3ntSh3hrpCVBZGv3r8J53xpOZnN3aGK+mxXer3OXoXR7pn/ueRoQIDAQAB',
      },
    });

    return transporter.sendMail({
      from: '"WORKOUT ORDER" <design@стройгород-юг.рф>',
      to: email,
      subject: 'New Order Workout',
      text: JSON.stringify(message),
      html: message,
      headers: {
        'x-unprocessed': {
          prepared: true,
          value: 'a really long header or',
        },
      },
    });
  }
}
export default new NodeMailer();
