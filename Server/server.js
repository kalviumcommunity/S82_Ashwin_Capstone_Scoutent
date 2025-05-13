const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));



const userRoutes = require('./routes/userroutes');
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send('API is running...');
  });

const authRoutes = require('./routes/authroutes');
app.use('/api/auth', authRoutes);

const proroutes=require('./routes/protectedroute');
app.use('/api/protected',proroutes);
  
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


