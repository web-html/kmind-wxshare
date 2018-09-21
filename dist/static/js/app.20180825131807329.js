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
/***/ (function(module, exports) {

/**
 * 移动端适配(640px设计稿)
 */
function rem() {
  let clientWidth = document.documentElement.clientWidth;
  if (clientWidth > 640) clientWidth = 640;
  document.documentElement.style.fontSize = clientWidth / 6.4 + 'px';
  document.documentElement.style.width = '100%';
}

let resize = 'orientationchange' in window ? 'orientationchange' : 'resize';

document.addEventListener(resize, rem, false);
window.addEventListener('DOMContentLoaded', rem, false);

/***/ }),
/* 15 */
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
  return resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(68)(`./${name}`)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
const List = asyncComponent('List');
const Bought = asyncComponent('Bought');
const User = asyncComponent('User');
const Details = asyncComponent('Details');
const Pay = asyncComponent('Pay');
const Follow = asyncComponent('Follow');
const Guide = asyncComponent('Guide');
const NotFound = asyncComponent('NotFound');

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  base: '/ezu/',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [{ path: '/', name: 'App', redirect: '/details' },
  // {path: '/list', name: 'List', component: List},
  // {path: '/bought', name: 'Bought', component: Bought},
  // {path: '/user', name: 'User', component: User},
  { path: '/details', name: 'Details', component: Details }, { path: '/pay', name: 'Pay', component: Pay }, { path: '/follow', name: 'Follow', component: Follow }, { path: '/guide', name: 'Guide', component: Guide }, { path: '*', name: 'NotFound', component: NotFound }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);

// axios网络请求
function ajax(Vue, axios) {
  if (ajax.installed) return;
  Vue.prototype.$baseURL = axios.defaults.baseURL =  true ? '/cpQuery/' : 'http://192.168.10.81/cpQuery/';
  Vue.prototype.$dataURL = 'https://phone.xxjr.com/busi/';
  // Vue.prototype.$dataURL = 'http://192.168.10.87/busi/'
  window.$axios = axios.post;
  Vue.prototype.$ajax = function (params) {
    let data = params['data'] || {};
    let signId = this.$localStorage('signId');
    if (signId) data['signId'] = signId;
    axios.post(params['url'], __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(data)).then(res => {
      if (res.headers.signid) {
        window.localStorage.setItem('signId', res.headers.signid);
      }
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_rem_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_js_rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_reset_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_reset_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_reset_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_swiper_dist_css_swiper_css__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_swiper_dist_css_swiper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_swiper_dist_css_swiper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_css_animate_min_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_css_animate_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_css_animate_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_css_style_less__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_css_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_css_style_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mint_ui__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_index_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_ajax__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_sessionStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_localStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_wx_pay__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_BigLoading_vue__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



// 移动端适配

// 引入样式






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

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAADnCAYAAADl9EEgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NDMyZWQzYy1lMjE5LTQ2NTItOTg2Mi1mODhkYTgxZjE1NTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZDMUVDRUMxQTlDMTFFNzhFNTQ4QzQ4MTVFOEYwN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZDMUVDRUIxQTlDMTFFNzhFNTQ4QzQ4MTVFOEYwN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYmM3MjQzZi1kZmM3LTQzN2UtOTQ1NC0yYzViNDllOGMwYTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZTg0YTkxZS01NGY0LTExN2EtYjA0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"

/***/ })
],[50]);