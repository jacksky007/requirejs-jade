{
  appDir: 'src',
  baseUrl: '.',
  dir: 'build',
  findNestedDependencies: true,
  modules: [{
    name: 'main',
  }],
  optimize: 'none',
  paths: {
    jade: '../../bower_components/jade',
    'requirejs-jade': '../../dist/requirejs-jade',
    text: '../../bower_components/requirejs-text/text'
  },
  stubModules: ['jade/jade', 'requirejs-jade']
}
