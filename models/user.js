import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Мыло такое уже в наличии!'],
    required: [true, 'Мыло в обязоне заполнить!'],
  },
  username: {
    type: String,
    required: [true, 'Юзернейм в обязоне заполнить!'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Вы инвалид, ибо должно быть 8-20 символов и оно уникально!',
    ],
  },
  image: {
    type: String,
  },
})

const User = models.User || model("User", UserSchema);

export default User;