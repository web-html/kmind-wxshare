<template>
    <div class="share-wrap footprint">
        <download></download>
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
export default {
  name: "announcement",
  props: ["type", "id", "userId", "uuid"],
  data() {
    return {
      user: {},
      url: "",
      description: "",
      trackname: "",
      iconSrc: ""
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
          console.log(res);
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
          console.log(this.iconSrc);
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
