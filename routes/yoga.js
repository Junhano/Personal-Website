const express = require('express'),
      router = express.Router()


router.get('/yoga/home', (req, res)=>{
	res.render('website-template/yoga/home')
})

router.get('/yoga/about', (req, res)=>{
	res.render('website-template/yoga/about')
})

router.get('/yoga/class', (req, res)=>{
	res.render('website-template/yoga/class')
})

router.get('/yoga/contact', (req, res)=>{
	res.render('website-template/yoga/contact')
})

router.get('/yoga/blog', (req, res)=>{
	res.render('website-template/yoga/blog')
})

router.get('/yoga/instructors', (req, res)=>{
	res.render('website-template/yoga/instructors')
})

module.exports = router;