const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ override: true });

// Debug: verify env is loading the correct key
console.log('[DEBUG] GROQ key loaded:', process.env.GROQ_API_KEY ? process.env.GROQ_API_KEY.substring(0, 15) + '...' : 'NOT FOUND');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
// Import Routes
const facultyRoutes = require('./routes/facultyRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const contactRoutes = require('./routes/contactRoutes');
const studentRoutes = require('./routes/studentRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/faculty', facultyRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
    res.send('PCCOE AI & ML Website API Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
