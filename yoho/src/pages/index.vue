<template>
  <div class="index">
      <YohoHead></YohoHead>
      <foot></foot>
  </div>
</template>

<script>
import YohoHead from '@/components/Header'
import foot from '@/components/Footer'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    YohoHead,foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
