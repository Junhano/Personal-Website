function setup() {
	let currentScene;
	let health;
	let health5=5;
	let positionX=30;
	let positionY=0;
	let xspeed=3;
	let yspeed=5;
	let score=0;
	let scoreX=0;


	let btnmouseX=106;
	let addValue=0;
	let speedfree;
	
	let inputSpeed;
	let inputHealth;
	
	let parent_container = document.querySelector('.center-c')
  	let canvas = createCanvas(parent_container.offsetWidth, windowHeight / 1.5); 

    canvas.parent('ball');
	
	
	
	let btn=function(confg){
		this.x=confg.x||0;
		this.y=confg.y||0;
		this.width=confg.width||110;
		this.height=confg.height||37;
		this.text=confg.text||"Press me";
	};

	let Boxc = function(x, y) {
    	this.x = x;
   	 	this.y = y;
    
	};

	Boxc.prototype.draw = function() {
		fill(39, 196, 112);
		rect(this.x, this.y, 20, 20);
	};
	
	Boxc.prototype.contain = function(){
		if (positionX >= this.x && positionX <= this.x + 20 && positionY >= this.y && positionY <= this.y + 20){
			return true
		}
		else{
			return false
		}
	}

	let Boxcs = [];
	for (var i = 0; i < 40; i++) {  
		Boxcs.push(new Boxc(i * 30 , random(44, 130)));
	}





	let btnReturn=new btn({
		x:parent_container.offsetWidth - 115,
		y:0,
		text:"Return to menu"
	});

	let btnSurvival=new btn({
		x:300,
		y:140,
		text:"Survival Mode"
	});
	let btnInfinity=new btn({
		x:750,
		y:140,
		text:"Infinity Mode"
	});

	let btnDescription= new btn({
		x:2,
		y:1,
		width:125,
		text:"Game Description"
	});
	let btnChallenge=new btn({
		x:300,
		y:340,
		width:120,
		text:"Challenge mode"
	});
	let btnFree=new btn({
		x:750,
		y:340,
		text:"Free mode"
	});

	let btnFree1=new btn({
		x:1000,
		y:600,
		text:"Press To Start"
	});
	
	let drawButton=function(btn){
		fill(60, 185, 230);
		rect(btn.x,btn.y,btn.width,btn.height,10);
		fill(54, 35, 35);
		textSize(15);
		text(btn.text,btn.x+2,btn.y+btn.height/1.8);

	};

	let mouseIsInside=function(btn){
		return(mouseX>=btn.x&&mouseX<=btn.width+btn.x&&mouseY>=btn.y&&mouseY<=btn.height+btn.y);  
	};
	
	let endGame = function(win){
		drawScene9(win)
	}
	
	
	
	let ballMovement = function(infinity){
		positionX += xspeed;
		positionY += yspeed;
		if ((positionX > width) || (positionX < 0)) {
			xspeed = xspeed * -1;
		}
		if ( (positionY < 0 )) {
			yspeed = yspeed * -1;
		}

		if(positionX>mouseX&&positionX<mouseX+55&&positionY> windowHeight / 1.5 - 5){
			if (infinity) {
				yspeed *= -1
			}
			else{
				yspeed = yspeed* (-1-scoreX/50);
				score++;
				scoreX++;
			}

		}
		if  (positionY>height){
			positionY=0;
			if (!infinity){
				health5--;
				scoreX=0;
				yspeed=5;	
			}

		}


		
	}


	let ballMovementFree = function(){
		positionX += speedfree
		positionY += speedfree
		if ((positionX > width) || (positionX < 0)) {
			xspeed = xspeed * -1;
		}
		if ( (positionY < 0 )) {
			yspeed = yspeed * -1;
		}
		if(positionX>mouseX&&positionX<mouseX+55&&positionY> windowHeight / 1.5 - 5){
			yspeed *= -1
			score++;
		}
		if (positionY > height){
			health--;
			positionY = 0
			yspeed = speedfree
		}
		
		
	}
	
	let ballMovementChallenge = function(){
		positionX += xspeed
		positionY += yspeed
		if ((positionX > width) || (positionX < 0)) {
			xspeed = xspeed * -1;
		}
		if ( (positionY < 0 )) {
			yspeed = yspeed * -1;
		}
		if(positionX>mouseX&&positionX<mouseX+55&&positionY> windowHeight / 1.5 - 5){
			yspeed *= -1
		}
		if (positionY > height){
			health5--;
			positionY = 0
		}
	}
	
	//home page (done)
	let drawScene1=function(){
		currentScene=1;  
		score = 0;
		background(89, 60, 60);

		fill(43, 130, 129);
		rect(0,0,parent_container.offsetWidth, windowHeight / 1.5);

		fill(89, 43, 43);
		textSize(33);
		text("The ball game",parent_container.offsetWidth/ 2.5, 66);
		fill(17, 36, 156);
		textSize(20);
		text(" Made by Jimmy",parent_container.offsetWidth/ 2.5 + 150,107);

		noStroke();
		drawButton(btnDescription);    
		drawButton(btnSurvival);
		drawButton(btnInfinity);
		drawButton(btnFree);  
		drawButton(btnChallenge);

	};



	//survival mode (done)
	let drawScene2=function(){
		currentScene=2;
		background(150, 150, 150);
		mouseX=constrain(mouseX,0,parent_container.offsetWidth - 55);
		rect(mouseX,windowHeight / 1.5 - 5,55,5);

		ellipse(positionX,positionY,10,10);
		ballMovement()

		textSize(29);
		text("lives:"+health5,20,46);   
		text("score:"+score,900,46);
		
		if (health5 < 0){
			endGame(false)
		}


	};



	//infinity mode  (done)
	let drawScene3=function(){
		currentScene=3;
		background(4, 68, 102);
		fill(0, 255, 157);

		textSize(20);
		text("Infinity Mode",500,47);
		mouseX=constrain(mouseX,0,parent_container.offsetWidth - 55);
		rect(mouseX,windowHeight / 1.5 - 5,55,5);


		ellipse(positionX,positionY,10,10);
		ballMovement(true)
		drawButton(btnReturn);
	};

	//description  (done)
	let drawScene4=function(){
		currentScene=4;
		background(74, 176, 23);
		drawButton(btnReturn);
		textSize(30);
		text(" Game Description",440,70);
		textSize(20);
		textLeading(28);
		text("Survival Mode:\n You have 5 lives, that means you dead when you didn't catch ball 5 times \nInfinity Mode: \nYou have infinty lives, you are not going to diedddddd \n Free Mode: \n You can control the speed of the ball and how many lives do you want \n Challenge Mode: \n You have 5 lives, some surprise challenges!! You will like it",300,190);
	};


	//challenge mode (done)
	let drawScene5=function(){
		currentScene=5;
		background(232, 216, 216);
		fill(56, 36, 36);
		
		for (let i=0; i < Boxcs.length; i++) {
			Boxcs[i].draw();
		}   

		mouseX=constrain(mouseX,0,parent_container.offsetWidth - 55);
		rect(mouseX,windowHeight / 1.5 - 5,55,5);
		
		ellipse(positionX,positionY,10,10);
		for (let i = 0; i < Boxcs.length; i++){
			if (Boxcs[i].contain()){
				Boxcs.splice(i, 1)
				score += 1
				break;
				}
		}
		
		ballMovementChallenge();
		

		textSize(29);
		text("lives:"+health5,20,46);   
		text("score:"+score,900,46);

		if  (health5<0){
			endGame(false)
		}
		else if (Boxcs.length === 0){
			endGame(true)
		}


	   };

	//free mode Prep (done)
	let drawScene6=function(){
		currentScene=6;
		noLoop();
		background(161, 196, 190);

		fill(125, 55, 55);
		text("Type the speed of mouse you want",400,140);  
		inputSpeed = createInput('', 'number');
  		inputSpeed.position(805, 330); 




		text("Type the number of health you want", 400,400);
		inputHealth = createInput('', 'number');
		inputHealth.position(805, 585);

		


		drawButton(btnFree1);

	};

	//free mode real
	let drawScene8=function(){
		currentScene=8;
		background(2, 85, 140);
		fill(69, 63, 63);
		mouseX=constrain(mouseX,0,parent_container.offsetWidth - 55);
		rect(mouseX,windowHeight / 1.5 - 5,55,5);
		ellipse(positionX,positionY,10,10);
		ballMovementFree();

		if (health < 0){
			endGame(false);
		}

		textSize(27);
		fill(200, 209, 67);
		text("Free Mode",142,62);
		textSize(20);
		fill(0, 0, 0);
		text("score:"+score,300,112);   
	};
	
	let drawScene9 = function(win){
		currentScene=9;

		background(161, 196, 190);

		fill(125, 55, 55);
		textSize(25);
		if (win){
			text("Congrat, you win",500,240);  
		}
		else{
			text("Sorry you are died", 500, 240);
			text("Score:" + score, 500, 340)
		}
		health5 = 5;
		drawButton(btnReturn)
		
		

		
		

	}
	
	
	draw= function() {
		switch(currentScene){
			case 2:
				drawScene2();
				break;
			case 3:
				drawScene3();
				break;
			case 5:
				drawScene5();
				break;
			case 6:
				drawScene6();
				break;
			case 8:
				drawScene8();
				break;
			case 9:
				drawScene9();
				break;
		}
	};
	
	mouseClicked=function(){
			if(currentScene===1){
				if(mouseIsInside(btnDescription)){
				drawScene4();
				}
				else if(mouseIsInside(btnSurvival)){
				drawScene2();
				}
				else if(mouseIsInside(btnInfinity)){
				drawScene3();
				}
				else if(mouseIsInside(btnChallenge)){
				drawScene5();
				}
				else if(mouseIsInside(btnFree)){
				drawScene6();
				}
			}
			if(currentScene===2){

			}
			if(currentScene===3 || currentScene === 4 || currentScene === 9){
				if(mouseIsInside(btnReturn)){
					drawScene1();
				}
			}
			if(currentScene===6){
				if(mouseIsInside(btnFree1)){
					let temp_speed = inputSpeed.value();
					let temp_health = inputHealth.value();
					if (temp_speed != "" && temp_health != ""){
						health = Number(temp_health)
						speedfree = Number(temp_speed)
						loop();
						drawScene8();
					}
				}
		}
		};

	
	
	drawScene1();
}








