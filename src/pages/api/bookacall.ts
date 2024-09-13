import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import bookACall from "@/models/Bookcall";

export default async function CallbookingHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    try {
      await connectToDatabase();

      const { username, email, phoneNumber, date, time, comment } = req.body;

      if (!username || !email || !phoneNumber || !date || !comment) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ error: "Invalid phone number format" });
      }

    
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ error: "Invalid date format" });
      }

      const existingBookCall = await bookACall.findOne({ email });

      if (existingBookCall) {

        existingBookCall.comment.push(comment);
        existingBookCall.phoneNumber = phoneNumber;
        existingBookCall.date = parsedDate;
        existingBookCall.time = time;

        const updatedBookCall = await existingBookCall.save();
        res.status(200).json(updatedBookCall);
      } else {

        const newBookCall = new bookACall({
          username,
          email,
          phoneNumber,
          date: parsedDate,
          time,
          comment: [comment],
        });

        const savedBookCall = await newBookCall.save();
        res.status(201).json(savedBookCall);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "Failed to process your request. Please try again later.",
      });
    }
  } else if (req.method === "GET") {
    try {
      await connectToDatabase();
      const allBookCalls = await bookACall.find({});
      const filteredBookCalls = allBookCalls.map(
        ({ username, email, phoneNumber, date, time, comment }) => ({
          username,
          email,
          phoneNumber,
          date,
          time,
          comment,
        })
      );

      res.status(200).json(filteredBookCalls);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Failed to fetch book calls. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
