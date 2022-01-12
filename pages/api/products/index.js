import dbConnect from '../../../db/dbconect';
import Products from '../../../models/Product';
dbConnect()



export default function handler(req, res) {
    res.status(200).json({ product: 'foos' })
  }
