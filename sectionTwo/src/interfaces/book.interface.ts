import { Document, Types } from 'mongoose';

export default interface IBook extends Document {
  title: string;
  authorId: Types.ObjectId;
  publicationYear?: number;
  genre?: string;
  summary?: string;
}
