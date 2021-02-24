const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  public: path.resolve(__dirname, '../public'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),
}