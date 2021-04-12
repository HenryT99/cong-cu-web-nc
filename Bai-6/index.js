$('').click( ()=>{
  var number = parseInt($('.number').val())
})

var arr =[]

$(".init").click(function(){
  // alert("Text: " + $("#test").text());
  var number = parseInt($('.number').val())
  if(isNaN(number)){
    return alert('Vui lòng nhập số')
  }
  arr =Array.from({length: number}, () => Math.floor(Math.random() * 50));

  $('.result').val(arr.toString())
});

$('.btn-delete').click(function(){
  arr = arr.filter(e=>{
    return e % 2 !== 0
  })
  $('.result').val(arr.toString())
})