const express = require('express'),
	  app     = express()


app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))




app.get('/', (req, res) =>{
	res.render('home')
})

app.get('/game', (req, res)=>{
	res.render('game')
})

app.get('/AI', (req, res)=>{
	res.render('AI')
})

app.get('/pproject', (req, res)=>{
	res.render('personalproject')
})

app.get('/music', (req, res)=>{
	res.render('music')
})

app.get('/game/:name', (req, res)=>{
	res.render('games/' + req.params.name)
})

let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});
