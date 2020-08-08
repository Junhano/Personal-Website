const express = require('express'),
	  app     = express(),
	  mainRoute = require('./routes/main'),
	  yogaRoute = require('./routes/yoga')


app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

app.use(mainRoute)
app.use(yogaRoute)






let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});
