webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(61);



/**
 * [异步组件加载函数]
 * @param  {[string]} name [组件名称]
 * @return {[promise]}      [组件]
 */
const asyncComponent = name => {
  return resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(66)(`./${name}`)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
const Map = asyncComponent('Map');
const Details = asyncComponent('Details');
const NotFound = asyncComponent('NotFound');
const Announcement = asyncComponent('Announcement');
const Footprint = asyncComponent('Footprint');
const Journey = asyncComponent('Journey');
const Share = asyncComponent('Share');

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [{ path: '/', name: 'share', redirect: '/share' }, { path: '/share/weixin', name: 'share', component: Share }, { path: '*', name: 'NotFound', component: NotFound }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(63);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    iosUrl: null,
    companys: [{
      headImgUrl: 'https://www.xxjr.com/images/icon/cardH5_loge.png', // 头像
      userName: '房地产经纪之家', // 用户名
      telephone: '0755-82552247', // 电话
      personDesc: '这里是全国最大房产联盟，40万专业房产经理智慧学习、交流平台！无论是新房、二手房，还是买房、卖房、租房，这里都能找到；无论是拓展客户、开单话术，还是地产学习，这里都应有尽有。' // 个人简介
    }, {
      headImgUrl: 'https://www.xxjr.com/images/icon/bbzs_logo.png', // 头像
      userName: '保保助手', // 用户名
      telephone: '0755-23607473', // 电话
      personDesc: '保保助手始终坚持客户第一、服务至上，致力于为保险代理人打造最优质的展业宣传工具，为您顺利签单提供帮助，至今已为全国10万保险代理人提供服务，欢迎您来体验。' // 个人简介
    }, {
      headImgUrl: 'https://sys.xxjr.com/wxtools/images/tool/logo.jpg', // 头像
      userName: '小小金融', // 用户名
      telephone: '0755-83254087', // 电话
      personDesc: '小小金融始终坚持“顾客第一、服务至上、专业专注、精益求精”的原则。一步一个脚印、踏踏实实，不断追求优秀的产品与服务品质，全力打造公司成为深圳乃至全国的优秀与知名服务品牌。' // 个人简介
    }],
    // 没有关注公众号就去关注页 subscribe=1为关注
    subscribe: 1,
    // autoReg 是否是自动注册的用户，为1 说明他没有设置名片信息
    autoReg: 0
  },
  mutations: {
    setScribe: (state, newVal) => {
      state.subscribe = newVal;
    },
    setReg: (state, newVal) => {
      state.autoReg = newVal;
    },
    setUrl: (state, newVal) => {
      state.iosUrl = newVal;
    }
  }
}));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);

// axios网络请求
function ajax(Vue, axios) {
  if (ajax.installed) return;
  // Vue.prototype.$baseURL = axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? '/cpQuery/' : 'http://192.168.10.81/cpQuery/'
  //Vue.prototype.$dataURL = 'https://miniapp.awayroadtrip.com/askjldfhakushgfansgflka/'
  // Vue.prototype.$dataURL = 'http://192.168.10.87/busi/'
  window.$axios = axios.post;
  Vue.prototype.$ajax = function (params) {
    let data = params['data'] || {};
    // let signId = this.$localStorage('signId')
    // if (signId) data['signId'] = signId
    axios.post(params['url'], __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(data)).then(res => {
      // if (res.headers.signid) {
      //   window.localStorage.setItem('signId', res.headers.signid)
      // }
      res = res.data;
      if (res.success) {
        if (params['success'] !== undefined) params.success(res);
      } else {
        if (!params['fail']) this.$toast(res.message);else params.fail(res);
      }
    }).catch(err => {
      let status = err.response.status || 404;
      this.$messagebox.alert(`${status} 抱歉，服务器开小差了~`);
      if (params['error'] !== undefined) params.error(err);
    });
  };
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ajax);
}

/* harmony default export */ __webpack_exports__["a"] = (ajax);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// localStorage本地存储
function localStorage(Vue) {
  const localStorage = window.localStorage;
  Vue.prototype.$localStorage = function (key, val) {
    if (!key) {
      return localStorage;
    } else if (!val) {
      return localStorage.getItem(key);
    } else {
      localStorage.setItem(key, val);
      return true;
    }
  };

  Vue.prototype.$rmLocalStorage = function (key) {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (localStorage);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// sessionStorage本地存储
function sessionStorage(Vue) {
  const sessionStorage = window.sessionStorage;
  Vue.prototype.$sessionStorage = function (key, val) {
    if (!key) {
      return sessionStorage;
    } else if (!val) {
      return sessionStorage.getItem(key);
    } else {
      sessionStorage.setItem(key, val);
      return true;
    }
  };

  Vue.prototype.$rmSessionStorage = function (key) {
    if (key) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.clear();
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (sessionStorage);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const plugin = {
  install(Vue) {
    function wxPay(payParams, urlType, autoReg, subscribe) {
      let that = this;
      window.WeixinJSBridge.invoke('getBrandWCPayRequest', {
        'appId': payParams.appId + '',
        'timeStamp': payParams.timeStamp + '',
        'nonceStr': payParams.nonceStr + '',
        'package': 'prepay_id=' + payParams.prepayId,
        'signType': 'MD5',
        'paySign': payParams.sign + ''
      }, function (res) {
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
          if (urlType === 'xxcard') {
            // 去引导页
            if (subscribe !== 1) {
              that.$router.push('/guide');
            } else {
              // 去引导页
              if (autoReg === 1) {
                that.$router.push('/guide');
              } else {
                that.$router.push('/bought');
              }
            }
          } else {
            this.$router.go();
            // that.$router.push('/paySuccess?orderId=' + payParams.orderId + '&urlType=cust')
          }
        } else if (res.err_msg === 'get_brand_wcpay_request:fail') {
          that.$messagebox('提示', '微信支付失败');
        }
      });
    }
    Vue.prototype.$wxPay = wxPay;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(60),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(51)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
  // mounted () {
  //   // 加载友盟js
  //   const script = document.createElement('script')
  //   script.src = 'https://s95.cnzz.com/z_stat.php?id=1261184487&web_id=1261184487'
  //   document.body.appendChild(script)
  // },
  // watch: {
  //   $route () {
  //     // 路由变化交互统计数据
  //     if (window._czc) {
  //       let location = window.location
  //       let contentUrl = location.pathname + location.hash
  //       let refererUrl = '/'
  //       window._czc.push(['_trackPageview', contentUrl, refererUrl])
  //     }
  //   }
  // }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'big-loading',
  props: {
    text: String,
    bigLoading: Boolean
  }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_base_less__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_base_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_css_base_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_rem_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_rem_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_rem_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_flex_css__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_flex_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_flex_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_share_less__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_share_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_css_share_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_swiper_dist_css_swiper_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_swiper_dist_css_swiper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_swiper_dist_css_swiper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_css_animate_min_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_css_animate_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_css_animate_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mint_ui__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_index_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_ajax__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_sessionStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_localStorage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_wx_pay__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



// 移动端适配
// import '@/assets/js/rem.js'
// 引入样式




// import 'mint-ui/lib/style.css'


// import '@/assets/css/style.less'

// 引入第三方库


// vuex

// 引入插件




// 整页loading


// 使用插件
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_9_mint_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_12__utils_ajax__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10_axios___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_13__utils_sessionStorage__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_14__utils_localStorage__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_15__utils_wx_pay__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.HOST = '/api';
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_11__store_index_js__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});
__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
  if (!__WEBPACK_IMPORTED_MODULE_11__store_index_js__["a" /* default */].state.iosUrl) {
    __WEBPACK_IMPORTED_MODULE_11__store_index_js__["a" /* default */].commit('setUrl', document.URL);
  }
  next();
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.bigLoading) ? _c('div', {
    staticClass: "com-template"
  }, [_c('div', {
    staticClass: "alert-content big-loading"
  }, [_c('p', {
    staticClass: "page-infinite-loading"
  }, [_c('mt-spinner', {
    attrs: {
      "type": "snake",
      "color": "#247FC5"
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "txt"
  }, [_vm._v(_vm._s(_vm.text))])])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}

/***/ })
],[50]);