<template>
  <div class="wrapper" flex="dir:top cross:center">
      <div class="logo" >
        <img src="../assets/images/logo_admi@3x.png" alt="">
      </div>
      <div class="banner">
        <img src="../assets/images/slogan@3x.png" alt="">
      </div>
      <div class="andBtn iosBtn" @click.stop="iosDownload">
        <img src="../assets/images/ios_button@3x.png" alt="">
      </div>
      <div class="andBtn" @click.stop="anDownload">
        <img src="../assets/images/android_button@3x.png" alt="">
      </div>
      <div class="modal" v-show="modalShow" @click="hideModal">
            <div class="modal-content">
                <div class="tit">
                <p>点击右上角“...”，</p>
                <p>选择在浏览器打开即可下载</p>
                </div>
                <div class="modal-btn" >
                    知道了
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { AppLink } from "../utils/arouse";
export default {
  name: "KmindDownload",
  data() {
    return {
      modalShow:true
    };
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
    iosDownload(){
      window.location.href="http://itunes.apple.com/app/id1345961107?mt=8";
    },
    anDownload() {
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
    },
    hideModal(){
      console.log('1')
        this.modalShow = false
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
  .modal{
	z-index: 99;
	position: fixed;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	background:rgba(0,0,0,0.6);
	.modal-content{
		z-index: 101;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -7rem;
		margin-top: -7rem;
		width: 14rem;
		height: 8.15rem;
		background: #fff;
		border-radius: 0.5rem;
		.tit{
			box-sizing: border-box;
			padding-top: 1.85rem;
			width: 100%;
			height: 5.6rem;
			border-bottom: 1px solid #979797;
			font-size: 0.8rem;
			color:#000;
			p{
				width: 100%;
				text-align: center;
			}
		}
	}
	.modal-btn{
		width: 100%;
		height: 2.5rem;
		text-align: center;
		line-height: 2.5rem;
		font-size: 0.75rem;
		color: #57C514;
	}
}
</style>

