<template>
  
</template>

<script>
// 公众号配置 gzhCode 9房地产 10保保助手 11小小金融
import { swiper, swiperSlide } from "vue-awesome-swiper";
import wxShare from "../mixin/wxShare.js";
var xxUrl = window.location.origin;
export default {
  name: "list",
  mixins: [wxShare],
  data() {
    let tempId = this.$route.query.tempId;
    let companys = this.$store.state.companys;
    return {
      
    };
  },
  beforeCreate() {
    let clubId = this.$route.query.id || '';
    this.$nextTick(function() {
      this.clubId = clubId;
    })
    console.log(this.clubId, clubId)
    
  },
  created() {
    let signId = this.$route.query.signId || "";
    if (signId) {
      this.$localStorage("signId", signId);
    }
    this.getInfo();
    let formList = this.$localStorage("formList");
    if (formList) {
      this.formList = JSON.parse(formList);
      console.log(JSON.parse(formList))
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    userCount() {
      return this.formList.length;
    },
    amountMoney() {
      return this.formList.length * 120;
    }
  },
  mounted() {
    // 音乐触摸后播放
    var that = this;
    if (!this.$route.query.gzhCode) {
      window.addEventListener(
        "touchstart",
        function() {
          let music = window.document.getElementById("audio");
          if (
            that.$route.name === "Details" &&
            music.paused &&
            that.musicStatus === "swiper-voice__ani"
          ) {
            music.play();
          }
        },
        false
      );
    }
  },
  methods: {
    getClubId (id) {
      this.clubId = id;
      console.log(id)
    },
    xxLogin(custId, gzhCode) {
      if (custId || gzhCode) {
        // 分享页进来的标识 isFromShare
        this.isFromShare = true;
        // 小小金融分享页进来先进行授权（因为小小金融点一元换购按钮时要进行房地产的授权，所有先授权小小金融获得signid）
        if (Number(gzhCode) === 11 && !this.$route.query.signId) {
          this.$ajax({
            url: "/animation/getAuthUrl",
            data: {
              gzhCode: 11,
              shareUrl: `${xxUrl}/xxcard/details?tempId=${
                this.tempId
              }!custId=${custId}`
            },
            success: data => {
              let authUrl = data.attr.authUrl;
              window.location.href = authUrl;
            }
          });
        }
      }
    },
    getInfo() {
      // 如果从分享链接进来会带参数 custId gzhCode
      let data = { templateId: this.tempId };
      let custId = this.$route.query.custId;
      let gzhCode = this.$route.query.gzhCode;
      if (custId) data["custId"] = custId;
      if (gzhCode) {
        data["gzhCode"] = gzhCode;
        this.gzhCode = gzhCode;
      }
      this.xxLogin(custId, gzhCode);
      this.$ajax({
        url: "/animation/pageList",
        data: data,
        success: res => {
          let attr = res.attr;
          let tempInfo = attr.tempInfo;
          this.title = tempInfo["title"];
          let userInfo = attr.userInfo;
          let pageList = res.rows;
          pageList.map((item, index) => {
            if (item["pageContent"]) {
              item["pageContent"].map(subItem => {
                if (index === 0) {
                  subItem["cls"] = subItem["class"];
                } else {
                  subItem["cls"] = "hide";
                }
              });
            }
          });
          this.backgroundMusic = tempInfo["backgroundMusic"];
          this.pageSize = pageList.length;
          this.pageList = pageList;
          this.swiperShow = true;
          // 设置页面的其他信息
          this.setPage(userInfo, tempInfo);
          // 设置分享信息
          this.setShare(this.userInfo);
        }
      });
    },
    setPage(userInfo, tempInfo) {
      if (userInfo.gzhCode) {
        this.gzhCode = Number(userInfo.gzhCode);
        this.$sessionStorage("gzhCode", userInfo.gzhCode);
      }
      if (tempInfo.hasOwnProperty("isBought") && tempInfo.isBought > 0) {
        this.isBought = tempInfo.isBought;
        // 用户购买了就展示用户的名片
        this.userInfo = userInfo;
      } else {
        // 用户没购买就用公众号信息
        this.userInfo = this.companys[this.gzhCode - 9];
      }
    },
    // 设置分享信息
    setShare(userInfo) {
      let custId = userInfo.customerId || "";
      let shareInfo = {
        title: this.title,
        desc: `联系方式: ${userInfo.userName}\n${userInfo.telephone}`,
        link: `https://phone.xxjr.com/xxcard/details?tempId=${
          this.tempId
        }&custId=${custId}&gzhCode=${this.gzhCode}`,
        imgUrl:
          userInfo.headImgUrl ||
          this.companys[Number(userInfo.gzhCode) - 9]["headImgUrl"]
      };
      this.weChatShare(shareInfo);
    },
    // 播放音乐控制
    playAudio() {
      let music = this.$refs["myAudio"];
      if (music.paused) {
        music.play();
        this.musicStatus = "swiper-voice__ani";
      } else {
        music.pause();
        this.musicStatus = "";
      }
    },
    payCard() {
      // 从分享页进来 或者是小小金融时进行房地产公众号的授权（因为小小金融用的是房地产的支付）小小金融就多传个oldSignId
      if (this.gzhCode === 11 || this.isFromShare) {
        let form = {
          gzhCode: this.gzhCode,
          shareUrl: `${xxUrl}/xxcard/pay?tempId=${this.tempId}`
        };
        if (this.gzhCode === 11) {
          form["shareUrl"] = `${xxUrl}/xxcard/pay?tempId=${
            this.tempId
          }!oldSignId=${this.$localStorage("signId")}`;
        }
        this.$ajax({
          url: "/animation/getAuthUrl",
          data: form,
          success: data => {
            let authUrl = data.attr.authUrl;
            window.location.href = authUrl;
          }
        });
      } else {
        this.$router.push(`/pay?tempId=${this.tempId}`);
      }
    },
    addUser() {
      // 增加用户
      let objForm = {
        name: '',
        idCard: '',
        phone: '',
        remarkers: ''
      };
      console.log(this.formList);
      let check = this.checkForm(this.formList[this.formList.length - 1]);
      if (check) {
        this.formList.push(objForm);
        this.$localStorage('formList', JSON.stringify(this.formList));
      }else {
        console.log('请确认上一位输入完整信息');
      }
      this.$nextTick(function() {
        this.swiper.slideTo(this.formList.length);
      })
    },
    removeUser(index) {
      // 删除用户
      this.formList.splice(index, 1);
    },
    goPay() {
      this.$rmLocalStorage('formList')
    },
    checkForm (obj){
      for (var key in obj) {
        if (obj[key] !== '') {
          return true;
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    VSelect
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.detail-box{
  display: flex;
  flex-direction: column;
}
.banner {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 0.3rem;
}
.user-num {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  font-weight: 900;
}
.formList {
  position: relative;
  padding: 0.3rem 0;
  width: 80%;
  margin: 0 auto;
  .form-remove {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: -0.2rem;
    width: 0.46rem;
    height: 0.46rem;
    font-size: 0.4rem;
    color: red;
    line-height: 0.44rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
}
.swiper-button-prev,
.swiper-button-next {
  right: 0.1rem;
  width: 0.25rem;
  height: 0.4rem;
  margin-top: -0.2rem;
  background-size: 0.25rem 0.4rem;
}
.add-user {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 0.6rem;
  height: 0.6rem;
  text-align: center;
  font-size: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.btn-wrapper{
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ccc;
  .amount-money{
    width: 70%;
    height:.88rem;
    line-height: .88rem;
    text-align: center;
    border-right:1px solid #ccc;
  }
  .pay-btn{
    width: 30%;
    height: .88rem;
  }
}
</style>

