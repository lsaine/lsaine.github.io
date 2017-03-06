function myAlert()
	{alert("It worked!");}


function myChange()
  {document.getElementById("change").innerHTML="Surprise!";}
	

var c = document.getElementById("color");
var ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(20,20,250,150);
		
		
var g = document.getElementById("gradient");
var ctxg = g.getContext("2d");

var grd = ctxg.createLinearGradient(20,20,250,150);
	grd.addColorStop(0,"MediumVioletRed");
	grd.addColorStop(1,"DarkOrange");

	ctxg.fillStyle = grd;
	ctxg.fillRect(20,20,250,150);
	

var r = document.getElementById ("rectangle");
var ctxr = r.getContext ("2d");
	ctxr.fillRect(20,20,200,150);
	ctxr.clearRect(45,45,120,100);
	ctxr.strokeRect(70,70,70,50);


function allowDrop(event)
	{event.preventDefault();}

function drag(event)				// sets data type and value of dragged data
	{event.dataTransfer.setData("img/png", event.target.id);}
	
function drop(event)
	{event.preventDefault();
	var drag = event.dataTransfer.getData("img/png", event.target.id);
	//gets the dragged data that was set to the same type in the event.dataTransfer.setData() method
	event.target.appendChild(document.getElementById("drag"));}