<template>
    <div class="">
        <div flex="main:justify" class="download">
            <div flex="cross:center" class="d-left">
                <div class="d-logo">
                    <img src="../../assets/images/logo.png">
                </div>
                <dl class="d-text">
                    <dt>出去-你的专属出行智能</dt>
                    <dd>世界很大 我要出去</dd>
                </dl>
            </div>
            <div flex="cross:center" class="d-right">
                <button @click.stop="download">打开</button>
            </div>
        </div>
        <div class="modal" v-show="modalShow">
            <div class="modal-content">
                <div class="tit">
                <p>点击右上角“...”，</p>
                <p>{{strNotice}}</p>
                </div>
                <div class="modal-btn" @click="click">
                    知道了
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import "./download.less";
// import $device from '../../tools/device';
import { AppLink } from "../../utils/arouse";
// require('../../tools/arouse');
export default {
  name: "download",
  props: ["data"],
  data() {
    return {
        modalShow: false,
        strNotice: '选择“在Safari打开”'
    };
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
       let ua = navigator.userAgent.toLowerCase();
      
      let config = {
        // 和app协定的scheme
        ioschema:
          "AnyGo.1000mind://anygo/" +
          this.pageData.type +
          "/" +
          this.pageData.id,
        andschema:
          "scheme://com.kmiles.chuqu/anygo/" +
          this.pageData.type +
          "/" +
          this.pageData.id,
        // iOS下的App在appstore的地址
        appstore: "http://itunes.apple.com/app/id1345961107?mt=8",
        // 应用宝的地址
        yyb: "http://download.awayroadtrip.com/chuqu.apk"
      };
      // alert(config.schema)
      let applink = new AppLink(config);
      if (ua.indexOf("micromessenger") > -1) {
        if (this.isIOS(ua)){
            this.strNotice = '选择“在Safari打开”';
        } else {
            this.strNotice = '选择“在浏览器打开”';
        }
        this.modalShow = true;
      } else {
        applink.open();
      }
      
    },
    click(){
        this.modalShow = false;
    },
    isIOS(userAgent) {
        return userAgent.match(/iPhone|iPad|iPod/i) ? true : false
    },
  },
  watch: {
    
  },
  mounted() {
    
  },
  destroyed() {}
};
</script>
