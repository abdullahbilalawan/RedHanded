const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/', (req, res) => { 
  res.send('backend is working fine'); //Line 10
}); 
