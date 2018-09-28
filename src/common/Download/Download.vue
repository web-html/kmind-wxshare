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
                <button @click.stop="download">下载体验</button>
            </div>
        </div>
        <div class="modal" v-show="modalShow">
            <div class="modal-content">
                <div class="tit">
                <p>点击右上角“...”，</p>
                <p>选择“在Safari打开”</p>
                </div>
                <div class="modal-btn">
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
        modalShow: false
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
        this.modalShow = true;
      } else {
        applink.open();
      }
      
    }
  },
  watch: {
    progress() {
      this.draw();
    }
  },
  mounted() {
  },
  destroyed() {}
};
</script>
