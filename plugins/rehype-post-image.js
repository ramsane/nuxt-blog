const visit = require('unist-util-visit') // works fine
module.exports = function rehypePostImage() {
  return function transformer(tree, file) {
    visit(tree, 'element', visitor)
    function visitor(node) {
      if (node.tagName === 'img') {
        node.tagName = 'post-image'
        // console.log('rehype:', 'img -> content-img', node.properties.src)
      }
    }
  }
}
