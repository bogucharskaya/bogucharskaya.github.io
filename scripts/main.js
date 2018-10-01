var myHeading = document.querySelector ('h1');
myHeading.textContent = 'Hello world';
var myWord = 'APPLE';
var mynumber = 30;
var mypointnumber = 3.2;
var mynew = true;
console.log(myWord, mynumber, mypointnumber, mynew); 
var myhat = 'i am fine';
console.log(myWord); //Комментарии
myWord = myWord+myhat;
console.log(myWord);
var newvar = 'ccmber';
if (newvar==='cucumber')
{
	alert ('Yay, i love cucumbers');
}
else if (newvar==='ccumber'){
	alert('Awww, but i want a cucumber');
}
else {
	alert('WTF');
}
/*if (mynumber>20)
{alert(1)}
 if(mynumber>10)
{alert(2)}
 if(munumber>5)
{alert(3)}
else {alert(4)};*/
function cub(m){
	m=m*m*m;
	alert (m);
}
cub(mynumber);
/*document.querySelector('html').onclick = function()
{
	alert('Не обижай меня!!!!');
}
/*/

var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc==='images/apht.png'){
		myImage.setAttribute ('src','images/vin.png');} 
		else {
		myImage.setAttribute ('src','images/apht.png');
	}
	}
