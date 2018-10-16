<template>
    <div class="h5-share-wrapper" style="height: 100%;overflow-y: auto">
        
        <footprint  v-if="type == 'track'" 
            :type="type" :id="id" :userId="userId" :uuid="uuid" ></footprint>
        <journey v-if="type == 'travel' || type == 'poi' || type == 'temp'"
            :type="type" :id="id" :userId="userId" :uuid="uuid" ></journey>
        <announcement v-if="type == 'club'" 
            :type="type" :id="id" :userId="userId" :uuid="uuid" ></announcement>
    </div>
</template>

<script>
import Announcement from "./Announcement"; //公告
import Footprint from "./Footprint"; //足迹
import Journey from "./Journey"; //行程&POI
import { setTitle } from "../utils/operation";
export default {
  name: "share",
  data() {
    return {
      type: "",
      id: "",
      userId: "",
      uuid: ""
    };
  },
  components: {
    Announcement,
    Footprint,
    Journey
  },
  created() {
    this.getQuery();
    // setTitle('')
  },
  computed: {},
  methods: {
    getQuery() {
      this.type = this.$route.query.type;
      this.id = this.$route.query.id;
      this.userId = this.$route.query.userId;
      this.uuid = this.$route.query.uuid;
    }
  },
  destroyed() {}
};
</script>
