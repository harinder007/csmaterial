const express = require('express');
const connectDB = require('./config/mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

// Connecting MongoDB
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/papers', require('./routes/api/paper'));

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
