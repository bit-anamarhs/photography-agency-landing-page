import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import products from "@/models/Products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {

    if (req.method === "POST") {
        try{
            await connectToDatabase();

            const {title, imageUrl, description, tags, url} = req.body;

            const newProduct = await products.create({title, imageUrl, description,tags, url});

            const savedProduct = await newProduct.save();
            res.status(201).json(savedProduct);

        }catch(err){
            console.log(err);
            res.status(500).json({ message: "Failed to process your request, please try again" });
        }

    }else if (req.method === "GET"){
        try{
            await connectToDatabase();

            const productsList = await products.find();
            res.status(200).json(productsList);



        }catch(err){
        
        }
    }



}
