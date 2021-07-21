---
title: "Cross Entropy : An intuitive explanation with Entropy and  KL-Divergence" 
description: Cross-Entropy is something that you see over and over in machine learning and deep learning. This article explains it from Information theory prespective and try to connect the dots. KL-Divergence is also very important and is used in Decision Trees and generative models like Variational Auto Encoders.
image: images/example/tf.jpg
alt: my first blog post
slug: cross-Entropy5 explained with entropy and kl-divergence
tags: ['loss-functions']
category: misc
author: Ramana Reddy Sane
createdAt: 2020-06-01
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
