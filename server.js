const express = require('express')
const app = express()
const port = 3500

//static files
app.use(express.static('public'));
app.use('/assets',express.static(__dirname + 'public/assets'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/vendor',express.static(__dirname + 'public/vendor'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs');

app.get('/report',(req,res) => {
    res.render('form.ejs')
})

//static get

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

//Listen on port
app.listen(port, () =>{
    console.log("Listening at the port $(port)")
})