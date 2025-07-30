const express = require('express');
const cors = require('cors');
const app = express();
const port = 50001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend on port 50001!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

// Start
app.listen(port, () => {
  console.log(`✅ Node.js backend running at http://localhost:${port}`);
});