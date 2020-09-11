const express = require('express');
const sendMail = require('./mail.js')
const path = require('path');


// Setting Server
const app = express();
const PORT = 3000;

// Parsing Data
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/email', (req, res) =>{
    
    const {subject, email, text} = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if(err){
            res.status(500).json({message: 'Internal Erro!!'});
        } else{
            res.json({message: 'Email Sent!'});
        }
    });
});

// View Setup
app.use('/static', express.static('public'));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.listen(PORT,() =>{
    console.log(`Server Started on PORT ${PORT}`);
});