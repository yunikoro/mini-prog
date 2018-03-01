// components/list-item/list-item.js
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    what: {
        type: Number,
        observer: function(newVal, oldVal) {
          console.log(newVal);
          this.triggerEvent('getWhat', { what: newVal }, {});
          console.log(this);
        }
      },
      name: String
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
    write: function(e) {
      this.triggerEvent('getWhat', { what: e.detail.value }, {});
    }
  },

  ready: function() {
    console.log('ready');
    this.triggerEvent('getWhat', { what: 666 }, {});
    console.log(this);
  }

})
