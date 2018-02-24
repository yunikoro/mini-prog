// components/cus-li/cus-li.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     name: {
       type: String,
       value: 'name',
       observer: function(newVal, oldVal) {
          
       }
     },
     count: {
       type: Number,
       value: 0,
       observer: function(newVal, oldVal) {
         
       }
     }
  },
  relations: {
    '../cus-ul/cus-ul': {
      type: 'parent',
      linked: function(target) {
        console.log('li link');
        console.log(target);
      },
      linkChanged: function(target) {
        console.log('li link changed');
        console.log(target);
      },
      unlinked: function(target) {
        console.log('li unlink');
        console.log(target);
      }
    }
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

  }
})
