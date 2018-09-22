<template>
    <div class="share-wrap footprint">
        <download></download>
        <img :src="iconIrems[0]">
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
const icon_poiscan = require('../assets/images/icon_poiscan.png');
const icon_adventure = require('../assets/images/icon_adventure.png');
const icon_art = require('../assets/images/icon_art.png');
const icon_culture = require('../assets/images/icon_culture.png');
const icon_entertainment = require('../assets/images/icon_entertainment.png');
const icon_food = require('../assets/images/icon_food.png');
const icon_landscape = require('../assets/images/icon_landscape.png');
const icon_night = require('../assets/images/icon_night.png');
const icon_water = require('../assets/images/icon_water.png');
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
      iconIrems:[icon_poiscan,icon_adventure,icon_art]
    };
  },
  components: {
    Download,
    FooterCode,
    User
  },
  created() {
    this.getTrack();
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
                ? `../assets/images/icon_${poiProfileDTO.mainDimension}.png`
                : "../assets/images/icon_poiscan.png";
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
        desc: ''
      });
    }
  },
  destroyed() {}
};
</script>
