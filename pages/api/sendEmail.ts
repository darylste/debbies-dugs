import SGMail from '@sendgrid/mail';
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
      !req.body.subject ||
      !req.body.message
    ) {
      return res.status(400).json({ message: 'Please complete the form' });
    }

    const msg = {
      to: 'kevinmcgrady47@gmail.com',
      from: 'kevinmcgrady47@gmail.com',
      subject: req.body.subject,
      text: req.body.subject,
      html: `<strong>${req.body.firstName} ${req.body.lastName} ${req.body.contactNumber} ${req.body.message}</strong>`,
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
