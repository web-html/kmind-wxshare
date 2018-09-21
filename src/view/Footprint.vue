<template>
    <div class="share-wrap footprint">
        <download></download>
        <div class="banner">
            <img src="">
        </div>
        <div class="share-dowmm">
            <user :my-value="user"></user>
            <div class="content">
                <p class="cont-title">越野跳蚤之家版面改版的几项重点说明</p>
                <dl flex="cross:center" class="cont-biao">
                    <dt></dt>
                    <dd>老城隍庙旅游区</dd>
                </dl>
            </div>
            <footer-code></footer-code>
        </div>
    </div>
</template>

<script>
    import Download from '../common/Download';
    import User from '../common/User';
    import FooterCode from '../common/FooterCode';
    import {getTrack} from "@/api/route"
    export default {
        name: 'announcement',
        data(){
            return {
                user:{},

            }
        },
        components:{
            Download,
            FooterCode,
            User
        },
        created(){
            this.getTrack()
        },
        computed: {
        },
        methods: {
            getTrack(){
                getTrack({'id': '5ba396f3ee38fb4c8900bf57'}).then(res=>{
                    let data = res.data;
                    let {user,poiCount,strokeCover,totalDay,totalDistance,theme} = data.root;
                    this.user = user || {}
                    this.url = strokeCover.url;
                    this.totalDay = totalDay;
                    this.totalDistance = totalDistance;
                    this.theme = theme;
                    this.poiCount = poiCount;
                    
                }).catch(res=>{
                    console.log(res)
                })
            }
        },
        destroyed(){

        }
    }
</script>
