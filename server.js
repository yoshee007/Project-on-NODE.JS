const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.status(200);  
  res.send('Kokojambo')
});
 
app.listen(8080, () => {
    console.log('Success!');
})