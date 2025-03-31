import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (!email || !pass) {
  throw new Error('EMAIL i EMAIL_PASS moraju biti definisani u .env fajlu.');
}

export const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions: SendMailOptions = {
  from: email,
  to: email,
};
