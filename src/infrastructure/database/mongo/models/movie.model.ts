import * as mongoose from 'mongoose';

export interface IMovie extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  release_year: number;
  duration_in_minutes: number;
  created_at?: Date;
  updated_at?: Date;
}

const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    release_year: {
      type: Number,
      required: true,
    },
    duration_in_minutes: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { collection: 'movies', versionKey: false },
);

export default mongoose.model<IMovie>('movie', MovieSchema);
