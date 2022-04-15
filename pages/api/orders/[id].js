import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import Order from '../../../models/order';

const handler = nc();



handler.get(async(req,res) => {
  const {query: { id }} = req;
  await dbConnect();
  try {
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
})

handler.put(async(req,res) => {
  const {query: { id }} = req;
  await dbConnect();
  try {
    const order = await Order.findByIdAndUpdate(id,req.body,{new:true,});
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(err);
  }
})
export default handler;