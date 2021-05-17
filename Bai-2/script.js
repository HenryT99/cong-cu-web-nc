var string = $('#container').html()

$('#btn-find').on('click', (e)=>{
  var findString = $('#txt-find').val()
  var replaceString = $('#txt-replace').val()

  if($('#rd-capitalize:checked').val())
  return $('#container').html($('#container').html().replace(new RegExp(findString,'g'), replaceString))

  $('#container').html($('#container').html().replace(new RegExp(findString,'gi'), replaceString))
})

$('#btn-reset').on('click', (e)=>{
  $('#container').html(string)
})