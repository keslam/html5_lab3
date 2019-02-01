var myPlaylist=['1.mp3','2.mp3','3.mp3'];

var f=0,
	audioTag=document.getElementById("demo"),
	btnRandom=document.getElementById("random"),
	btnRepeat=document.getElementById("repeat"),
	danger=document.getElementById("danger"),
	shuffle=false;
	repeat=false;
	check=true;

var lastrandom,
	random;
var randomObj={
    ran:function ()
    {    while ( lastrandom === random ) {
        random = Math.floor(Math.random() * 3); }
    lastrandom = random;
    return random}, 
 }
var j=randomObj.ran();

function readFiles(){        
    for(var i = 0; i < myPlaylist.length; i++){
    	var node = document.createElement("div");
    	var textnode = document.createTextNode(myPlaylist[i]);
    	node.appendChild(textnode);
    	document.getElementById("view").appendChild(node);
    }
}

function randFiles(){    
	if(repeat){
		alert("Can't Repeat and Shuffle");
	}else{
		shuffle=!shuffle;
	}
}

function repeatFiles(){    
	if(shuffle){
		alert("Can't Repeat and repeat");
	}else{
		repeat=!repeat;
	}
}

function playFiles(event){    
	if (shuffle==false){
		if (f==2 && repeat==true){f=0;check=false;}
		if(check==true){f++};    
	    	event.target.src = myPlaylist[f];
	    	event.target.play();
	    	check=true;
	}else if (shuffle==true){

            event.target.src = myPlaylist[j];
            event.target.play();
	}
}


readFiles();
btnRandom.addEventListener("click",randFiles);
btnRepeat.addEventListener("click",randFiles);
audioTag.addEventListener("ended",playFiles);
