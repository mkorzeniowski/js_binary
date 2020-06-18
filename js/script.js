

// array of the all clock-colum
var clock = document.querySelectorAll('.clock__column');

// main function

setInterval(function(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  document.querySelector('#hours').innerHTML = hours;
  document.querySelector('#minutes').innerHTML = minutes;
  document.querySelector('#seconds').innerHTML = seconds;


  var hoursTable = hours.toString().split('');
  var minutesTable = minutes.toString().split('');
  var secondTable = seconds.toString().split('');

  if(hoursTable.length == 1){
  hoursTable.unshift('0');
  };

  if(minutesTable.length == 1){
    minutesTable.unshift('0');
  };

  if(secondTable.length == 1){
    secondTable.unshift('0');
  };

var allTimesTable = hoursTable.concat(minutesTable).concat(secondTable);


  for(var i = 0; i <= clock.length; i++){
    switch (allTimesTable[i]) {
      case '0':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.remove('active');
        clock[i].children[2].classList.remove('active');
        clock[i].children[3].classList.remove('active');
        break;
      case '1':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.remove('active');
        clock[i].children[2].classList.remove('active');
        clock[i].children[3].classList.add('active');
      break;
      case '2':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.remove('active');
        clock[i].children[2].classList.add('active');
        clock[i].children[3].classList.remove('active');
        break;
      case '3':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.remove('active');
        clock[i].children[2].classList.add('active');
        clock[i].children[3].classList.add('active');
        break;
      case '4':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.add('active');
        clock[i].children[2].classList.remove('active');
        clock[i].children[3].classList.remove('active');
        break;
      case '5':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.add('active');
        clock[i].children[2].classList.remove('active');
        clock[i].children[3].classList.add('active');
        break;
      case '6':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.add('active');
        clock[i].children[2].classList.add('active');
        clock[i].children[3].classList.remove('active');
        break;
      case '7':
        clock[i].children[0].classList.remove('active');
        clock[i].children[1].classList.add('active');
        clock[i].children[2].classList.add('active');
        clock[i].children[3].classList.add('active');
        break;
      case '8':
        clock[i].children[0].classList.add('active');
        clock[i].children[1].classList.remove('active');
        clock[i].children[2].classList.remove('active');
        clock[i].children[3].classList.remove('active');
        break;
      case '9':
        clock[i].children[0].classList.add('active');
        clock[i].children[1].classList.remove('active');
        clock[i].children[2].classList.remove('active');
        clock[i].children[3].classList.add('active');
        break;
    }
  }

}, 1000);
