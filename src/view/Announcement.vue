<template>
    <div class="share-wrap">
        <download></download>
        <div class="banner">
            <img v-if="!url" src="../assets/images/hero.jpg">
            <img v-if="url" :src="url">
        </div>
        <div class="share-dowmm">
            <user :my-value="user"></user>
            <div class="content">
                <p class="cont-title">{{theme}}</p>
                <dl flex="cross:center" class="cont-biao">
                    <dt></dt>
                    <dd>{{name}}</dd>
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
    import request from '../utils/request.js';
    import {getNotice} from '../api/route.js'
    export default {
        name: 'announcement',
        data(){
            return {
                user:{},
                theme:'',
                url:'',
                name:''
            }
        },
        components:{
            Download,
            FooterCode,
            User
        },
        created(){
            // this.getData();
            this.getNotice()
        },
        computed: {
        },
        methods: {
            getData(){
                console.log(request)
                request.get('/api/app/system/feedback/list').then(res => {

                })
                // $api.post('/app/club/look/notice').then(res =>{
                //     console.log(res);
                // })
            },
            getNotice(){
                let  params = {'noticeId':'5ba453f01dac53696449ae10'}
                getNotice(params).then(res=>{
                    let data = res.data;
                    let {user,club,theme,picture} = data.root;
                    this.user = user
                    this.theme = theme;
                    this.url = picture.length > 0 ? picture[0]:false;
                    this.name = club.name
                    
                })
            }
        },
        destroyed(){

        }
    }
</script>


