<template>
    <div class="modal">
        <div class="modal-content">
            <div class="tit">
             <p>点击右上角“···”，</p>
             <p>选择“在Safari打开”</p>
            </div>
            <div class="modal-btn">
                知道了
            </div>
        </div>
    </div>
</template>
<script>
import "./modal.less";
import { AppLink } from "../../utils/arouse";
export default {
  name: "modal",
  props: ["data"],
  data() {
    return {};
  },
  props: {
    pageData: Object
  },
  components: {},
  created() {
    // console.log(AppLink)
  },
  methods: {
    //  判断是否在微信浏览器中打开
    is_weixn() {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("micromessenger") > -1) {
        alert("请在Safari浏览器中打开");
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    progress() {
      this.draw();
    }
  },
  mounted() {},
  destroyed() {}
};
</script>
