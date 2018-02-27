var moment = require("../../lib/moment-with-locales.min.js");
moment.locale('zh-cn');



const TYPE = '通用红包';
const TYPE2 = '立减券';
const TYPE3 = '满减券';
const TYPE4 = '折扣券';
const TYPE6 = '限定折扣券';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    couponType: {
      type: Number,
      observer: function (newVal, oldVal) {
        
      }
    },
    amount: {
      type: Number
    },
    baseAmount: {
      type: Number
    },
    skuAlias: {
      type: String
    },
    explain: {
      type: String
    },
    expire: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mainTitle: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    testMet: function(inputPro) {
      var couponTags = {};

      couponTags.expireTag = moment(inputPro.expire).format('YYYY.MM.DD');
      couponTags.explain = inputPro.explain;

      if(inputPro.couponType == 2) {
        couponTags.titleTag = TYPE2;
        couponTags.amountTag = ('¥' + inputPro.amount);
        couponTags.baseAmountTag = '使用无门槛';
      } else if(inputPro.couponType == 3) {
        couponTags.titleTag = TYPE3;
        couponTags.amountTag = ('¥' + inputPro.amount);
        couponTags.baseAmountTag = ('满' + inputPro.baseAmount + '元可用');
      } else if(inputPro.couponType == 4) {
        couponTags.titleTag = TYPE4;
        couponTags.amountTag = ((inputPro.amount * 10));
        couponTags.baseAmountTag = (inputPro.baseAmount + '元内可用');
      } else if (inputPro.couponType == 6) {
        couponTags.titleTag = (inputPro.skuAlias + TYPE6);
        couponTags.amountTag = ((inputPro.amount * 10));
        couponTags.baseAmountTag = '指定商品可用';
      }
      this.setData(couponTags);
    },
  },

  ready: function(data) {
    //this.data.couponType = this.testMet(this.data.couponType);
    this.testMet(this.data);
    console.log(moment(1534495693000).format('MMMM Do YYYY, h:mm:ss a'));
  }
})
