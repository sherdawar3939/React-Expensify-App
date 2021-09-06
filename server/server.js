const path = require('path');
const express =require('express');
const app = express();
const pathFile = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(pathFile));

app.get('*', (req,res)=>{
    res.sendFile(path.join(pathFile, 'index.html'));
})


app.listen(port, ()=>{
    console.log('server is listening on port 3000')
})