require.config({
  baseUrl: '.',
  paths: {
    jade: '../../bower_components/jade',
    'requirejs-jade': '../../main',
    text: '../../bower_components/requirejs-text/text'
  }
})

require(['static-text/main'], function() {
  console.log('load jade-based static text')
})

require(['variable-text/main'], function() {
  console.log('load jade-based variable text')
})

