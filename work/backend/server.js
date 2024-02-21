// const express = require ("express");
// const cors = require('cors');
// const mongoose = require('mongoose');
// const Router = require("./routes/routes.js")


// require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 5000;


// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri);
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
 
// })


// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// app.use(express.json());




// app.use(Router);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

// module.exports = { mongoose }



const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const Router = require("./routes/routes.js");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  // Attempt to reconnect
  setTimeout(() => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }, 5000); // Retry connection after 5 seconds
});

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(Router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = { mongoose };
