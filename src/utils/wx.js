/**
 * Created by chunting on 2018/9/22.
 */
import wx from 'weixin-js-sdk';
import $api from '@/utils/request'
const logo = require('@/assets/images/logo.png');
let config = (share) => {
    wx.config({
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
    }
    return $api.post('/api/app/weixin/ticket', params)
        .then(res => {
            console.log(res)
            //此处要根据具体返回
            if(res.status == 200){
                let data = res.data;
                if (data.code == 200) {
                    config(data.data.shareInfo);
                    wx.ready(function () {
                        wx.hideOptionMenu();
                    });
                    return data;

                }
            }
            
        })
};
let getShare = (settings = {},callback) => {
    let content = {
        title: settings.title || 'title',
        link: settings.link || window.location.href,
        imgUrl: settings.logo || logo,
        desc: settings.desc || ''
    }
    getConfig().then(data => {
        if (data.code == 200) {
            wx.ready(() => {
                wx.showOptionMenu();
                if(callback){
                    onMenuShareTimeline(content,callback);
                    onMenuShareAppMessage(content,callback);
                    onMenuShareQQ(content,callback);
                    onMenuShareWeibo(content,callback);
                    onMenuShareQZone(content,callback);
                }else{
                    onMenuShareTimeline(content);
                    onMenuShareAppMessage(content);
                    onMenuShareQQ(content);
                    onMenuShareWeibo(content);
                    onMenuShareQZone(content);
                }
            });
        }
    })
};
let onMenuShareTimeline = (content, $fn) => {
    wx.onMenuShareTimeline({
        title: content.title,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {

        },
        success: function (res) {
            $fn&&$fn('Timeline');
        },
        cancel: function (res) {

        },
        fail: function (res) {

        }
    });
};
let onMenuShareAppMessage = (content, $fn) => {
    wx.onMenuShareAppMessage({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {

        },
        success: function (res) {
            console.log(res);
            $fn&&$fn('AppMessage');
        },
        cancel: function (res) {

        },
        fail: function (res) {

        }
    });
};
let onMenuShareQQ = (content, $fn) => {
    wx.onMenuShareQQ({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {

        },
        success: function (res) {
            $fn&&$fn('QQ');
        },
        cancel: function (res) {

        },
        fail: function (res) {

        }
    });
};
let onMenuShareWeibo = (content, $fn) => {
    wx.onMenuShareWeibo({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {

        },
        success: function (res) {
            $fn&&$fn('Weibo');
        },
        cancel: function (res) {

        },
        fail: function (res) {

        }
    });
};
let onMenuShareQZone = (content, $fn) => {
    wx.onMenuShareQZone({
        title: content.title,
        desc: content.desc,
        link: content.link,
        imgUrl: content.imgUrl,
        trigger: function (res) {

        },
        success: function (res) {
            $fn&&$fn('QZone');
        },
        cancel: function (res) {

        },
        fail: function (res) {

        }
    });
};
export  default {
    wx,
    config,
    getShare,
    getConfig
    
}
