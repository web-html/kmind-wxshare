<template>
    <div  class="user-wrap">
        <dl flex="cross:center">
            <dt>
                <img :src="myValue.avatar">
            </dt>
            <dd>
                <p class="p-name">{{myValue.nickName}}</p>
                <p class="p-desc">正在<span>出去APP</span>上看这个精彩内容</p>
            </dd>
        </dl>
    </div>
</template>
<script>
    import './user.less';
    export default {
        name: 'user',
        props: ['data'],
        data(){
            return {
                
            }
        },
        props: ["my-value"],
        components: {

        },
        created(){      
            
        },
        methods: {
            
        },
        mounted(){
        },
        destroyed(){

        }
    }
</script>
