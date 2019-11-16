//create continer

var continer = document.createElement("div");
continer.className = "continer";
document.body.appendChild(continer);

//create button to set number of squares
var bout = document.createElement("button");
bout.innerHTML = "set  number of squares";
bout.className = "bout";
continer.appendChild(bout);

// create mainDiv --> continer
var mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";

mainDiv.style.width = "700px";
mainDiv.style.height = "700px";
mainDiv.style.background = "#fff";
continer.appendChild(mainDiv);

// create child Squares
function createChild(n) {
    for (var i =0 ;i<n*n ; i++){
        var childSquares = document.createElement("div");
        childSquares.className="childSquares";
        childSquares.id="x"+i.toString();
        childSquares.style.height=(700/n)*0.8+"px";
        childSquares.style.width=(700/n)*0.8+"px";
        childSquares.style.margin=((700/n)*0.1)+"px";
        childSquares.style.background= "#000";
        mainDiv.appendChild(childSquares);
    }
        
  //set random  color to the child on hover        
    
  for(var j = 0 ; j<n*n;j++){
      var s =document.getElementById("x"+j.toString());
      s.onmouseover= function(){
          this.style.backgroundColor = "rgb("+Math.floor(Math.random()*250)+","+Math.floor(Math.random()*250)+","+Math.floor(Math.random()*250)+")";
      } 
  }  
};
//defult value
createChild(16);

//clear parents when input new value 
bout.onmousedown = function(){
  mainDiv.innerHTML="";     
};

bout.onmouseup = function(){
     var count =prompt("Enter the number of squares you want","16");
     var count2 =parseInt(count);
     return createChild(count2);   
};

