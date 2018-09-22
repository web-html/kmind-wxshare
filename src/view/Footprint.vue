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
                        <img :src="iconSrc">
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
import { getTrack } from "@/api/route";
import wx from "@/utils/wx";
const poiscan = require('../assets/images/icon_poiscan.png');
const adventure = require('../assets/images/icon_adventure.png');
const art = require('../assets/images/icon_art.png');
const culture = require('../assets/images/icon_culture.png');
const entertainment = require('../assets/images/icon_entertainment.png');
const food = require('../assets/images/icon_food.png');
const landscape = require('../assets/images/icon_landscape.png');
const night = require('../assets/images/icon_night.png');
const water = require('../assets/images/icon_water.png');
export default {
  name: "announcement",
  props: ["type", "id", "userId", "uuid"],
  data() {
    return {
      user: {},
      url: "",
      description: "",
      trackname: "",
      iconSrc: "",
      iconObj:{
          'poiscan':poiscan,
          'adventure':adventure,
          'art':art,
          'culture':culture,
          'entertainment':entertainment,
          'food':food,
          'landscape':landscape,
          'night':night,
          'water':water
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
    }
  },
  computed: {},
  methods: {
    getTrack() {
      getTrack({ id: this.id })
        .then(res => {
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
            this.user = user || {};
            this.url = poiProfileDTO.strokeCover.url;
            this.description = poiProfileDTO.description;
            this.totalDay = totalDay;
            this.totalDistance = totalDistance;
            this.trackname = poiProfileDTO.name;
            this.poiCount = poiCount;
            let img =
              poiProfileDTO.mainDimension != "" &&
              poiProfileDTO.mainDimension != null
                ? this.iconObj[poiProfileDTO.mainDimension]
                : this.iconObj[poiscan];
            this.iconSrc = img;
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    share(){
      wx.getShare({
        title:  'title',
        link: 'link',
        imgUrl: 'logo',
        desc: this.description
      });
    }
  },
  destroyed() {}
};
</script>
