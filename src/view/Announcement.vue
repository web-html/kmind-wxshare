<template>
    <div class="share-wrap">
        <download :page-data="pageData"></download>
        <div class="banner">
            <img v-if="!url" src="../assets/images/hero.jpg">
            <img v-if="url" :src="url">
        </div>
        <div class="share-dowmm">
            <user :my-value="user"></user>
            <div class="content">
                <p class="cont-title">{{theme}}</p>
                <dl flex="cross:center" class="cont-biao">
                    <dt>
                        <img :src="avatar">
                    </dt>
                    <dd>{{name}}</dd>
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
import request from "../utils/request.js";
import { getNotice,getUserInfo } from "../api/route.js";
export default {
  name: "announcement",
  props: ["type", "id", "userId", "uuid"],
  data() {
    return {
      user: {},
      theme: "",
      url: "",
      name: "",
      avatar: "",
      pageData:{}
    };
  },
  components: {
    Download,
    FooterCode,
    User
  },
  created() {
    this.getNotice();
    this.pageData = {
      type: this.type,
      id: this.id
    };
    this.getUserInfo()
  },
  computed: {},
  methods: {
    getNotice() {
      let params = { noticeId: this.id };
      getNotice(params).then(res => {
        let data = res.data;
        let { user, club, theme, picture } = data.root;
        // this.user = user;
        this.theme = theme;
        this.url = picture.length > 0 ? picture[0] : false;
        this.name = club.name;
        this.avatar = club.avatar;
      });
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


