function randomData(){
  setTimeout(function(){
    let randValue = Math.random();
  alert(randValue);
  }, 2000);
  
}

function getData(callback){
  callback();
}

getData(randomData);