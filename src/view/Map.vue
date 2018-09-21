<template>
<div style="padding-bottom:.8rem;">
  
</div>
</template>

<script>
let u = navigator.userAgent
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const queryList = require('../utils/queryList.js')
export default {
  name: 'map',
  data () {
    return {

    };
  },
  beforeCreate () {
    let gzhCode = this.$route.query.gzhCode || ''
    if (gzhCode) this.$sessionStorage('gzhCode', gzhCode)
    let signId = this.$route.query.signId || ''
    if (signId) this.$localStorage('signId', signId)
    
  },
  created () {
    
  },
  methods: {
    
  },
  components: {  }
}
</script>
