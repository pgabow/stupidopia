import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Написать в обязоне!'],
  },
  tag: {
    type: String,
    required: [true, 'Сложно тег проставить?'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;