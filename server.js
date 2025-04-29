// server.js
const express = require('express');
const app = express();

app.use(express.json()); // Bắt body JSON

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.send('Webhook received');
});

// Home (check server sống)
app.get('/', (req, res) => {
  res.send('Hello from Webhook Server!');
});

// Start server (Vercel sẽ tự động hiểu PORT)
const port = process.env.PORT || 5678;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
