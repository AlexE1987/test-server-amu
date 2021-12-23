import mongoose from 'mongoose';

const Podcast = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String },
  cover: { type: String },
  content: { type: String, required: true },
});

export default mongoose.model('Podcast', Podcast);
