console.log('\'Allo \'Allo!');

// これは Model です
var exampleData = {
  name: 'Vue.js',
  message: 'Hello Vue !',
  itemId: 'itemId',
  items: [
    {message: 'Foo1'},
    {message: 'Foo2'},
    {message: 'Foo3'},
    {message: 'Foo4'},
    {message: 'Foo5'},
    {message: 'Foo6'},
    {message: 'Foo7'},
    {message: 'Foo8'},
    {message: 'Foo9'}
  ],
  greeting: true,
  checked: false,
  checkedNames: [],
  picked: 'Two'
}

// new Vue({
//   el: '#app',
//   data: {
//     name: 'Vue.js'
//   }
// })


// Vue インスタンス、
// または View と Model にリンクする "ViewModel" を作成
var exampleVM = new Vue({
  el: '#app',
  data: exampleData,
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('name is: ' + this.name);
    console.log('message is: ' + this.message);
  },
  methods: {
    doSomething: function(event) {
      console.log('doSomething !');
      abc();
    }
  }
})

function abc () {
    console.log('abc');
}


// 定義する
var MyComponent = Vue.extend({
  template: '<div>A custom component!</div>'
})

// 登録する
Vue.component('my-component', MyComponent)

// root インスタンスを作成する
new Vue({
  el: '#example'
})
