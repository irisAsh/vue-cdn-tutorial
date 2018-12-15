var dataBinding = new Vue({
  el: '#dataBinding',
  data: {
    variable: 'データの中身',
    className: 'orange-text',
    otherClassName: 'teal-text',
    okey: false,
    colorName: 'pink'
  }
})

var htmlBinding = new Vue({
  el: "#htmlBinding",
  data: {
    isOrange: true,
    isNotOrange: false,
    orangeClass: {
      'orange-text': true,
      'underline': true
    },
    pinkTextClass: 'pink-text',
    underLineClass: 'underline'
  }
})

var eventHandle = new Vue({
  el: '#eventHandle',
  data: {
    counter: 0,
    buttonName: '',
    clickedChar: '',
    buttonName2: ''
  },
  methods: {
    countUp: function (event) {
      this.counter += 1
      this.buttonName = event.target.innerText
    },
    countDown: function (event) {
      this.counter -= 1
      this.buttonName = event.target.innerText
    },
    addChar: function (c, event) {
      this.clickedChar += c
      this.buttonName2 = event.target.innerText
    }
  }
})

var computedProperty = new Vue({
  el: '#computedProperty',
  data: {
    value: 10,
    showed: true
  },
  computed: {
    half: function () {
      return this.value / 2;
    },
    computed_now: function () {
      return Date.now()
    }
  },
  methods: {
    toggle: function () {
      this.showed = !this.showed
    },
    methods_now: function () {
      return Date.now()
    }
  }
})
