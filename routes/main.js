const express = require('express'),
      router = express.Router()

router.get('/', (req, res) =>{
	res.render('home')
})

router.get('/game', (req, res)=>{
	res.render('game')
})

router.get('/AI', (req, res)=>{
	res.render('AI')
})

router.get('/pproject', (req, res)=>{
	res.render('personalproject')
})

router.get('/music', (req, res)=>{
	res.render('music')
})

router.get('/game/:name', (req, res)=>{
	res.render('games/' + req.params.name)
})


module.exports = router;