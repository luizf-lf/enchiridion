import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router();

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

// routes
routes.post('/feedbacks', async (req, res) => {
  // console.log(req.body);

  const { comment, type, screenshot } = req.body;

  await prisma.feedback
    .create({
      data: {
        comment,
        type,
        screenshot,
      },
    })
    .then(async (data) => {
      await transport.sendMail({
        from: 'Luizf-LF <dev@luizf-lf.com>',
        to: 'Luiz Fernando <luiz@test.com>',
        subject: 'Novo feedback',
        html: [
          `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
          `<p> Tipo do feedback: ${type}</p>`,
          `<p> Comentário: ${comment}`,
          `</div>`,
        ].join('\n'),
      });
      return res.status(201).json({ status: 'OK', error: null, data });
    })
    .catch((e) => {
      return res.status(500).json({ status: 'ERROR', error: e });
    });
});
