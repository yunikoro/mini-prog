// components/cus-ul/cus-ul.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },
  relations: {
    '../cus-li/cus-li': {
      type: 'child',
      linked: function(target) {
        console.log('ul link');
        console.log(target);
      }
    },
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
    _getAllLi: function() {
      var nodes = this.getRelationNodes('../cus-li/cus-li');
      console.log(nodes);
    }
  }
})
