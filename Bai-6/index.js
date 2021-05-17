// const fs = require('fs')

$(document).ready(function(){
  var renderString = readTextFile('home.html')
  console.log(renderString)
  $('.middlepane').html(renderString)
})

$('.home').on('click', (e)=>{
  var renderString = readTextFile('home.html')
  $('.middlepane').html(renderString)
})

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText = ''
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;             
            }
        }
    }
    rawFile.send(null);
    return allText
}
