window.onload = init;
function init(){

  console.log('woow');

}


document.querySelector('#myButton').addEventListener('click', function(){
  var p = document.createElement("p");
  var content = document.createTextNode('my new text')
  p.appendChild(content);
  document.querySelector('.box').appendChild(p);
});
