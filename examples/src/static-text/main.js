define(['requirejs-jade!./p.jade', 'text!./p.jade'], function(tplFn, source) {
  var jade = document.querySelector('#static-text .jade')
  var html = document.querySelector('#static-text .html')
  jade.innerText = jade.textContent = source
  html.innerText = html.textContent = tplFn()
})
