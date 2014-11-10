define(['jade/jade', 'text', 'jade/runtime'], function(jade, text) {
  'use strict'

  var jadeOptionsDev = {
    compileDebug: true,
    debug: true,
    pretty: true
  }

  var jadeOptionsProduction = {
    compileDebug: false,
    debug: false,
    pretty: false
  }

  var buildMap = {}

  return {
    load: function(name, require, onload, config) {
      var url = require.toUrl(name)
      text.get(url, function(tpl) {
        if (config.isBuild) {
          buildMap[name] = jade.compileClient(tpl, jadeOptionsProduction)
          return onload()
        }
        eval(
          'var htmlFn = ' + jade.compileClient(tpl, jadeOptionsDev) + ';' +
          'onload(htmlFn)'
        )
      }, onload.error)
    },
    write: function(pluginName, moduleName, write, config) {
      var htmlFn = buildMap[moduleName]

      write.asModule(pluginName + '!' + moduleName, 'define(["jade/runtime"], function(jade) {' +
        'return ' + htmlFn +
      '});')
    }
  }
})

