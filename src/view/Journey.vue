<template>
    <div class="share-wrap journey">
        <download :page-data="pageData"></download>
        <div class="banner">
            <img v-if="!url" src="../assets/images/hero.jpg">
            <img v-if="url" :src="url">
        </div>
        <div class="share-dowmm">
            <user v-if="user" :my-value="user"></user>
            <div class="content">
                <p class="cont-title">{{theme}}</p>
                <p class="cont-desc">{{desc}}</p>
            </div>
            <footer-code></footer-code>
        </div>
    </div>
</template>

<script>
import Download from "../common/Download";
import User from "../common/User";
import FooterCode from "../common/FooterCode";
import { getPoiDetail, getTravelDetail, getTempDetail,getUserInfo } from "@/api/route";
import { fetchShareInfo } from "@/api/weixin";
export default {
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
      pageData:{}
    };
  },
  components: {
    Download,
    FooterCode,
    User
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
    }
    this.getUserInfo();
  },
  computed: {},
  methods: {
    getTravelDetail() {
      getTravelDetail({ travelId: this.id })
        .then(res => {
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
        })
        .catch(res => {
          console.log(res);
        });
    },
    getPoi() {
      getPoiDetail({
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
      getTempDetail({
        id: this.id
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          let data = res.data;
          let {imageList, name, tagList , address} = data.root;
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
      getUserInfo({
        'openId': this.userId,
      })
        .then(res => {
        //   console.log(res);
          if (res.data.code == 200){
              this.user = res.data.root
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
