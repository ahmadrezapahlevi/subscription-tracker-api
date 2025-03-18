const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ... err }
    
    error.message = err.message;
    
    console.error(err);
    
    // mongoose bad ObjectId
    if (err.name === 'CastError') {
      const message = 'Resouece not found';
      error = new Error(message);
      error.statusCode = 404;
    }
    
    // mongoose duplicate key
    if (err.code === 11000) {
      const message = 'Duplicate field value entered'
      error = new Error(message);
      error.statusCode = 404;
    }
    
    // mongoose validation error
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(val => val.message);
      error = new Error(message.join(', '));
      error.statusCode = 404;
    }
    
    res.status(error.statusCode || 500).json({ succes: false, error: error.message || 'Server error' });
  } catch (error) {
    next(error);
  }
}

export default errorMiddleware;