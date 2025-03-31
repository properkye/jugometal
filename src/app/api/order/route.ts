import { mailOptions, transporter } from '../../../config/nodemailer';

interface OrderData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  adresa: string;
}

export async function POST(req: Request) {
  const body = await req.json(); // Parsiranje tela zahteva u JSON

  const data: OrderData = body.data;

  if (
    !data.name ||
    !data.email ||
    !data.phone ||
    !data.surname ||
    !data.adresa
  ) {
    return new Response(JSON.stringify({ message: 'Check credentials.' }), {
      status: 400,
    });
  }

  const proizvodiHTML = `<h3>Novi e-mail od potencijalnog kupca. Molimo vas pozovite na broj telefona koji je prosledjen.</h3>`;

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: 'Nova poruka od potencijalnog kupca. Kontaktirajte ga za vise informacija.',
      text: 'This is text string',
      html: `
        <h1>Porudzbina od: ${data.name} ${data.surname}</h1>
        <h2>Email kupca: ${data.email}</h2>
        <h2>Telefon kupca: ${data.phone}</h2>
        <h3>Adresa kupca: ${data.adresa}</h3>
        ${proizvodiHTML}
      `,
    });

    return new Response(JSON.stringify({ message: 'Email Sent.' }), {
      status: 200,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    } else {
      return new Response(JSON.stringify({ message: 'Došlo je do greške.' }), {
        status: 400,
      });
    }
  }
}
