{
  appDir: 'src',
  baseUrl: '.',
  dir: 'build',
  excludes: ['jade/jade', 'requirejs-jade', 'text'],
  findNestedDependencies: true,
  inlineText: true,
  modules: [{
    name: 'main',
  }],
  optimize: 'none',
  optimizeAllPluginResources: true,
  paths: {
    jade: '../../bower_components/jade',
    'requirejs-jade': '../../main',
    text: '../../bower_components/requirejs-text/text'
  },
  removeCombined: true,
  stubModules: ['jade/jade', 'requirejs-jade', 'text']
}

