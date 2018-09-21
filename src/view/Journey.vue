<template>
    <div class="share-wrap journey">
        <download></download>
        <div class="banner">
            <img :src="url">
        </div>
        <div class="share-dowmm">
            <user :my-value="user"></user>
            <div class="content">
                <p class="cont-title">{{theme}}</p>
                <p class="cont-desc">{{totalDay}}天 | {{poiCount}}地点 | {{totalDistance}}公里</p>
            </div>
            <footer-code></footer-code>
        </div>
    </div>
</template>

<script>
    import Download from '../common/Download';
    import User from '../common/User';
    import FooterCode from '../common/FooterCode';
    import { getPoiDetail , getTravelDetail, getTempDetail } from "@/api/route"
    export default {
        name: 'journey',
        props:['type','id'],
        data(){
            return {
                url:'',
                totalDay:'',
                totalDistance:"",
                theme:'',
                poiCount:'',
                user:{},
            }
        },
        components:{
            Download,
            FooterCode,
            User
        },
        created(){
            if(this.type == 'travel'){
                this.getTravelDetail();
            }
            
            if(this.type == 'poi'){
                this.getPoi();
            }
            if(this.type == 'temp'){
                this.getTemp();
            }
        },
        computed: {
        },
        methods: {
            getTravelDetail(){
                getTravelDetail({'travelId': '5ba488481dac530a304f777f'}).then(res=>{
                    let data = res.data;
                    let {user,poiCount,strokeCover,totalDay,totalDistance,theme} = data.root;
                    this.url = strokeCover.url;
                    this.totalDay = totalDay;
                    this.totalDistance = totalDistance;
                    this.theme = theme;
                    this.poiCount = poiCount;
                    this.user = user
                }).catch(res=>{
                    console.log(res)
                })
            },
            getPoi(){
                getPoiDetail({
                    objectId:this.id
                }).then(res => {
                    console.log(res)
                })
            },
            getTemp(){
                getTempDetail({
                    id:this.id
                }).then(res => {
                    console.log(res);
                })
            }
        },
        destroyed(){

        }
    }
</script>
