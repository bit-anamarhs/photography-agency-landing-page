import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMessage extends Document {
  username: string;
  email: string;
  phoneNumber: string;
  date: Date;
  time: string;
  comment: string[];
}

const callBook = new Schema<IMessage>(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "phone number is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
    },
    comment: {
      type: [String],
      required: [true, "Comment is required"],
    },
  },
  { timestamps: true }
);

const bookACall: Model<IMessage> =
  mongoose.models.Bookcall || mongoose.model<IMessage>("Bookcall", callBook);

export default bookACall;
