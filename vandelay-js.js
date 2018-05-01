const path = require('path')

module.exports = {
  multilineImportStyle: 'multiple',
  quoteType: 'single',
  padCurlyBraces: false,
  maxImportLineLength: 120,
  commaDangle: false,
  absolutePaths: ['kyoto'],
  includePaths: [
    path.join(__dirname, 'src')
  ],
  excludePatterns: [
    /.*\.test\..*/,
    /.*\/config\/.*/,
  ],
  extraImports: {
    'src/assets/styles/mixins': {
      default: '* as mx',
    }
  }
}
