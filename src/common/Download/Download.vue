<template>
    <div flex="main:justify" class="download">
        <div flex="cross:center" class="d-left">
            <div class="d-logo">
                <img src="../../assets/images/logo.png">
            </div>
            <dl class="d-text">
                <dt>出去-你的专属出行智能</dt>
                <dd>世界很大 我要出去</dd>
            </dl>
        </div>
        <div flex="cross:center" class="d-right">
            <button @click.stop="download">下载体验</button>
        </div>
    </div>
</template>
<script>
    import './download.less';
    // import $device from '../../tools/device';
    import {AppLink} from '../../utils/arouse';
    // require('../../tools/arouse');
    export default {
        name: 'download',
        props: ['data'],
        data(){
            return {
                
            }
        },
        props: {
            pageData: Object
        },
        components: {

        },
        created(){      
            // console.log(AppLink)
        },
        methods: {
            download(){
                console.log(this.pageData)
                let config = {
                    // 和app协定的scheme
                    schema: "AnyGo.1000mind://anygo/" + this.pageData.type + "/" + this.pageData.id,
                    // iOS下的App在appstore的地址
                    appstore: 'http://itunes.apple.com/app/id1345961107?mt=8',
                    // 应用宝的地址
                    yyb: '//a.app.qq.com/o/simple.jsp?pkgname=com.mtime.lookface&fromcase=40002'
                };
                // alert(config.schema)
                let applink = new AppLink(config)
                applink.open();
            }
        },
        watch: {
            progress(){
                this.draw();
            }
        },
        mounted(){
            /*this.canvas = document.getElementById('canvas');
            this.canvas.width = this.width * 2;
            this.canvas.height = this.width * 2;
            this.context = this.canvas.getContext('2d');
            this.context.scale(2, 2);
            this.draw();*/
        },
        destroyed(){

        }
    }
</script>
