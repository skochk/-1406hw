function randomData(){
  let randValue = Math.random();
  alert(randValue);
}

function getData(callback){
  callback();
}


setTimeout(function(){
  function randomData(){
    let randValue = Math.random();
    alert(randValue);
  }
}, 2000);

getData(randomData);