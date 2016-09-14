// main.js
var Vue = require('vue')
var RandomWord = require('./randomWord.vue')

new Vue({
  el: 'body',
  components: {
    'random-word': RandomWord
  }
})