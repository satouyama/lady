var express = require('express');
const app = express();
var port = process.env.PORT || 3000;


app.set('view engine','ejs');
app.use(express.static('./app/public'));


app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/termo', (req, res)=>{
    res.render('term')
})

app.get('/login',(req, res)=>{
    res.render('login')
})

app.get('/perfil',(req, res)=>{
    res.render('profile')
})

app.get('/home',(req, res)=>{
    res.render('home')
})

app.get('/redirect',(req, res)=>{
    res.redirect('https://disney.com.br/')
})


app.listen(port, function(err){
    if(err) {
        console.log('não foi possivel subir o servidor');
    } else {
        console.log('SERVER LISTENING ON PORT ' + port);
    }
})