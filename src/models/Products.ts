import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMessage extends Document {
  title: string;
  imageUrl: string;
  description: string;
  tags: string;
  url: string;
}

const productSchema = new Schema<IMessage>({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  tags:{type:String, required: true},
  url: { type: String, required: true },
});

const product: Model<IMessage> = mongoose.model<IMessage>(
  "Product",
  productSchema
);

export default product;
