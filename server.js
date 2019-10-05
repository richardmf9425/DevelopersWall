const express = require('express');
const connectMongoose = require('./config/db');
const app = express();

// Database
connectMongoose();

//Middlewares
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
	res.send('api running');
});

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 2093;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
