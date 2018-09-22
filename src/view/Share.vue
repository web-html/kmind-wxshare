<template>
    <div class="h5-share-wrapper" style="height: 100%;overflow-y: auto">
        <announcement v-if="type == 'club'" 
            :type="type" :id="id" ></announcement>
        <footprint  v-if="type == 'track'" 
            :type="type" :id="id"></footprint>
        <journey v-if="type == 'travel' || type == 'poi' || type == 'temp'"
            :type="type" :id="id"></journey>
    </div>
</template>

<script>
    import Announcement from './Announcement';//公告
    import Footprint from './Footprint';//足迹
    import Journey from './Journey';//行程&POI
    import { setTitle } from '../utils/operation';
    export default {
        name: 'share',
        data(){
            return {
            	type:'',
                id:''
            }
        },
        components:{
            Announcement,
            Footprint,
            Journey
        },
        created(){
            this.getQuery();
            setTitle('1234')
        },
        computed: {
        },
        methods: {
            getQuery(){
                this.type = this.$route.query.type;
            	this.id = this.$route.query.id;
            }
        },
        destroyed(){

        }
    }
</script>
