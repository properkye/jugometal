import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface CartItem {
  name: string;
  qty: number;
  priceData: {
    price: number;
  };
}

interface UserData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
}

interface RequestBody {
  user: UserData;
  items: CartItem[];
}

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();
    const { user, items } = body;

    // Priprema sadržaja
    const itemDetails = items.map((item) => {
      return `${item.name} (${item.qty} kom x ${item.priceData.price} RSD)`;
    }).join('\n');

    const message = `
Nova narudžbina:

📦 Proizvodi:
${itemDetails}

👤 Podaci kupca:
Ime i prezime: ${user.fullName}
Email: ${user.email}
Telefon: ${user.phone}
Adresa: ${user.address}, ${user.postalCode} ${user.city}
`;

    // Nodemailer konfiguracija
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Porudžbina" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nova porudžbina sa sajta',
      text: message,
    });

    return NextResponse.json(
      { message: 'Narudžbina uspešno poslata putem mejla!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Greška u API-ju:', error);
    return NextResponse.json({ error: 'Došlo je do greške.' }, { status: 500 });
  }
}
