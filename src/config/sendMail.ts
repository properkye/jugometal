// import axios from 'axios';

export interface EmailData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  adresa: string;
  message?: string;
}

export interface EmailResponse {
  message: string;
}

export const sendEmail = async (): Promise<EmailResponse> => {
  try {
    // await axios.post('/api/order', { data });
    console.log('helloooo')
    return { message: 'Email uspešno poslat.' };
  } catch (error) {
    return { message: 'Došlo je do greške. Pokušajte ponovo kasnije.' };
    console.log(error)
  }
};
