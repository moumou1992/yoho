<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
 /* margin-top: 60px;*/
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
body{
  font-size: 12px;
}
.center-cont{
    width: 1150px;
    margin-left: auto;
    margin-right: auto;
}
.clearfix::after{
    content: '';
    height: 0;
    display: block;
    clear: both;
}
</style>
