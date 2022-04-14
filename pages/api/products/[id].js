
import dbConnect from "../../../config/dbConnect";
import Product from "../../../models/product";


export default async function handler(req, res) {

  const {method,query: { id }} = req;
  
  dbConnect();
  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === 'PUT') {
    try {
      const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  }

}

// handler.get(getDish);
// handler.put(updateDish);
// handler.delete(deleteDish);

