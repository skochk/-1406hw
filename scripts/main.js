function randomData(){
  let randValue = Math.random();
  alert(randValue);
}

function getData(callback){
  callback();
}

getData(randomData);