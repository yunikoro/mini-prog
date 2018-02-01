// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    testPro: {
      type: Number,
      value: 666,
      observer: function(newVal, oldVal) {
        console.log(oldVal, newVal);
      }
    },
    secPro: String
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created: function() {
    console.log('test created');
  },
  attached: function() {
    console.log('test attached');
  },
  ready: function() {
    console.log('test ready');
  },
  moved: function() {
    console.log('test moved');
  },
  detached: function() {
    console.log('test detached');
  }
})
