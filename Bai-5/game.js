//declaring variable in global
var interval = 0;
var amount = 100;
var gameOver = false;
var laps;
var LapComplete = 0;
var win;
var horse;
var funds;
var betonhorse;
var startClicked;
//function to make horse moveRight
function moveRight(){
    horseRace = document.getElementsByClassName('horse');//calling class horse to keep in the variable
        for (var i = 0; i <4; i++) {//loop
        var rate = Math.ceil(Math.random()*(10-5)+5);//speed
        var posLeft = horseRace[i].offsetLeft;//it shows horse's right position
        horseRace[i].className = 'horse rider standRight runRight';//it helps to create animation
        horseRace[i].style.left = posLeft + rate + 'px';//to make horse run 
       var posLeft = horseRace[i].offsetLeft;//it gives the position of horse after running
        var right = Math.round((posLeft/window.innerWidth)*100);//it shows window's position
        var up = Math.round(Math.random()*(80-73)+73);//horse position
        
        if(right==up && posLeft <= window.innerWidth * 0.785){ //initial value was 0.35
                clearInterval(interval);//it clears the interval
                interval = setInterval(moveUp, 50);
            }
            if (posLeft>=window.innerWidth*0.27 && posLeft<=window.innerWidth*0.31) {//shows the position of window
        
        if (LapComplete==laps) {//shows the lap completion
          win = horseRace[i];
          clearInterval(interval);//clears the interval
          
                for (var i = 0 ; i< 4; i++){
                    startClicked++;//it disables the button
                    horseRace[i].className = 'horse standRight';//it creates animation
                    document.getElementById('start').disabled=false;//dissabling the button

                }
                var betAmount = document.getElementById('amount').value;//getting variable name by id
                 var amt = Math.ceil(parseInt(betAmount));//pass the value
                if(horse==win.id){//if condition
                    amount+=amt;//increase the amount when choosen horse wins
                     alert("Congratulations! You win");//alert message
                        }
                     else{
                      amount-=amt;//decrease the amount when choosen horse lose
                      alert("Sorry! You lose");
                            }
                    //enabling the amount, bethorse, numberOfLaps 

                        document.getElementById('funds').innerHTML=amount;
                        document.getElementById('amount').disabled = false;
                        document.getElementById( 'bethorse').disabled = false;
                        document.getElementById('numberOfLaps').disabled = false;
             }
        }
      }   
    }
    


//function to make horse moveUp
function moveUp(){
	horseRace = document.getElementsByClassName('horse');//calling class horse to keep in the variable
		for(var i =0; i<4; i++){//loop
			var rate = Math.ceil(Math.random()*(10-5)+5);//speed
			var posTop = horseRace[i].offsetTop;//it shows horse's top position
			horseRace[i].className = 'horse rider standUp runUp';//it helps to create animation
			horseRace[i].style.top = posTop - rate + 'px';// it makes horse move towards up
			var posTop = horseRace[i].offsetTop;//it gives the position of horse after running
			var tTop = Math.round((posTop/window.innerHeight)*100);//it shows window's position
			var mLeft = Math.round(Math.random()*(9-4)+4);//random movement
			if(tTop == mLeft){
				clearInterval(interval);//clears the interval 
                moveLeft();//calling left method
                interval = setInterval(moveLeft, 50);//it call the moveLeft function
			}
		}
	}
 

//function to make horse moveleft
function moveLeft(){
	horseRace = document.getElementsByClassName('horse');//calling class horse to keep in the variable
	for (var i = 0; i <4; i++) {//loop
		var rate = Math.ceil(Math.random()*(10-5)+5);//speed
        var posLeft = horseRace[i].offsetLeft;//it shows horse's left position
        horseRace[i].className = 'horse  standLeft runLeft';//it helps to create animation
        horseRace[i].style.left = posLeft - rate + 'px';//it makes horse move towards left
        var posLeft = horseRace[i].offsetLeft;//it gives the position of horse after running
        var right = Math.round((posLeft/window.innerWidth)*100);//it shows window's position
        var up = Math.round(Math.random()*(10-5)+5);
        if(right == up){
        	clearInterval(interval);
        	moveDown();//calling down method
        	interval = setInterval(moveDown, 50);//it call the moveDown function
        }
	}
}

//function to make horse moveDown
function moveDown(){
	horseRace = document.getElementsByClassName('horse');//calling class horse to keep in the variable
	for (var i = 0; i <4; i++) {//loop
		var rate = Math.ceil(Math.random()*(10-5)+5);//speed
        var posDown = horseRace[i].offsetTop;//it shows horse's down position
        horseRace[i].className = 'horse  standDown runDown';//it helps to create animation
        horseRace[i].style.top = posDown + rate + 'px';//it makes horse move towards down
        //var positionTop = horseRace[i].offsetTop;//it gives the position of horse after running
        }
        if (posDown >= window.innerHeight*0.78) {//check the windows width
    if(LapComplete<laps){//for lap count                
            LapComplete++;  //increases the lap               
       }
        	clearInterval(interval);
            interval = setInterval(moveRight, 50);//it call the moveRight function setting the speed

            }
        }


//function to startRace
 function startRace(){
 	    //var startMenu = document.getElementById('start');
         document.getElementById('start').disabled = true;
        laps = parseInt(document.getElementById("numberOfLaps").value);
        clearInterval(interval);// it clears the interval
 		interval = setInterval(moveRight, 50);//it call the moveRight function setting the speed

 }


function start(){

	var totalAmount = 100;//declaring variable 
	var laps = document.getElementById("numberOfLaps").value;//it returns the id with specific value
	var lap = Math.ceil(parseInt(laps));//pass the value
    var betAmount = document.getElementById('amount').value;
    var amt = Math.ceil(parseInt(betAmount));
    if (amt>totalAmount) {//if condition
    	alert("Bạn không đủ tiền cược.");
    }
    else if(amt<=0 ){
    	alert("Tiền cược không hợp lệ");//alert message
    }
    else if(lap<1){
    	alert("Số vòng đua không hợp lệ");
    }
    else{
    	startRace();
    	//dissabling amount, bethorse, numberOfLaps 
    	
    	document.getElementById('amount').disabled = true;
	    document.getElementById( 'bethorse').disabled = true;
        document.getElementById('numberOfLaps').disabled = true;

    }
}


//this function is called when startButton is clicked
function myLoadEvent(){
	var startMenu = document.getElementById('start');//get the id of the element
	startMenu.addEventListener('click', start);//

}

//myLoadEvent is called after page loads
document.addEventListener('DOMContentLoaded', myLoadEvent);