<template>
    <div class="share-wrap footprint">
        <download :page-data="pageData"></download>
        <div class="banner">
            <img :src="url">
        </div>
        <div class="share-dowmm">
            <user :my-value="user"></user>
            <div class="content">
                <p class="cont-title">{{description}}</p>
                <dl flex="cross:center" class="cont-biao">
                    <dt>
                        <img v-if="!iconSrc" src="../assets/images/icon_poiscan.png">
                        <img v-if="iconSrc" :src="iconSrc">
                    </dt>
                    <dd>{{trackname}}</dd>
                </dl>
            </div>
            <footer-code></footer-code>
        </div>
    </div>
</template>

<script>
import Download from "../common/Download";
import User from "../common/User";
import FooterCode from "../common/FooterCode";
import { getTrack, getUserInfo } from "@/api/route";
import wx from "@/utils/wx";
const poiscan = require("../assets/images/icon_poiscan.png");
const adventure = require("../assets/images/icon_adventure.png");
const art = require("../assets/images/icon_art.png");
const culture = require("../assets/images/icon_culture.png");
const entertainment = require("../assets/images/icon_entertainment.png");
const food = require("../assets/images/icon_food.png");
const landscape = require("../assets/images/icon_landscape.png");
const night = require("../assets/images/icon_night.png");
const water = require("../assets/images/icon_water.png");
export default {
  name: "announcement",
  props: ["type", "id", "userId", "uuid"],
  data() {
    return {
      userInfo: {},
      user: {},
      url: "",
      description: "",
      trackname: "",
      iconSrc: "",
      iconObj: {
        poiscan: poiscan,
        adventure: adventure,
        art: art,
        culture: culture,
        entertainment: entertainment,
        food: food,
        landscape: landscape,
        night: night,
        water: water
      },
      pageData: {}
    };
  },
  components: {
    Download,
    FooterCode,
    User
  },
  created() {
    this.getTrack();
    this.pageData = {
      type: this.type,
      id: this.id
    };
    // this.share();
  },
  computed: {},
  methods: {
    getTrack() {
      getTrack({ id: this.id })
        .then(res => {
          if (res.data.code == 200) {
            let data = res.data;
            let { user, address,poiProfileDTO, imageList, body } = data.root;
            this.userInfo = user || {};
            this.getUserInfo()
            this.url = imageList[0].url || poiProfileDTO.strokeCover.url;
            this.description = (body == 'undefined' || body == '') ? '来不及说的什么光顾着玩了' : body;
            this.trackname = address;
            var img = '';
            if (poiProfileDTO){
                img =
              (poiProfileDTO.mainDimension != "" &&
              poiProfileDTO.mainDimension != null)
                ? this.iconObj[poiProfileDTO.mainDimension]
                : false;
            } else {
                img= false;
            }
            this.iconSrc = img;
            
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    share() {
      wx.getShare({
        title: this.trackname,
        link: window.location.href,
        imgUrl: this.url,
        desc: this.description
      });
    },
    getUserInfo() {
      // console.log(this.userId)
      getUserInfo({
        openId: this.userId
      })
        .then(res => {
          //   console.log(res);
          if (res.data.code == 200) {
            this.user = res.data.root;
          } else {
            this.user = this.userInfo;
          }
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  destroyed() {}
};
</script>
