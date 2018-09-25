webpackJsonp([0],Array(66).concat([
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Announcement": 68,
	"./Announcement.vue": 68,
	"./Footprint": 73,
	"./Footprint.vue": 73,
	"./Journey": 74,
	"./Journey.vue": 74,
	"./KmindIndex": 77,
	"./KmindIndex.vue": 77,
	"./NotFound": 78,
	"./NotFound.vue": 78,
	"./Share": 79,
	"./Share.vue": 79
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 66;

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

// import { Message } from 'element-ui'

// create an axios instance
const service = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: Object({"NODE_ENV":"production"}).BASE_API, // api的base_url
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(config => {
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone interceptor
service.interceptors.response.use(response => response, error => {
  console.log('err' + error); // for debug
  // Message({
  //   message: error.message,
  //   type: 'error',
  //   duration: 5 * 1000
  // })
  return Promise.reject(error);
});

const ajaxMethod = ['get', 'post', 'delete', 'put'];
const api = {};
ajaxMethod.forEach(method => {
  api[method] = function fun(uri, data, config) {
    return new Promise(resolve => {
      service[method](uri, data, config).then(response => {
        resolve(response);
      });
    });
  };
});
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(98),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Download_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Download_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Download_vue__);
/**
 * Created by chunting on 2018/9/18.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Download_vue___default.a);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__User_vue__);
/**
 * Created by chunting on 2018/9/18.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__User_vue___default.a);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Footer_vue__);
/**
 * Created by chunting on 2018/9/18.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Footer_vue___default.a);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPoiDetail;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTempDetail;
/* harmony export (immutable) */ __webpack_exports__["d"] = getTrack;
/* harmony export (immutable) */ __webpack_exports__["e"] = getTravelDetail;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNotice;
/* harmony export (immutable) */ __webpack_exports__["f"] = getUserInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(67);


//poi
function getPoiDetail(params) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/app/poi/detail', params);
}
function getTempDetail(params) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/app/wild/detail', params);
}
//足迹
function getTrack(params) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/app/track/simple', params);
}
//路线
function getTravelDetail(params) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/app/travel/detail', params);
}
// 公告
function getNotice(params) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/app/club/look/notice', params);
}
// 用户信息
function getUserInfo(params) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/app/user/proInfo', params);
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(111),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(114),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAACrFBMVEUAAAD9/f3//////9j/////////swP/////////////////////////////////////////////swL/sgL/////swL/swP/swT/swP/tgT/tA//vxD/swL/swP/swP/sgP/tAP///8AAAD/sgL/rwBLS0v+/v61tbUzMzP/9d//3Un/vy7/sQAEAwL/10eEhIQvLy8ODg5lZWXm5uaYmJhwcHD/2khLPxXk5OT/20j/2EehoaFPT0//4Er//fj/y1MSEhL/swj//PP/2oR2dnfyykL/xT//tQ4RDgQJBwLPz8//6bb/5q3/yUz/1EZBQUENCgP//vv/1XRNTU01NTWojC4JCQkGBgb5+fnz8/Pt7e3ExMS8vLz/3pHguj2ZgCr/vCT/+/DU1NTAwMBoaGjbtzy1lzH/uyAfHx8YGBg8MhAeGQj/6LH/0WiYfyooKCj/txP/7cP/4Zv/13z/zVxGRkbmvz//uRo4Lw8hGwn/rAD/9Nv/78r/5ahxcXFYWFj/x0eagyuGbyR0YSBqWR1TRRcuJgwZFQb7+/vZ2dn/89aurq7/35X/02//z2L/30n4z0SihywrKyszKw4pIgv/uAH6+vr/+OjCwsK3t7elpaX/46KZmZmPj4+JiYltbW1fX19TU1P/5Uv/4krqxEH/wzrNrDnIpjctLS2Seig/NBHTlQIhFwD19fXy8vL/9+Lb29vX19fGxsazs7N/f39sbGz600b0y0M9PT3/xDzRrjm9nTS5mjOtkC+BbCMjIyNvXR5hURpGOhNBNhL/++vh4eHe3t6ioqKdnZ3/wjX/viiLdCYcHBxZShhJPBQVEQXo6OjR0dH/8M7tx0Ljvj7BoDV4ZCHMzMy5ubmUlJRbW1snJyclJSVDORPMw6xzc3N4blj/xzTXmQbVlAOSpaKpAAAAIXRSTlMA/r8D2cW9upBdUTsREPPWoqH78/LZxZBROxEQ1qKhXVz2yMWaAAAJgklEQVRo3rTV6WvTcBjA8dX7PvE+n/RZtTRjHhMER2IaacC0SKt4F1onVKHFXlLooX05Z9sXgpu6eb0YDHTOE9wr38xjQ1B8pSie/4hJ7fZLmh9di+n3hbgG9tmT/PK0Rdui+ctnzFoC9ccNorWuVq6as3nr+hZ6C2ZYoNHsDqpMb8WctRR24WwgmSyTVq+rYmfOA5Ipci5C/3zNTK27eC6AmTKLbE8hzVLlORs07lIAM2V0JYSwGHfRZ944Jc8k85ojY9EpRGXv2CjSZ5682/MAzJUxYZfkEVd8zEWX11TOM4CpMmIqNCrb+awr1hdlqfK6MjwbzJQRHfE+h9vOZ/oTTt8gizR6dXlvAJgos6Nurz0RU10fFymMBPwTNFndJDPATBlFe8kaiPnsccX1Bz1hJ3WrzlH2swVMlSXBw/O5oFh2826nC1mKvGJ9y3wAU2WWlYHLekpedd6yO+gTjPKWlmVAMmnmQMqXGywVKi4WIcUa4E3kEZs4M/qz6Uj5PgthPl2CEEt5yLPAdNmKhX5MjYaVeSW3k3ckomiAV7UsgSbIwrg7oLpW5CGHflliq9/nlS0ATZAxlLEFVdfDhQVMesOCUP2VQWBz5YA4XnE9fJr3unNeMcQ2DyYyi8q/vFOW0M8pMkBSFrGpMNme6APIptAP3rzo5dyxJLLNhInM5n1iUXF9CRkiHohbUWoqTGTEaFbmimmPTUT0ODDQU0yzzYTJzNE42AMBZ7/CIQYyI45kiG0mTGTMfyrIPZIKB3rsAR+UsLkwOWEC7x2XBNWFmAiiILD1wLaPjXFnKLI7m8xK6MhkIkHwY06WsJ6J33Y3BLc/NsgYto340BMEN7rsnriz79MEUuHdJ0DTvZug6/jemvCui8OGTRLKR6N+kEtcjk3lvK5QNhgRaHDXLdB0/1yXbubhdqhK93e+YF6efmQz7LAYl8A8J0v9XuU/UgH6kQafPwiky0zbjkOVWk8CdA/dAn23jutghjm3/ci/uqaec3Ii7eHcIXmswIGIyJdo8A3mfMfubouSrQyTju4F6L1w9LZyVW3y7t7Rw6Srmk3CO8N8xp7PxCOcKCBaqTDD7L+2Q+lgFbxTgY9fUK4OqVfbJ+G2O49gsktaeBsAjP2yqkk9fTHOHfU5o6ker4N+uLqYyU6pz9gIV7oH/zrLMK/uHai0XQt3qp/8/HO9fMISn4qCZI+JQTvPWv8L3kXgmj18oMooJJ19IwB9YgqtTYLpMjtR9MdsySiy1ubBdBnTSW9lXCp8Wgd3/i9MZCvyMNpsmD5zSAyx9cBPAeBwFdxrgHcx9ctI3FrwDWVLtGrh1xbLsAEeYOrpw29CTgt/U9bETobUpqyVoWPVcPe7PVNd2qHFWi+RK3e/j+M08Gdm+gjcexJIlM2l+64yEz7xBaDGrqbLdPhmQ7Bl+63pYSKbB9t2HGvfDVPtYTQ9A6NcA97W2MTKcTp/6HClznOMpiOd2gaIbMLEKlxnZ8nMdHjveaaejl1tEL4LRKbBw5Yz+0hvtb/36G31k8qFp9AwTGQafOU0kKp2tfrOvgZSgzCRafCTI7qV0Fr9JbHr5H/ARDbCb5iXZ2rAtmuHzujgoQZgIlPgx0eZnZ3P29X20uDtzM7WA+XLp0DtRyOnmshUeLIbBlh3a5+D2vGrHR0dAxd1L9pAh66B8s+nQCcbDxeBT9WG24F0hCHt/wj6ngOJyKbAXW0M6bJhIx2gyIMG+FhNuHuIBp+tsaJ3X2PanhllzvA61YZ7r1Hgk9pl97UXtN1Qb9H710b5L3Nm16JEFAZg+im9YC0H5lgtnWmGDnSRoF24QmkYi0LlYgneudjNhuYH0YWaEhUUlaLsQtEXGq7argvLwra7RbtFX/+ld9RtRrQ5Y0T03JyZ93w8M69n5hxGE/HInmsaUz1OfB+MmT7zi5evHsb6w9nuTCKe9fv9MaP4pt9/4dsYsQ0MSDqgYxeKL+riK+Fw2Gcc8h0G9Gq7YT4KOX/JoliMLn4AFng7/ffFx8AKj0RiaWLxcbDCa4H4w+TiW2CB2xf+vthvYYV690E4ucAq+rePz8Ld0tRF4eP0NAbWMH4cevH4qOmMtj8TvbkQ/+xhK9wbfguum/R6idpx4n/Afyw+NECPjNQNtTlkwCQuFF+YmepzLrYwewDXotmFmak31x88xzr7oOru6cEBxl+dmxrDzGVsO8SbRxvvTcXTxskZWz8zs78uLTzz7z8yXw0rpQSWCd83FZ8aeugNZ7GHMODUd/gzNgTiVCIaDC7eyIDGzkq7VUjtQI+1RDApgcYqtol2ZA+A1j4YjUaDiRsAUieo9U1dw7ArGYxi6dqM9kIRvOIT5uLlJ4QxTuqrAFAM5Tgeh+KAaDVkDTTa2IaUlap2dS2MIk+qaNnlhCmcVJYAPBWew8L5kROVYegqwBdz8ZxCOqUCI3vYuUnoZjFJSciJhkze7SYF0PASZTM+x0jNBVCKpxu0kY6XUBxS6Vamxvgi9g2oFGXOeepOl7ws1wY4JhSvOBOcYOpkhTVR01TJFhZJHmiRj9m+GKsjDkp7qcg6qAPDfXE3u8fr8pB4KYviggWxu+GgtTQAfCLE29d0tJFy3jRe1ED8CaSQqmwBcg3FkYHY7Wi451BoFDvyObJbBHggEtNaVQ1pP/EKUdqgRbTbTzOlE8+zqrQv9uxSJo+IWwFa7Q6Lq8veG5iRo+vCVK86K0q9BBCn6nwWIhWKQ2CcUrfqpmv7qU5TFROvi6VeqjPFOgl4hsRFff0WiFOw3LtJyctZLdlkvCBBKa/OJ5N7jBR6Yja36CDKCoyIr0oBlW2Pin2vDwjELV5OwWY5V5OwWyHPn3DHogcgWS4nALqENNDR5ozwenMV+uI8yffFAaIswTLXWnrmtWNwVgiLA7y9/LknMBMXZTkCEVn+IQGS2UqlrwESl2UsXduyvINReVv+UXIB2sIY7MpdlyaWlmTZiZXyVTxbw+Nese0EH25AROIJeXjayovb91wk9sFEnLt1cAGscFO0LF63DfM19vbKlSO2cZx9ZL+Ef7Jt6AHbbzk5PfkOxP+zfXvJARCEoShaKkZR/CVuoNty/wtxWBI0TMirJpwNvAETBr3X5aTkx1+fd224DbfhNvyh4VNMnOTFhCcWE0yHmDgoiIlA0YkBF8nmkVlP2bEmPd6H6jVXwJo10IAaNUmBGrokwgHaliw7ghiWLLSCGLs8LQPo53JMV5/jiZ7FsGs+WNXqeQ+REjfhcQ9gQwchGgAAAABJRU5ErkJggg=="

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/hero.6a72088.jpg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(115)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(118),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(121),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(124),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Download__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_User__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_FooterCode__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_request_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_route_js__ = __webpack_require__(72);
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
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "announcement",
  props: ["type", "id", "userId", "uuid"],
  data() {
    return {
      user: {},
      theme: "",
      url: "",
      name: "",
      avatar: "",
      pageData: {}
    };
  },
  components: {
    Download: __WEBPACK_IMPORTED_MODULE_0__common_Download__["a" /* default */],
    FooterCode: __WEBPACK_IMPORTED_MODULE_2__common_FooterCode__["a" /* default */],
    User: __WEBPACK_IMPORTED_MODULE_1__common_User__["a" /* default */]
  },
  created() {
    this.getNotice();
    this.pageData = {
      type: this.type,
      id: this.id
    };
    this.getUserInfo();
  },
  computed: {},
  methods: {
    getNotice() {
      let params = { noticeId: this.id };
      Object(__WEBPACK_IMPORTED_MODULE_4__api_route_js__["a" /* getNotice */])(params).then(res => {
        let data = res.data;
        let { user, club, theme, picture } = data.root;
        // this.user = user;
        this.theme = theme;
        this.url = picture.length > 0 ? picture[0] : false;
        this.name = club.name;
        this.avatar = club.avatar;
      });
    },
    getUserInfo() {
      // console.log(this.userId)
      Object(__WEBPACK_IMPORTED_MODULE_4__api_route_js__["f" /* getUserInfo */])({
        'openId': this.userId
      }).then(res => {
        //   console.log(res);
        if (res.data.code == 200) {
          this.user = res.data.root;
        }
      }).catch(res => {
        console.log(res);
      });
    }
  },
  destroyed() {}
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(86),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_less__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_arouse__ = __webpack_require__(85);
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
//
//
//
//
//


// import $device from '../../tools/device';

// require('../../tools/arouse');
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'download',
    props: ['data'],
    data() {
        return {};
    },
    props: {
        pageData: Object
    },
    components: {},
    created() {
        // console.log(AppLink)
    },
    methods: {
        download() {
            console.log(this.pageData);
            let config = {
                // 和app协定的scheme
                schema: "AnyGo.1000mind://anygo/" + this.pageData.type + "/" + this.pageData.id,
                // iOS下的App在appstore的地址
                appstore: 'http://itunes.apple.com/app/id1345961107?mt=8',
                // 应用宝的地址
                yyb: '//a.app.qq.com/o/simple.jsp?pkgname=com.mtime.lookface&fromcase=40002'
            };
            // alert(config.schema)
            let applink = new __WEBPACK_IMPORTED_MODULE_1__utils_arouse__["a" /* AppLink */](config);
            applink.open();
        }
    },
    watch: {
        progress() {
            this.draw();
        }
    },
    mounted() {
        /*this.canvas = document.getElementById('canvas');
        this.canvas.width = this.width * 2;
        this.canvas.height = this.width * 2;
        this.context = this.canvas.getContext('2d');
        this.context.scale(2, 2);
        this.draw();*/
    },
    destroyed() {}
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("602cb454", content, true, {});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)(false);
// imports


// module
exports.push([module.i, ".download{background-color:rgba(0,0,0,.97);padding:.6rem .75rem}.download .d-left .d-logo{width:2rem;height:2rem;overflow:hidden;margin-right:.45rem}.download .d-left .d-logo img{width:100%;height:100%}.download .d-left .d-text{font-family:PingFangSC-Semibold;font-size:.75rem;color:#fff;letter-spacing:0}.download .d-left .d-text dd{font-family:PingFangSC-Regular;font-size:.65rem;letter-spacing:0;line-height:1.05rem}.download .d-right button{width:4.3rem;height:1.8rem;border-radius:.9rem;background:#ffd446;font-family:PingFangSC-Medium;font-size:.65rem;color:#000;letter-spacing:0}", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLink; });
/**
 * 浏览器的相关信息
 */
var Browser = /** @class */function () {
    function Browser() {}
    /**
     * 获取浏览器数据
     */
    Browser.getBrowser = function () {
        var UA = navigator.userAgent || '';
        var isAndroid = function () {
            return UA.match(/Android/i) ? true : false;
        }();
        var isQQ = function () {
            return (/(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(UA) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(UA)
            );
        }();
        var isIOS = function () {
            return UA.match(/iPhone|iPad|iPod/i) ? true : false;
        }();
        var isSafari = function () {
            return (/iPhone|iPad|iPod\/([\w.]+).*(safari).*/i.test(UA)
            );
        }();
        var isWx = function () {
            return UA.match(/micromessenger/i) ? true : false;
        }();
        var isWb = function () {
            return UA.match(/weibo/i) ? true : false;
        }();
        var isAndroidChrome = function () {
            return (UA.match(/Chrome\/([\d.]+)/) || UA.match(/CriOS\/([\d.]+)/)) && isAndroid && !isQQ;
        }();
        var isQZ = function () {
            return UA.indexOf('Qzone/') !== -1;
        }();
        var browser = {
            isAndroid: isAndroid,
            isIOS: isIOS,
            isSafari: isSafari,
            isQQ: isQQ,
            isWb: isWb,
            isWx: isWx,
            isQZ: isQZ,
            isAndroidChrome: isAndroidChrome
        };
        return browser;
    };
    return Browser;
}();

/**
 * AppLink:H5唤起APP的所有方法
 */
var AppLink = /** @class */function () {
    /**
     * 类的contructor方法
     * @param config IAppLink类型的config文件
     */
    function AppLink(config) {
        /**
         * UA
         */
        this.UA = {};
        /**
         * 传入的config数据，以接口约束
         */
        this.config = {};
        this.UA = navigator.userAgent || '';
        this.config = config;
    }
    /**
     * 跳转函数
     * @param url 链接
     */
    AppLink.prototype.go = function (url) {
        window.location.href = url;
    };
    /**
     * 检查是否唤起
     * @param cb 回调函数
     */
    AppLink.prototype.checkOpen = function (cb) {
        var inter = null;
        var statue = false;
        var count = 0;
        inter = window.setInterval(function () {
            count++;
            statue = document.hidden || document.webkitHidden;
            if (statue || count > 40) {
                cb(statue);
                clearInterval(inter);
            }
        }, 50);
    };
    /**
     * 外部调用的入口函数
     */
    AppLink.prototype.open = function () {
        var _this = this;
        var browser = Browser.getBrowser();
        var config = this.config;
        // 微信直接跳 应用宝
        if (browser.isWx) {
            // this.go(this.config.yyb)
            // this.tryCallApp(this.config.schema)

            if (browser.isIOS) {
                // 没有下载
                // this.checkOpen(function (isSuccess) {
                //     if (!isSuccess) {
                //     }
                // })
                _this.go(_this.config.appstore);
            } else {
                // 唤起失败 跳到应用宝
                // this.checkOpen(function (isSuccess) {
                //     if (!isSuccess) {
                //     }
                // })
                _this.go(_this.config.yyb);
            }
        } else if (browser.isQQ) {
            if (browser.isIOS) {
                // 使用scheme唤起
                this.tryCallApp(this.config.schema);
                // 没有下载
                this.checkOpen(function (isSuccess) {
                    if (!isSuccess) {
                        _this.go(_this.config.appstore);
                    }
                });
            }
            // iOS跳到AppStore
            if (browser.isAndroid) {
                // 使用scheme唤起
                this.tryCallApp(this.config.schema);
                // 唤起失败 跳到应用宝
                this.checkOpen(function (isSuccess) {
                    if (!isSuccess) {
                        _this.go(_this.config.yyb);
                    }
                });
            }
        } else if (browser.isWb) {
            // 使用scheme唤起
            this.tryCallApp(this.config.schema);
            // 微博：唤起失败，也不跳转，会有引导功能
        } else if (browser.isSafari) {
            var version = this.getIOSVersion();
            // 使用scheme唤起
            this.tryCallApp(this.config.schema);
            // iOS10以下不支持直接跳转到AppStore，跳到应用宝
            if (version < 10) {
                this.checkOpen(function (isSuccess) {
                    if (!isSuccess) {
                        _this.go(_this.config.appstore);
                    }
                });
                this.go(this.config.yyb);
            } else {
                // this.go(this.config.appstore)
                this.checkOpen(function (isSuccess) {
                    if (!isSuccess) {
                        _this.go(_this.config.appstore);
                    }
                });
            }
        } else {
            // 其他情况，直接跳应用宝
            this.go(this.config.yyb);
        }
    };
    /**
     * 下载按钮的url地址
     */
    AppLink.prototype.getDownloadUrl = function () {
        var browser = Browser.getBrowser();
        var config = this.config;
        var url = '';
        if (browser.isQQ) {
            if (browser.isIOS) {
                url = this.config.appstore;
            } else {
                url = this.config.yyb;
            }
        } else if (browser.isSafari) {
            var version = this.getIOSVersion();
            if (version < 10) {
                url = this.config.yyb;
            } else {
                url = this.config.appstore;
            }
        } else if (browser.isWb) {
            url = '';
        } else {
            url = this.config.yyb;
        }
        return url;
    };
    /**
     * 尝试唤起APP
     * @param scheme 唤起的scheme
     */
    AppLink.prototype.tryCallApp = function (scheme) {
        var aLink = document.createElement('a'),
            body = document.body;
        aLink.href = scheme;
        body.appendChild(aLink);
        aLink.click();
    };
    /**
     * 判断iOS版本
     */
    AppLink.prototype.getIOSVersion = function () {
        var ver = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = parseInt(ver[1], 10);
        return version;
    };
    return AppLink;
}();

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "download",
    attrs: {
      "flex": "main:justify"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "d-right",
    attrs: {
      "flex": "cross:center"
    }
  }, [_c('button', {
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.download($event)
      }
    }
  }, [_vm._v("下载体验")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "d-left",
    attrs: {
      "flex": "cross:center"
    }
  }, [_c('div', {
    staticClass: "d-logo"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(75)
    }
  })]), _vm._v(" "), _c('dl', {
    staticClass: "d-text"
  }, [_c('dt', [_vm._v("出去-你的专属出行智能")]), _vm._v(" "), _c('dd', [_vm._v("世界很大 我要出去")])])])
}]}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(91),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_less__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__user_less__);
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'user',
    props: ['data'],
    data() {
        return {};
    },
    props: ["my-value"],
    components: {},
    created() {},
    methods: {},
    mounted() {},
    destroyed() {}
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("6049bdda", content, true, {});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)(false);
// imports


// module
exports.push([module.i, ".user-wrap dl dt{width:2rem;height:2rem;margin-right:.5rem}.user-wrap dl dt img{border-radius:50%}.user-wrap dl dd{font-family:PingFangSC-Regular;font-size:.7rem;letter-spacing:.88px}.user-wrap dl dd p.p-name{line-height:1rem}.user-wrap dl dd p.p-desc{font-size:.55rem;color:#8b9096;letter-spacing:.69px}.user-wrap dl dd p.p-desc span{font-family:PingFangSC-Semibold;color:#000;font-size:.55rem;letter-spacing:.69px;line-height:.75rem}", ""]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user-wrap"
  }, [_c('dl', {
    attrs: {
      "flex": "cross:center"
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": _vm.myValue.avatar
    }
  })]), _vm._v(" "), _c('dd', [_c('p', {
    staticClass: "p-name"
  }, [_vm._v(_vm._s(_vm.myValue.nickName))]), _vm._v(" "), _vm._m(0)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "p-desc"
  }, [_vm._v("正在"), _c('span', [_vm._v("出去APP")]), _vm._v("上看这个精彩内容")])
}]}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(96),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_less__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__footer_less__);
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'footer-code',
    props: ['data'],
    data() {
        return {};
    },
    components: {},
    created() {},
    methods: {},
    mounted() {},
    destroyed() {}
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("7af1af60", content, true, {});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)(false);
// imports


// module
exports.push([module.i, ".footer-code dl dt{width:3.25rem;height:3.25rem;margin-right:.5rem}.footer-code dl dd p{font-family:PingFangSC-Regular;font-size:.55rem;color:#8b9096;letter-spacing:.69px;line-height:.9rem}.footer-code dl dd p span{color:#000}", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-code"
  }, [_c('dl', {
    attrs: {
      "flex": "cross:center"
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": __webpack_require__(97)
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("长按识别小程序"), _c('br'), _vm._v("在"), _c('span', [_vm._v("出去APP")]), _vm._v("中查看详情")])])])])
}]}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/wxxcx.a024391.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share-wrap"
  }, [_c('download', {
    attrs: {
      "page-data": _vm.pageData
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "banner"
  }, [(!_vm.url) ? _c('img', {
    attrs: {
      "src": __webpack_require__(76)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.url) ? _c('img', {
    attrs: {
      "src": _vm.url
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "share-dowmm"
  }, [_c('user', {
    attrs: {
      "my-value": _vm.user
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "cont-title"
  }, [_vm._v(_vm._s(_vm.theme))]), _vm._v(" "), _c('dl', {
    staticClass: "cont-biao",
    attrs: {
      "flex": "cross:center"
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": _vm.avatar
    }
  })]), _vm._v(" "), _c('dd', [_vm._v(_vm._s(_vm.name))])])]), _vm._v(" "), _c('footer-code')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Download__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_User__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_FooterCode__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_route__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_wx__ = __webpack_require__(100);
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






const poiscan = __webpack_require__(102);
const adventure = __webpack_require__(103);
const art = __webpack_require__(104);
const culture = __webpack_require__(105);
const entertainment = __webpack_require__(106);
const food = __webpack_require__(107);
const landscape = __webpack_require__(108);
const night = __webpack_require__(109);
const water = __webpack_require__(110);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "announcement",
  props: ["type", "id", "userId", "uuid"],
  data() {
    return {
      user: {},
      url: "",
      description: "",
      trackname: "",
      iconSrc: "",
      iconObj: {
        'poiscan': poiscan,
        'adventure': adventure,
        'art': art,
        'culture': culture,
        'entertainment': entertainment,
        'food': food,
        'landscape': landscape,
        'night': night,
        'water': water
      },
      pageData: {}
    };
  },
  components: {
    Download: __WEBPACK_IMPORTED_MODULE_0__common_Download__["a" /* default */],
    FooterCode: __WEBPACK_IMPORTED_MODULE_2__common_FooterCode__["a" /* default */],
    User: __WEBPACK_IMPORTED_MODULE_1__common_User__["a" /* default */]
  },
  created() {
    this.getTrack();
    this.pageData = {
      type: this.type,
      id: this.id
    };
    this.getUserInfo();
  },
  computed: {},
  methods: {
    getTrack() {
      Object(__WEBPACK_IMPORTED_MODULE_3__api_route__["d" /* getTrack */])({ id: this.id }).then(res => {
        if (res.data.code == 200) {
          let data = res.data;
          let {
            user,
            poiCount,
            poiProfileDTO,
            totalDay,
            totalDistance,
            theme
          } = data.root;
          // this.user = user || {};
          this.url = poiProfileDTO.strokeCover.url;
          this.description = poiProfileDTO.description;
          this.totalDay = totalDay;
          this.totalDistance = totalDistance;
          this.trackname = poiProfileDTO.name;
          this.poiCount = poiCount;
          let img = poiProfileDTO.mainDimension != "" && poiProfileDTO.mainDimension != null ? this.iconObj[poiProfileDTO.mainDimension] : this.iconObj[poiscan];
          this.iconSrc = img;
        }
      }).catch(res => {
        console.log(res);
      });
    },
    share() {
      __WEBPACK_IMPORTED_MODULE_4__utils_wx__["a" /* default */].getShare({
        title: 'title',
        link: 'link',
        imgUrl: 'logo',
        desc: this.description
      });
    },
    getUserInfo() {
      // console.log(this.userId)
      Object(__WEBPACK_IMPORTED_MODULE_3__api_route__["f" /* getUserInfo */])({
        'openId': this.userId
      }).then(res => {
        //   console.log(res);
        if (res.data.code == 200) {
          this.user = res.data.root;
        }
      }).catch(res => {
        console.log(res);
      });
    }
  },
  destroyed() {}
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(67);
/**
 * Created by chunting on 2018/9/22.
 */


const logo = __webpack_require__(75);
let config = share => {
    __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.config({
        debug: false,
        appId: share.app_id,
        timestamp: parseInt(share.js_timestamp),
        nonceStr: share.js_nonce_str,
        signature: share.js_signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
    });
};
let getConfig = () => {
    let params = {
        url: window.location.href
    };
    return __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get('/wechat/shareInfo', params).then(res => {
        //此处要根据具体返回
        if (res.status == 200) {
            let data = res.data;
            if (data.code == 200) {
                config(data.data.shareInfo);
                __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.ready(function () {
                    __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.hideOptionMenu();
                });
                return data;
            }
        }
    });
};
let getShare = (settings = {}, callback) => {
    let content = {
        title: settings.title || 'title',
        link: settings.link || window.location.href,
        imgUrl: settings.logo || logo,
        desc: settings.desc || ''
    };
    getConfig().then(data => {
        if (data.code == 200) {
            __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.ready(() => {
                __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.showOptionMenu();
                if (callback) {
                    onMenuShareTimeline(content, callback);
                    onMenuShareAppMessage(content, callback);
                    onMenuShareQQ(content, callback);
                    onMenuShareWeibo(content, callback);
                    onMenuShareQZone(content, callback);
                } else {
                    onMenuShareTimeline(content);
                    onMenuShareAppMessage(content);
                    onMenuShareQQ(content);
                    onMenuShareWeibo(content);
                    onMenuShareQZone(content);
                }
            });
        }
    });
};
let onMenuShareTimeline = (content, $fn) => {
    __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.onMenuShareTimeline({
        title: content.title,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {},
        success: function (res) {
            $fn && $fn('Timeline');
        },
        cancel: function (res) {},
        fail: function (res) {}
    });
};
let onMenuShareAppMessage = (content, $fn) => {
    __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.onMenuShareAppMessage({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {},
        success: function (res) {
            console.log(res);
            $fn && $fn('AppMessage');
        },
        cancel: function (res) {},
        fail: function (res) {}
    });
};
let onMenuShareQQ = (content, $fn) => {
    __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.onMenuShareQQ({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {},
        success: function (res) {
            $fn && $fn('QQ');
        },
        cancel: function (res) {},
        fail: function (res) {}
    });
};
let onMenuShareWeibo = (content, $fn) => {
    __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.onMenuShareWeibo({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {},
        success: function (res) {
            $fn && $fn('Weibo');
        },
        cancel: function (res) {},
        fail: function (res) {}
    });
};
let onMenuShareQZone = (content, $fn) => {
    __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a.onMenuShareQZone({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {},
        success: function (res) {
            $fn && $fn('QZone');
        },
        cancel: function (res) {},
        fail: function (res) {}
    });
};
/* harmony default export */ __webpack_exports__["a"] = ({
    wx: __WEBPACK_IMPORTED_MODULE_0_weixin_js_sdk___default.a,
    config,
    getShare,
    getConfig

});

/***/ }),
/* 101 */
/***/ (function(module, exports) {

! function (e, n) {
  module.exports = n(e)
}(window, function (e, n) {
  function i(n, i, t) {
    e.WeixinJSBridge ? WeixinJSBridge.invoke(n, o(i), function (e) {
      c(n, e, t)
    }) : u(n, t)
  }

  function t(n, i, t) {
    e.WeixinJSBridge ? WeixinJSBridge.on(n, function (e) {
      t && t.trigger && t.trigger(e), c(n, e, i)
    }) : t ? u(n, t) : u(n, i)
  }

  function o(e) {
    return e = e || {}, e.appId = C.appId, e.verifyAppId = C.appId, e.verifySignType = "sha1", e.verifyTimestamp = C.timestamp + "", e.verifyNonceStr = C.nonceStr, e.verifySignature = C.signature, e
  }

  function r(e) {
    return {
      timeStamp: e.timestamp + "",
      nonceStr: e.nonceStr,
      package: e.package,
      paySign: e.paySign,
      signType: e.signType || "SHA1"
    }
  }

  function a(e) {
    return e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo, e
  }

  function c(e, n, i) {
    "openEnterpriseChat" == e && (n.errCode = n.err_code), delete n.err_code, delete n.err_desc, delete n.err_detail;
    var t = n.errMsg;
    t || (t = n.err_msg, delete n.err_msg, t = s(e, t), n.errMsg = t), (i = i || {})._complete && (i._complete(n), delete i._complete), t = n.errMsg || "", C.debug && !i.isInnerInvoke && alert(JSON.stringify(n));
    var o = t.indexOf(":");
    switch (t.substring(o + 1)) {
      case "ok":
        i.success && i.success(n);
        break;
      case "cancel":
        i.cancel && i.cancel(n);
        break;
      default:
        i.fail && i.fail(n)
    }
    i.complete && i.complete(n)
  }

  function s(e, n) {
    var i = e,
      t = v[i];
    t && (i = t);
    var o = "ok";
    if (n) {
      var r = n.indexOf(":");
      "confirm" == (o = n.substring(r + 1)) && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"), "config" == i && "function not exist" == o && (o = "ok"), "" == o && (o = "fail")
    }
    return n = i + ":" + o
  }

  function d(e) {
    if (e) {
      for (var n = 0, i = e.length; n < i; ++n) {
        var t = e[n],
          o = h[t];
        o && (e[n] = o)
      }
      return e
    }
  }

  function u(e, n) {
    if (!(!C.debug || n && n.isInnerInvoke)) {
      var i = v[e];
      i && (e = i), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "")
    }
  }

  function l(e) {
    if (!(w || T || C.debug || x < "6.0.2" || A.systemType < 0)) {
      var n = new Image;
      A.appId = C.appId, A.initTime = V.initEndTime - V.initStartTime, A.preVerifyTime = V.preVerifyEndTime - V.preVerifyStartTime, N.getNetworkType({
        isInnerInvoke: !0,
        success: function (e) {
          A.networkType = e.networkType;
          var i = "https://open.weixin.qq.com/sdk/report?v=" + A.version + "&o=" + A.isPreVerifyOk + "&s=" + A.systemType + "&c=" + A.clientVersion + "&a=" + A.appId + "&n=" + A.networkType + "&i=" + A.initTime + "&p=" + A.preVerifyTime + "&u=" + A.url;
          n.src = i
        }
      })
    }
  }

  function p() {
    return (new Date).getTime()
  }

  function f(n) {
    k && (e.WeixinJSBridge ? "preInject" === I.__wxjsjs__isPreInject ? I.addEventListener && I.addEventListener("WeixinJSBridgeReady", n, !1) : n() : I.addEventListener && I.addEventListener("WeixinJSBridgeReady", n, !1))
  }

  function m() {
    N.invoke || (N.invoke = function (n, i, t) {
      e.WeixinJSBridge && WeixinJSBridge.invoke(n, o(i), t)
    }, N.on = function (n, i) {
      e.WeixinJSBridge && WeixinJSBridge.on(n, i)
    })
  }

  function g(e) {
    if ("string" == typeof e && e.length > 0) {
      var n = e.split("?")[0],
        i = e.split("?")[1];
      return n += ".html", void 0 !== i ? n + "?" + i : n
    }
  }
  if (!e.jWeixin) {
    var h = {
        config: "preVerifyJSAPI",
        onMenuShareTimeline: "menu:share:timeline",
        onMenuShareAppMessage: "menu:share:appmessage",
        onMenuShareQQ: "menu:share:qq",
        onMenuShareWeibo: "menu:share:weiboApp",
        onMenuShareQZone: "menu:share:QZone",
        previewImage: "imagePreview",
        getLocation: "geoLocation",
        openProductSpecificView: "openProductViewWithPid",
        addCard: "batchAddCard",
        openCard: "batchViewCard",
        chooseWXPay: "getBrandWCPayRequest",
        openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
        startSearchBeacons: "startMonitoringBeacons",
        stopSearchBeacons: "stopMonitoringBeacons",
        onSearchBeacons: "onBeaconsInRange",
        consumeAndShareCard: "consumedShareCard",
        openAddress: "editAddress"
      },
      v = function () {
        var e = {};
        for (var n in h) e[h[n]] = n;
        return e
      }(),
      I = e.document,
      S = I.title,
      y = navigator.userAgent.toLowerCase(),
      _ = navigator.platform.toLowerCase(),
      w = !(!_.match("mac") && !_.match("win")),
      T = -1 != y.indexOf("wxdebugger"),
      k = -1 != y.indexOf("micromessenger"),
      M = -1 != y.indexOf("android"),
      P = -1 != y.indexOf("iphone") || -1 != y.indexOf("ipad"),
      x = function () {
        var e = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
        return e ? e[1] : ""
      }(),
      V = {
        initStartTime: p(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0
      },
      A = {
        version: 1,
        appId: "",
        initTime: 0,
        preVerifyTime: 0,
        networkType: "",
        isPreVerifyOk: 1,
        systemType: P ? 1 : M ? 2 : -1,
        clientVersion: x,
        url: encodeURIComponent(location.href)
      },
      C = {},
      L = {
        _completes: []
      },
      B = {
        state: 0,
        data: {}
      };
    f(function () {
      V.initEndTime = p()
    });
    var E = !1,
      O = [],
      N = {
        config: function (e) {
          C = e, u("config", e);
          var n = !1 !== C.check;
          f(function () {
            if (n) i(h.config, {
              verifyJsApiList: d(C.jsApiList)
            }, function () {
              L._complete = function (e) {
                V.preVerifyEndTime = p(), B.state = 1, B.data = e
              }, L.success = function (e) {
                A.isPreVerifyOk = 0
              }, L.fail = function (e) {
                L._fail ? L._fail(e) : B.state = -1
              };
              var e = L._completes;
              return e.push(function () {
                l()
              }), L.complete = function (n) {
                for (var i = 0, t = e.length; i < t; ++i) e[i]();
                L._completes = []
              }, L
            }()), V.preVerifyStartTime = p();
            else {
              B.state = 1;
              for (var e = L._completes, t = 0, o = e.length; t < o; ++t) e[t]();
              L._completes = []
            }
          }), m()
        },
        ready: function (e) {
          0 != B.state ? e() : (L._completes.push(e), !k && C.debug && e())
        },
        error: function (e) {
          x < "6.0.2" || (-1 == B.state ? e(B.data) : L._fail = e)
        },
        checkJsApi: function (e) {
          var n = function (e) {
            var n = e.checkResult;
            for (var i in n) {
              var t = v[i];
              t && (n[t] = n[i], delete n[i])
            }
            return e
          };
          i("checkJsApi", {
            jsApiList: d(e.jsApiList)
          }, (e._complete = function (e) {
            if (M) {
              var i = e.checkResult;
              i && (e.checkResult = JSON.parse(i))
            }
            e = n(e)
          }, e))
        },
        onMenuShareTimeline: function (e) {
          t(h.onMenuShareTimeline, {
            complete: function () {
              i("shareTimeline", {
                title: e.title || S,
                desc: e.title || S,
                img_url: e.imgUrl || "",
                link: e.link || location.href,
                type: e.type || "link",
                data_url: e.dataUrl || ""
              }, e)
            }
          }, e)
        },
        onMenuShareAppMessage: function (e) {
          t(h.onMenuShareAppMessage, {
            complete: function () {
              i("sendAppMessage", {
                title: e.title || S,
                desc: e.desc || "",
                link: e.link || location.href,
                img_url: e.imgUrl || "",
                type: e.type || "link",
                data_url: e.dataUrl || ""
              }, e)
            }
          }, e)
        },
        onMenuShareQQ: function (e) {
          t(h.onMenuShareQQ, {
            complete: function () {
              i("shareQQ", {
                title: e.title || S,
                desc: e.desc || "",
                img_url: e.imgUrl || "",
                link: e.link || location.href
              }, e)
            }
          }, e)
        },
        onMenuShareWeibo: function (e) {
          t(h.onMenuShareWeibo, {
            complete: function () {
              i("shareWeiboApp", {
                title: e.title || S,
                desc: e.desc || "",
                img_url: e.imgUrl || "",
                link: e.link || location.href
              }, e)
            }
          }, e)
        },
        onMenuShareQZone: function (e) {
          t(h.onMenuShareQZone, {
            complete: function () {
              i("shareQZone", {
                title: e.title || S,
                desc: e.desc || "",
                img_url: e.imgUrl || "",
                link: e.link || location.href
              }, e)
            }
          }, e)
        },
        startRecord: function (e) {
          i("startRecord", {}, e)
        },
        stopRecord: function (e) {
          i("stopRecord", {}, e)
        },
        onVoiceRecordEnd: function (e) {
          t("onVoiceRecordEnd", e)
        },
        playVoice: function (e) {
          i("playVoice", {
            localId: e.localId
          }, e)
        },
        pauseVoice: function (e) {
          i("pauseVoice", {
            localId: e.localId
          }, e)
        },
        stopVoice: function (e) {
          i("stopVoice", {
            localId: e.localId
          }, e)
        },
        onVoicePlayEnd: function (e) {
          t("onVoicePlayEnd", e)
        },
        uploadVoice: function (e) {
          i("uploadVoice", {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        downloadVoice: function (e) {
          i("downloadVoice", {
            serverId: e.serverId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        translateVoice: function (e) {
          i("translateVoice", {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        chooseImage: function (e) {
          i("chooseImage", {
            scene: "1|2",
            count: e.count || 9,
            sizeType: e.sizeType || ["original", "compressed"],
            sourceType: e.sourceType || ["album", "camera"]
          }, (e._complete = function (e) {
            if (M) {
              var n = e.localIds;
              n && (e.localIds = JSON.parse(n))
            }
          }, e))
        },
        getLocation: function (e) {},
        previewImage: function (e) {
          i(h.previewImage, {
            current: e.current,
            urls: e.urls
          }, e)
        },
        uploadImage: function (e) {
          i("uploadImage", {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        downloadImage: function (e) {
          i("downloadImage", {
            serverId: e.serverId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        getLocalImgData: function (e) {
          !1 === E ? (E = !0, i("getLocalImgData", {
            localId: e.localId
          }, (e._complete = function (e) {
            if (E = !1, O.length > 0) {
              var n = O.shift();
              N.getLocalImgData(n)
            }
          }, e))) : O.push(e)
        },
        getNetworkType: function (e) {
          var n = function (e) {
            var n = e.errMsg;
            e.errMsg = "getNetworkType:ok";
            var i = e.subtype;
            if (delete e.subtype, i) e.networkType = i;
            else {
              var t = n.indexOf(":"),
                o = n.substring(t + 1);
              switch (o) {
                case "wifi":
                case "edge":
                case "wwan":
                  e.networkType = o;
                  break;
                default:
                  e.errMsg = "getNetworkType:fail"
              }
            }
            return e
          };
          i("getNetworkType", {}, (e._complete = function (e) {
            e = n(e)
          }, e))
        },
        openLocation: function (e) {
          i("openLocation", {
            latitude: e.latitude,
            longitude: e.longitude,
            name: e.name || "",
            address: e.address || "",
            scale: e.scale || 28,
            infoUrl: e.infoUrl || ""
          }, e)
        },
        getLocation: function (e) {
          e = e || {}, i(h.getLocation, {
            type: e.type || "wgs84"
          }, (e._complete = function (e) {
            delete e.type
          }, e))
        },
        hideOptionMenu: function (e) {
          i("hideOptionMenu", {}, e)
        },
        showOptionMenu: function (e) {
          i("showOptionMenu", {}, e)
        },
        closeWindow: function (e) {
          i("closeWindow", {}, e = e || {})
        },
        hideMenuItems: function (e) {
          i("hideMenuItems", {
            menuList: e.menuList
          }, e)
        },
        showMenuItems: function (e) {
          i("showMenuItems", {
            menuList: e.menuList
          }, e)
        },
        hideAllNonBaseMenuItem: function (e) {
          i("hideAllNonBaseMenuItem", {}, e)
        },
        showAllNonBaseMenuItem: function (e) {
          i("showAllNonBaseMenuItem", {}, e)
        },
        scanQRCode: function (e) {
          i("scanQRCode", {
            needResult: (e = e || {}).needResult || 0,
            scanType: e.scanType || ["qrCode", "barCode"]
          }, (e._complete = function (e) {
            if (P) {
              var n = e.resultStr;
              if (n) {
                var i = JSON.parse(n);
                e.resultStr = i && i.scan_code && i.scan_code.scan_result
              }
            }
          }, e))
        },
        openAddress: function (e) {
          i(h.openAddress, {}, (e._complete = function (e) {
            e = a(e)
          }, e))
        },
        openProductSpecificView: function (e) {
          i(h.openProductSpecificView, {
            pid: e.productId,
            view_type: e.viewType || 0,
            ext_info: e.extInfo
          }, e)
        },
        addCard: function (e) {
          for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) {
            var a = n[o],
              c = {
                card_id: a.cardId,
                card_ext: a.cardExt
              };
            t.push(c)
          }
          i(h.addCard, {
            card_list: t
          }, (e._complete = function (e) {
            var n = e.card_list;
            if (n) {
              for (var i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {
                var o = n[i];
                o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ
              }
              e.cardList = n, delete e.card_list
            }
          }, e))
        },
        chooseCard: function (e) {
          i("chooseCard", {
            app_id: C.appId,
            location_id: e.shopId || "",
            sign_type: e.signType || "SHA1",
            card_id: e.cardId || "",
            card_type: e.cardType || "",
            card_sign: e.cardSign,
            time_stamp: e.timestamp + "",
            nonce_str: e.nonceStr
          }, (e._complete = function (e) {
            e.cardList = e.choose_card_info, delete e.choose_card_info
          }, e))
        },
        openCard: function (e) {
          for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) {
            var a = n[o],
              c = {
                card_id: a.cardId,
                code: a.code
              };
            t.push(c)
          }
          i(h.openCard, {
            card_list: t
          }, e)
        },
        consumeAndShareCard: function (e) {
          i(h.consumeAndShareCard, {
            consumedCardId: e.cardId,
            consumedCode: e.code
          }, e)
        },
        chooseWXPay: function (e) {
          i(h.chooseWXPay, r(e), e)
        },
        openEnterpriseRedPacket: function (e) {
          i(h.openEnterpriseRedPacket, r(e), e)
        },
        startSearchBeacons: function (e) {
          i(h.startSearchBeacons, {
            ticket: e.ticket
          }, e)
        },
        stopSearchBeacons: function (e) {
          i(h.stopSearchBeacons, {}, e)
        },
        onSearchBeacons: function (e) {
          t(h.onSearchBeacons, e)
        },
        openEnterpriseChat: function (e) {
          i("openEnterpriseChat", {
            useridlist: e.userIds,
            chatname: e.groupName
          }, e)
        },
        launchMiniProgram: function (e) {
          i("launchMiniProgram", {
            targetAppId: e.targetAppId,
            path: g(e.path),
            envVersion: e.envVersion
          }, e)
        },
        miniProgram: {
          navigateBack: function (e) {
            e = e || {}, f(function () {
              i("invokeMiniProgramAPI", {
                name: "navigateBack",
                arg: {
                  delta: e.delta || 1
                }
              }, e)
            })
          },
          navigateTo: function (e) {
            f(function () {
              i("invokeMiniProgramAPI", {
                name: "navigateTo",
                arg: {
                  url: e.url
                }
              }, e)
            })
          },
          redirectTo: function (e) {
            f(function () {
              i("invokeMiniProgramAPI", {
                name: "redirectTo",
                arg: {
                  url: e.url
                }
              }, e)
            })
          },
          switchTab: function (e) {
            f(function () {
              i("invokeMiniProgramAPI", {
                name: "switchTab",
                arg: {
                  url: e.url
                }
              }, e)
            })
          },
          reLaunch: function (e) {
            f(function () {
              i("invokeMiniProgramAPI", {
                name: "reLaunch",
                arg: {
                  url: e.url
                }
              }, e)
            })
          },
          postMessage: function (e) {
            f(function () {
              i("invokeMiniProgramAPI", {
                name: "postMessage",
                arg: e.data || {}
              }, e)
            })
          },
          getEnv: function (n) {
            f(function () {
              n({
                miniprogram: "miniprogram" === e.__wxjs_environment
              })
            })
          }
        }
      },
      b = 1,
      R = {};
    return I.addEventListener("error", function (e) {
      if (!M) {
        var n = e.target,
          i = n.tagName,
          t = n.src;
        if (("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) && -1 != t.indexOf("wxlocalresource://")) {
          e.preventDefault(), e.stopPropagation();
          var o = n["wx-id"];
          if (o || (o = b++, n["wx-id"] = o), R[o]) return;
          R[o] = !0, N.ready(function () {
            N.getLocalImgData({
              localId: t,
              success: function (e) {
                n.src = e.localData
              }
            })
          })
        }
      }
    }, !0), I.addEventListener("load", function (e) {
      if (!M) {
        var n = e.target,
          i = n.tagName;
        n.src;
        if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
          var t = n["wx-id"];
          t && (R[t] = !1)
        }
      }
    }, !0), n && (e.wx = e.jWeixin = N), N
  }
});

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAdVBMVEWLkJeMkZaMkZeqqqqMkJcAAACLkJb////9/f23ur37+/yoq7D4+PiQlZrq6+zFx8qusbasr7SMkZfW2NrNz9K9wMOkqK3y8vPl5+jR09aSl53m5+nk5eff4eLa3N6ztrqhpaqbn6SVmp/BxMe/wsW5vL+eoqek8d3qAAAABnRSTlP5zHYDvwBfkbn0AAABAUlEQVQ4y62U25KCMAyGC2joEdoiCOp62sP7P+LWxp12Fc0443+TNnyTkLQpW1ZlwWBerCirJasW8EyLipXwXCUrCKJgjCACQOlVYqPEp1DmIeH2sr5IdmqW+Pmok/ane0LIOpd2t0Qb/XyyJzvxuPxORAIk5lcyIiInLI9EDzB8DQA98kMizBpdHkQwAjz+09r8EcEfNQI0wTQAIzrEPwI/7YLZIRh0SFk0VmJA6VorMByzeCSyIKtL3zcAK9zavNoOg/Rx0/MrnxP+2vJte2i3uOxueupj5CTe3p+cazJgHGZP33ZYk57c4zt2Prrjmb6F7yfoeaFnjp5bevbp9+MXkK0fJPO8GrMAAAAASUVORK5CYII="

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAn1BMVEVVqlVGljtGljxFlT1FljxFlTv///9Ilz79/vzm8eV8tHVMmUP4+/jx9/Dt9e3i7+DJ4Mau0aqbxpaHu4Fyrmprq2NgpVhcolNXn05PmkVKmEDq8+jd69vZ6dfW6NTB272hypyfyJqSwY15snJoqWD1+vXO48vL4cjE3cGz1K+ly6CXw5GMvoZ+tnfx9/G72Le617a517WozaRwrWhSnEh1FTlKAAAABXRSTlMC+cx2v/nLE7UAAAEQSURBVDjLhdTHkoMwEEVRgf1aIidjgjPgbE/+/28by2yGMTR30wV1CrRpCSEmpoH+DHMiHk3BNX18AXwTYYLPFAb4DNF5LKMc2Nqdd13xQzEKtWUElgfYNONE5JaRKzlRk22F4IT0jpSwAmflFryoaQVe7MiXrHC8Nd1YEVO6siQjSv8ImxJGXOkbWAZyUMz3IQCbtkNCrr1cz0+VDogd3Z+zsAKnV6TqA20zde4TTrAogPyeAfii+lWUBzUDKpcokpDLffpfyFAl+iS6E5Bbb01XyA3d9P/p2RXIFv68I96pArChNgvA3F9kf8SFYj2y+LQOVuGlgSae5ejZ7ktS4bVmo4UxvnPjezu+++P3xy9UXR98J7U5TgAAAABJRU5ErkJggg=="

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAbFBMVEX/kpP/kpT/k5X/qqr/k5QAAAD/kpP//////Pz/mJn/+Pj/1db/s7T/nZ7/9fX/6Oj/u7z/pqf/m5z/wsL/vr//qqv/8PD/5eX/2tr/+vr/7Oz/39//0NH/zc7/ysv/o6T/oqP/n6D/xcb/uLjEOX3BAAAABnRSTlP5zHYDvwBfkbn0AAABFklEQVQ4y4XUV66DMBRFUUpyjgumh17fm/8cEyUCS9T9g0BLxlfIOE/fcx0c57ie/3T8B656+I6H6zzHxZIZ0+9VThNsrrPsIYlIoT+mr8kmWMUKXnWRBYOKZCV0EEeMV7KIpjCDnl+iZY5PrZIbYZgPZAktot+SDKxYnmiyRcLse58y34iZ8R8LiaVktwZCbZTGWkazFbqWr8SKJtrNMrKDLeb/TqC3b8aoSuyFjMRCkjCcDwTSRsS/yZVKcCQgS7YzZMdiwkbYGVVdhaKXOBUwir/dnAuS8aVASWWuhWGGc2G/aTqdC4geyAS7c1EJXbKqxLmQXVjkGE6ELWdyI2QYxqs4JmMk0gW4uM69P7f3Z//+//EGZ4Mg3islzSAAAAAASUVORK5CYII="

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAclBMVEWqqv9ZjMpajMlbjMtZjMpZjMn////f6PX7/P3q8fjB1OuLrtnN3O7M2+6vx+V5otPP3u9llM3l7faGq9hhksujwOGevN91n9Jdj8r3+vz09/vZ5fKow+Nsmc/w9Pro7/e70Om1zOd9pdVwnNGVtdyNsNrlq3TDAAAABXRSTlMC+cx2v/nLE7UAAADaSURBVDjLxdTLbsMgFIRhgjNjbCctGHy3c23f/xVrNZHaUAzL/utP6GwGIUQmdwi3k5lY2yPWfn0B8TIh8dLNeUIK7wZq/xaBlwwneHnCskiIUrGLik5dRh0Tpj6ZlvO26E7qBpQ89kFhbKmUxtqZRdP1vlhGcrgWJdYO9UTy4om+aW2Pp8ixfMw2dMeP+O6/RHWmeqRNULghf3t0HcqgeOcnnul8Q1RAU0x34Lgt7iQPUdGSHKOiIlkkRR0VNiqcXuBqsgHa+Zfw92Lcn71IxJPp3aa3n/4/vgBGdBvmL1OGuwAAAABJRU5ErkJggg=="

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAmVBMVEX/qlX1Y0n1ZEn0Y0n0ZEj0Y0j////7z8f+/f3++fj84Nv1dFz95OD1e2X0b1b0Z03+8vD6wLX6vLH5rqD4nIv5qpv1eGH+9vT+8O397Oj95+P3j3z2iXX++/r6xLr5uKz5s6b2gWz1cVn7ycD4pZb3mIb3lYP3k4H83dj82tP819D70cn7y8P4pZX4oZH2hXD84tz3jnr0bFNQBaz6AAAABXRSTlMC+cx2v/nLE7UAAAFnSURBVDjLhZQJkoMgEEWNCS2b+27URLPvM3P/ww1CJWJixa9VNNTjAy2tYRhzc4bGNTPnhtACfdNCOKDvmhvmBGEawz08oni7Z4O9GFqH+R5I0Ugb1YiYkPrAXKeJKdBkhKjh+rLfeV75Qawg1Bfkqf1GLCFAuljG3wheoKEOEA2IJexV8Fc+3Y98QPipK9stgec5bpDoBLeUlUqHjG2IdMJT+9yAVNPFLsQ6QdayOSniIDt4rRN5rZIiAdx2sQM3nTirtZ2sI9TcEpY6EYPK+B4KL1dDAXF1gmG11QiSwFN26WaYU7+SmQrBFa8cwPaQcLLc6ay9zkYEd1i/f9uGFGKS9YN+oRRe2Pq8H01GVi29IBt25RFq95NArY9xxcMVpJBH+i3UlISYiKfYuWiMaC8MMbgjVIhjbsMRwiEBenR5PJ9E7PdEXy9+RXnFKc1SmmO7r5e+5tjVeinua266bqdrf/r/8Q/5CCMl3Nno4gAAAABJRU5ErkJggg=="

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAb1BMVEX//1X/sgL/swP/swL/swP/sgL/////57H/8M7/y1X/viz/0Gf/1HT/+vH/9eD/4qD/3Y//vSf/7sj/5q3/4Jv/zVr/xUH/wTP/uhz/tQr//Pf/+Or/ylD/wzr/uyL/txP/89j/673/5an/24j/2YYja2u9AAAABXRSTlMC+cx2v/nLE7UAAAC1SURBVDjL7dTJDoMgFIVhQM+1Sp1nrdrp/Z+xUGNCmgKr7vpv/WJYcGCMBYLje1wETBXCVaj+AHcBEx4hGPcIzrDXb0A7YuiBZEF3L8qDHGJ+oKQLmitQV5BE6fAh0gIJxcgzIDppQdIrzj8QWa6F+moVdTYqsc2NVSwUdSRvU2IVkBMRpS3sAuuTmgEu8T6pIWKfqOAUa9vBLVR/oW+yrq5gZu4lHnfZm4D7N+ffrX/7/vfjBbqyGtdYZFX4AAAAAElFTkSuQmCC"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAh1BMVEWq/1WCzFWCzFWEy1aDzFWCy1X////9/vyP0GeFzFnu+Ojf8dOV03D6/Pjz+u/y+e3A5arU7cW846Sc1niNz2OHzVvo9uCy35em2oaS0myJzl73/PX1+/Hs9+Xk89rY7srS7MPK6LfF57C44Z624Zyq24uj2YKf132X1HLZ78vW7sfO672s3I6WiTk+AAAABXRSTlMC+cx2v/nLE7UAAAEmSURBVDjLhdTpjoIwFIbhgn6nC2VfBNxXHPX+r28gcUYKSN9/bZ40TZNTxtjCdTCd4y5Y2xJzLdsTMN+CuRbhMsciHGYsRTkmpvD4fV5URHsA8nH9Jk78SCkQUSinhdw88sCD5js6T4sX3XCm226TeUE+KTwlIUNFKzQUTYk7Ja8MKyoAxC0bi3hd7ysg2Eqg9ugyEiVFggvgRoe8874YiCwo5JFLAAnfakDwaCB+fJ1yha4mDOp2IxCGuNJFhHR435kngN7sDOEpFETl36oAkF76QlAiOO3x7kzV8D1WpHFN/h9S8NNQxCGMDr42Rb5+miILVW2IiFKYpfzYF8KPMSyisieefjUSUq2bj/BPGKfV9iMEppIZuuzzYp85+9zaZ9/+f/wCmaofUOcALeAAAAAASUVORK5CYII="

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAZlBMVEWleP+leP+kef+qqv+keP8AAACkd/7///+6mf7Tvf6thf6nfP7i0/79/P7HrP7y6/759/7u5v7AoP63k/6zjf6qgf6lef728v7m2v7Fqf7CpP7p3v7ayf7Yxf7Uv/7Ntf7Ms/6vh/6F4mDzAAAABnRSTlP5zHYDvwBfkbn0AAAAyUlEQVQ4y+3UuQ6DMBBFUbO9MdjsgQBh/f+fDCOCQArGTcrcwhQcC1OMReC5jsB1wnG9QHg+7vI94eI+VzgW4QhhER9Q6ujrldQK3CYe2bMEinCvANo4PwSTNG6hNG1phZCaCmeBqqEQGIgb2PY1ToKre946EcUzqhdNwCH25jiP0GUdf7LAlUDB51WQ/LgWvLnjn1hgEnyAnBoFs0CtSde4E5Ak8Re/EzJJkpHGdZUGkdJeahAqWlt4UTiyz4t95uxza599+/3xBqt4HhjdqAYOAAAAAElFTkSuQmCC"

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAh1BMVEU3tf83tf84tv9V//84tv8AAAA3tf/////q9//1+/+n3v/a8f/D6f9Euv9dw/86tv+w4v9Lvf/8/v9qyP9Iu/9AuP/n9v+I0/9xyv9mxv8+t//3/P/j9f/g8/+95v+k3f+O1f95zf9jxf9Tv//5/P/P7f+25P+A0P9Ywf+c2//w+f+65f+U1/9PdlIBAAAABnRSTlP5zHYDvwBfkbn0AAABXUlEQVQ4y4XU2Y6DMAwFUNpO7aQkhH3f1y7z/983QUALA5T7gCL5KNhCRrlezicFtqOczpercvmBb/m5KGf4nrNyOhAnZejBeJU7YgIxUmuPDID6auQvK+FcNGYJXK0/xCluKhYzkWMqJCFjXdMp0qWQhIXA1KHeINUD0eF9LsDDpqWJPHDdJJ4jDw9TLAR0JCZ4A801M4cHIQw3TmLKDRl1NeAEVeFE2YYAhsQGsBCxKjDYEBrtXwROgg2kBNbCJq5964mooDKzDdHWcr6eyKSUr0WAD4CRlPK8FqobwkgMEjtrYWH3HprQO6xF+gzfHSODtbDfzWtuxLAtPOuf8MYPZeimq4GOMt5SvIh8CEuvo4z3c5GKYb4QhPl5+0SqG8ONGogUf2eiQhmi++HYS61yEAytjxB5V3L4xI9Uu6QJH8RmLBrTxIBe7JFgAvs7ZzvDzh3v7fHuH/8//gAtNyculFncygAAAABJRU5ErkJggg=="

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share-wrap footprint"
  }, [_c('download', {
    attrs: {
      "page-data": _vm.pageData
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": _vm.url
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "share-dowmm"
  }, [_c('user', {
    attrs: {
      "my-value": _vm.user
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "cont-title"
  }, [_vm._v(_vm._s(_vm.description))]), _vm._v(" "), _c('dl', {
    staticClass: "cont-biao",
    attrs: {
      "flex": "cross:center"
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": _vm.iconSrc
    }
  })]), _vm._v(" "), _c('dd', [_vm._v(_vm._s(_vm.trackname))])])]), _vm._v(" "), _c('footer-code')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Download__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_User__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_FooterCode__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_route__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_weixin__ = __webpack_require__(113);
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
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "journey",
  props: ["type", "id", "userId", "uuid"],
  data() {
    return {
      url: "",
      totalDay: "",
      totalDistance: "",
      theme: "",
      poiCount: "",
      desc: "",
      user: null,
      pageData: {}
    };
  },
  components: {
    Download: __WEBPACK_IMPORTED_MODULE_0__common_Download__["a" /* default */],
    FooterCode: __WEBPACK_IMPORTED_MODULE_2__common_FooterCode__["a" /* default */],
    User: __WEBPACK_IMPORTED_MODULE_1__common_User__["a" /* default */]
  },
  created() {
    if (this.type == "travel") {
      this.getTravelDetail();
    }
    if (this.type == "poi") {
      this.getPoi();
    }
    if (this.type == "temp") {
      this.getTemp();
    }
    this.pageData = {
      type: this.type,
      id: this.id
    };
    this.getUserInfo();
  },
  computed: {},
  methods: {
    getTravelDetail() {
      Object(__WEBPACK_IMPORTED_MODULE_3__api_route__["e" /* getTravelDetail */])({ travelId: this.id }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          let data = res.data;
          let {
            user,
            poiCount,
            strokeCover,
            totalDay,
            totalDistance,
            theme
          } = data.root;
          this.url = strokeCover.url;
          this.totalDay = totalDay;
          this.totalDistance = totalDistance;
          this.theme = theme;
          this.poiCount = poiCount;
          // this.user = user;
          this.desc = `${totalDay}天 | ${poiCount}地点 | ${totalDistance}公里`;
        }
      }).catch(res => {
        console.log(res);
      });
    },
    getPoi() {
      Object(__WEBPACK_IMPORTED_MODULE_3__api_route__["b" /* getPoiDetail */])({
        objectId: this.id
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          let data = res.data;
          let { user, imageList, name, tagList } = data.root;
          this.url = imageList[0].url;
          this.theme = name;
          //   this.user = user;
          this.desc = tagList.join(" | ");
        }
      });
      //   this.getUserInfo();
    },
    getTemp() {
      Object(__WEBPACK_IMPORTED_MODULE_3__api_route__["c" /* getTempDetail */])({
        id: this.id
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          let data = res.data;
          let { imageList, name, tagList, address } = data.root;
          this.url = imageList ? imageList[0].url : false;
          this.theme = name;
          //   this.user = user;
          this.desc = address;
        }
      });
      //   this.getUserInfo();
    },
    getUserInfo() {
      // console.log(this.userId)
      Object(__WEBPACK_IMPORTED_MODULE_3__api_route__["f" /* getUserInfo */])({
        'openId': this.userId
      }).then(res => {
        //   console.log(res);
        if (res.data.code == 200) {
          this.user = res.data.root;
        }
      }).catch(res => {
        console.log(res);
      });
    }
  },
  destroyed() {}
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchShareInfo */
/* unused harmony export security */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(67);


function fetchShareInfo(query) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].get('/api/share/weiXin', {
    'params': query
  });
}
function security(body) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/', {
    'body': body
  });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share-wrap journey"
  }, [_c('download', {
    attrs: {
      "page-data": _vm.pageData
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "banner"
  }, [(!_vm.url) ? _c('img', {
    attrs: {
      "src": __webpack_require__(76)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.url) ? _c('img', {
    attrs: {
      "src": _vm.url
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "share-dowmm"
  }, [(_vm.user) ? _c('user', {
    attrs: {
      "my-value": _vm.user
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "cont-title"
  }, [_vm._v(_vm._s(_vm.theme))]), _vm._v(" "), _c('p', {
    staticClass: "cont-desc"
  }, [_vm._v(_vm._s(_vm.desc))])]), _vm._v(" "), _c('footer-code')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("1fcc4dbd", content, true, {});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)(false);
// imports


// module
exports.push([module.i, "#index{margin:0 auto;max-width:760px}#index img{width:100%}", ""]);

// exports


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KmindIndex"
});

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "index"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(119)
    }
  })])
}]}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/index.67d0794.png";

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'not-found',
  methods: {}
});

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "error-box"
  }, [_c('div', {
    staticClass: "error-text"
  }, [_vm._v("哎呀...页面开小差了...")])])
}]}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Announcement__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Announcement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Announcement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footprint__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footprint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Footprint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Journey__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Journey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Journey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_operation__ = __webpack_require__(123);
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

 //公告
 //足迹
 //行程&POI

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'share',
    data() {
        return {
            type: '',
            id: '',
            userId: '',
            uuid: ''
        };
    },
    components: {
        Announcement: __WEBPACK_IMPORTED_MODULE_0__Announcement___default.a,
        Footprint: __WEBPACK_IMPORTED_MODULE_1__Footprint___default.a,
        Journey: __WEBPACK_IMPORTED_MODULE_2__Journey___default.a
    },
    created() {
        this.getQuery();
        // setTitle('')
    },
    computed: {},
    methods: {
        getQuery() {
            this.type = this.$route.query.type;
            this.id = this.$route.query.id;
            this.userId = this.$route.query.userId;
            this.uuid = this.$route.query.uuid;
        }
    },
    destroyed() {}
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTitle */
let setTitle = title => {
    setTimeout(function () {
        //利用iframe的onload事件刷新页面
        document.title = title || '标题';
        var iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.onload = function () {
            setTimeout(function () {
                document.body.removeChild(iframe);
            }, 0);
        };
        document.body.appendChild(iframe);
    }, 0);
};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h5-share-wrapper",
    staticStyle: {
      "height": "100%",
      "overflow-y": "auto"
    }
  }, [(_vm.type == 'club') ? _c('announcement', {
    attrs: {
      "type": _vm.type,
      "id": _vm.id,
      "userId": _vm.userId,
      "uuid": _vm.uuid
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type == 'track') ? _c('footprint', {
    attrs: {
      "type": _vm.type,
      "id": _vm.id,
      "userId": _vm.userId,
      "uuid": _vm.uuid
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type == 'travel' || _vm.type == 'poi' || _vm.type == 'temp') ? _c('journey', {
    attrs: {
      "type": _vm.type,
      "id": _vm.id,
      "userId": _vm.userId,
      "uuid": _vm.uuid
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ })
]));