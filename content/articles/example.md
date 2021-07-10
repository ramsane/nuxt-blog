---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
img: test/tf.jpg
alt: my first blog post
---

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$ L = \frac{1}{2} \rho v^2 S C_L $$

# My first blog post

Welcome to my first blog post using content module

## Image

<!-- src w.r.t the static folder -->
<nuxt-img src="images/example/svm.png" sizes="sm:100vw lg:740px"></nuxt-img> 

## Code

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
