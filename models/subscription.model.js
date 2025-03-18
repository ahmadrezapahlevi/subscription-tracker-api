import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'nama subscription diperlukan'],
    trim: true,
    minLength: 2,
    maxLength:100,
  },
  price: {
    type: Number,
    required: [true, 'harga subscription diperlukan'],
    min: [0, 'harga harus lebih dari 0']
  },
  currency: {
    type: String,
    enum: ['USD', 'EUR', 'GBP'],
    default: 'USD'
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
  },
  category: {
    type: String,
    enum: ['sports', 'news', 'entertaiment', 'lifestyle', 'technology', 'finance', 'politics', 'other'],
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['active', 'cancelled', 'expired'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => value < newDate(),
      message: 'start date must be in the past',
    }
  },
  renewalDate: {
    type: Date,
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: 'renewalDate must be be after start date',
    }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: 'true',
    index: 'true',
  }
}, {timestamps: true })

// auto-calculate renewalDate if missing.
subscriptionSchema.pre('save', function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    }
    
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
  }
  
  // auto update the status if renewal date has passed
  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }
  
  next();
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;