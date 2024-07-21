import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '../lib/cloudinary';
import formidable from 'formidable';
import { promisify } from 'util';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = promisify(formidable.IncomingForm.prototype.parse);

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const form = new formidable.IncomingForm();
    const [fields, files] = await parseForm.call(form, req);
    const file = (files.file as formidable.File).filepath;

    cloudinary.uploader.upload(file, (error, result) => {
      if (error) {
        return res.status(500).json({ error: (error as Error).message });
      }

      res.status(200).json({ url: result.secure_url });
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export default upload;
