import { Schema, Document, model, models } from "mongoose";

interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
  author: Schema.Types.ObjectId;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  views: number;
}

export const QuestionSchema = new Schema<IQuestion>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  views: { type: Number, default: 0 },
});

const Question = models.Question || model("Question", QuestionSchema);

export default Question;
