define(['requirejs-jade!./outer-variables.jade', 'text!./outer-variables.jade', 'requirejs-jade!./local-variables.jade', 'text!./local-variables.jade'], function(outerVariablesTplFn, outerVariablesTplSource, localVariablesTplFn, localVariablesTplSource) {
  var variables = {
    pluginName: 'requirejs-jade'
  }
  var outerVariablesJadeContainer = document.querySelector('#outer-variables .jade')
  outerVariablesJadeContainer.innerText = outerVariablesJadeContainer.textContent = outerVariablesTplSource
  var outerVariablesHtmlContainer = document.querySelector('#outer-variables .html')
  outerVariablesHtmlContainer.innerText = outerVariablesHtmlContainer.textContent = outerVariablesTplFn(variables)

  var localVariablesJadeContainer = document.querySelector('#local-variables .jade')
  localVariablesJadeContainer.innerText = localVariablesJadeContainer.textContent = localVariablesTplSource
  var localVariablesHtmlContainer = document.querySelector('#local-variables .html')
  localVariablesHtmlContainer.innerText = localVariablesHtmlContainer.textContent = localVariablesTplFn()
})

