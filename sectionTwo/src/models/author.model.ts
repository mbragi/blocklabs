import { Schema, model } from 'mongoose';
import IAuthor from '@/interfaces/author.interface';

const AuthorSchema = new Schema<IAuthor>(
  {
    name: {
      type: String,
      unique: true 
    },
    bio: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
  },
  { timestamps: true },
);

const Author = model<IAuthor>('authors', AuthorSchema);

export default Author;
