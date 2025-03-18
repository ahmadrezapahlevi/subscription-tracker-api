import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'nama user diperlukan'],
    trim: true,
    minLength: 2,
    maxLength:50,
  },
  email: {
    type: String,
    required: [true, 'email user diperlukan'],
    unique:true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'mohon Isi dengan email adres yang valid'],
  },
  password: {
    type: String,
    required: [true, 'password user diperlukan'],
    minLength: 6,
  }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;