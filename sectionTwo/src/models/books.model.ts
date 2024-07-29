import { Schema, model } from 'mongoose';
import IBook from '@/interfaces/book.interface'; 

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'authors',  // Reference to the Author model
    },
    publicationYear: {
      type: Number,
    },
    genre: {
      type: String,
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true },
);

const Book = model<IBook>('books', BookSchema);

export default Book;
