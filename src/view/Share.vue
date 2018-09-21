<template>
    <div class="h5-share-wrapper">
        <announcement v-if="type == 'club'" :type="type" ></announcement>
        <footprint  v-if="type == 'track'" :type="type"></footprint>
        <journey v-if="type == 'travel' || type == 'poi' || type == 'temp'" :type="type"></journey>
    </div>
</template>

<script>
    import Announcement from './Announcement';//公告
    import Footprint from './Footprint';//足迹
    import Journey from './Journey';//行程&POI
    export default {
        name: 'share',
        data(){
            return {
            	type:''
            }
        },
        components:{
            Announcement,
            Footprint,
            Journey
        },
        created(){
            this.getQuery();
        },
        computed: {
        },
        methods: {
            getQuery(){
            	this.type = this.$route.query.type;
            }
        },
        destroyed(){

        }
    }
</script>
