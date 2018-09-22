<template>
    <div class="share-wrap journey">
        <download></download>
        <div class="banner">
            <img :src="url">
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
    import Download from '../common/Download';
    import User from '../common/User';
    import FooterCode from '../common/FooterCode';
    import { getPoiDetail , getTravelDetail, getTempDetail } from "@/api/route"
    import { fetchShareInfo } from "@/api/weixin"
    export default {
        name: 'journey',
        props:['type','id','userId','uuid'],
        data(){
            return {
                url:'',
                totalDay:'',
                totalDistance:"",
                theme:'',
                poiCount:'',
                desc:'',
                user:null,
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
                getTravelDetail({'travelId': this.id}).then(res=>{
                    console.log(res)
                    if (res.data.code == 200){
                        let data = res.data;
                        let {user,poiCount,strokeCover,totalDay,totalDistance,theme} = data.root;
                        this.url = strokeCover.url;
                        this.totalDay = totalDay;
                        this.totalDistance = totalDistance;
                        this.theme = theme;
                        this.poiCount = poiCount;
                        this.user = user;
                        this.desc = `${totalDay}天 | ${poiCount}地点 | ${totalDistance}公里`;
                    }
                }).catch(res=>{
                    console.log(res)
                })
            },
            getPoi(){
                
                getPoiDetail({
                    'objectId':this.id
                }).then(res => {
                    console.log(res)
                    if (res.data.code == 200){
                        let data = res.data;
                        let {user,imageList,name,tagList} = data.root;
                        this.url = imageList[0].url;
                        this.theme = name;
                        this.user = user;
                        this.desc = tagList.join(' | ');
                    }
                })
            },
            getTemp(){
                getTempDetail({
                    'id':this.id
                }).then(res => {
                    console.log(res);
                })
            },
            getUserInfo(){
                fetchShareInfo({
                 'type': this.type,
                 'id': this.id,
                 'userId': this.userId,
                 'uuid': this.uuid
                }).then(res=>{

                }).catch(res=>{
                    
                })
            }
        },
        destroyed(){

        }
    }
</script>
