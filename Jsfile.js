function fun() {
var inp = document.getElementById('inp1').value;
var inp1 = document.getElementById('inp2').value;
var num = Math.floor(Math.random() * 10);





var est = 'Estol';
var utk = 'Utka'


  if(inp == est){
  var num_n = 9
  num = num + num_n
  }

  if(inp1 == utk){
  var num_n = 7
  num = num + num_n
}

  if(num > 8){
  document.getElementById('parent').innerHTML = 'парочка';
}
else{
  document.getElementById('parent').innerHTML = 'не парочка';
};
  if(num > 20){
    document.getElementById('parent').innerHTML = 'Ты даун'


  }

  console.log(num)
}
