import jsonServer from 'json-server';
import express from 'express';
import cors from 'cors';

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(express.json());

// Middleware to validate API key
server.use((req, res, next) => {
  const apiKey = req.headers['api-key']; // Header must be 'api-key'
  if (apiKey === 'aespa-api-key') {
    next(); // API key valid
  } else {
    res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }
});

// Login Route
server.post('/login', (req, res) => {
  const { username, password } = req.body;

  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'doctor', password: 'doctor123', role: 'doctor' },
  ];

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = `mock-jwt-token-for-${user.role}`;
    res.json({ token, role: user.role });
  } else {
    res.status(401).json({ message: 'Incorrect username or password' });
  }
});

// Use JSON Server Routes
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});
