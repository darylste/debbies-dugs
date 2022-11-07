import SGMail from '@sendgrid/mail';
import { emailTemplate } from '../../email';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.message ||
      !req.body.contactNumber
    ) {
      return res.status(400).json({ message: 'Please complete the form' });
    }

    const msg = {
      to: 'dstensland5@gmail.com',
      from: 'dstensland5@gmail.com',
      subject: 'Send via debbies-dugs.co-uk',
      text: 'Send via debbies-dugs.co-uk',
      html: emailTemplate(
        req.body.firstName,
        req.body.lastName,
        req.body.message,
        req.body.contactNumber
      ),
    };

    try {
      SGMail.setApiKey(process.env.SEND_GRID_KEY as string);
      await SGMail.send(msg);
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(500).json({ message: 'Request must be a POST request' });
  }
}
