<template>
  <div class="wrapper" flex="dir:top cross:center">
      <div class="logo" >
        <img src="../assets/images/logo_admi@3x.png" alt="">
      </div>
      <div class="banner">
        <img src="../assets/images/slogan@3x.png" alt="">
      </div>
      <div class="andBtn iosBtn" @click.stop="download">
        <img src="../assets/images/ios_button@3x.png" alt="">
      </div>
      <div class="andBtn" @click.stop="download">
        <img src="../assets/images/android_button@3x.png" alt="">
      </div>
    </div>
</template>

<script>
import { AppLink } from "../utils/arouse";
export default {
  name: "KmindDownload",
  data() {
    return {};
  },
  props: {
    pageData: Object
  },
  components: {},
  created() {
    // console.log(AppLink)
    // this.download()
  },
  methods: {
    download() {
      let config = {
        // 和app协定的scheme
        ioschema:"AnyGo.1000mind://anygo/",
        andschema:"scheme://com.kmiles.chuqu/anygo/",
        // iOS下的App在appstore的地址
        appstore: "http://itunes.apple.com/app/id1345961107?mt=8",
        // 应用宝的地址
        yyb: "http://download.awayroadtrip.com/chuqu.apk"
      };
      // alert(config.schema)
      let applink = new AppLink(config);
      applink.open();
    }
  }
};
</script>
<style lang="less" scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    background: #fff;
    .logo{
      width: 5rem;
      height: 5rem;
      margin: 2.1rem 0 1rem 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .banner{
      width: 14.1rem;
      height: 3.75rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .andBtn{
      width: 8rem;
      height: 2.5rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .iosBtn{
      margin: 3.25rem 0 1.4rem 0;
    }
  }
</style>

