

    var start = document.querySelector('.start');
    var reset = document.querySelector('.reset');
    var green = document.getElementById('green');
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var yellow = document.getElementById('yellow');
    var computerInput = [];
    var userInput = [];
    var computClickEvent = [green,red,blue,yellow];
    var computClickColorRestore = ["green","red","blue","yellow"];
    var computClickColor = ["lightgreen","RGB(239, 61, 71)","pink","RGB(255,255,224)"]

    reset.style.display = 'none';
    start.addEventListener("click",startSimon);
    

    green.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    	audio.play();
    })

    red.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    	audio.play();
    })

    blue.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    	audio.play();
    })

    yellow.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    	audio.play();
    })


    function startSimon(){
      var dashboard = document.querySelector('.blackbox');

      start.style.display = 'none';
      reset.style.display = 'block';     

      //changing the display portion
      var begin = setTimeout(begin,1000);


      
    //Main logic resides here
	  function begin(){
	      dashboard.innerHTML = "GET READY"
        
         for(i=0;i<3;i++){
           (function(index){
            var rand = Math.floor(Math.random()*(4));
            computerInput.push(rand);
            
            computerInput.forEach(function(element){
              setTimeout(function(){
                computClickEvent[element].style.background = computClickColor[element];
                computClickEvent[element].click()
              },i*1000);   
              setTimeout(function(){
                computClickEvent[element].style.background = computClickColorRestore[element];
              },i*1500);      
            })
         })(i)
       }
        

          

       
        

        

	     /* clearTimeout(begin);*/
         




      //Make it common for all the rounds
         /* for(i=1;i<=20;i++){
	          	(function(index){
	          		setTimeout(function(){dashboard.innerHTML= "Round-"+index},index*1000)
	          	})(i);
	      }*/
      }
    }   
