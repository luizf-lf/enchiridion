import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  // host: process.env.MAIL_SERVER,
  // port: process.env.MAIL_PORT,
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Luizf-LF <dev@luizf-lf.com>',
      to: 'Luiz Fernando <luiz@test.com>',
      subject: subject,
      html: body,
    });
  }
}
