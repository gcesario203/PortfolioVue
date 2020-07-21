<template>
  <div id="app">
    <SideProfile></SideProfile>
    <Content></Content>
    <Navigator></Navigator>
  </div>
</template>

<script>
import SideProfile from './components/template/SideProfile'
import Content from './components/template/Content'
import Navigator from './components/template/Navigator'

export default {
  name: 'App',
  components: {SideProfile,Content,Navigator}
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  #app{
    display: grid;
    height: 100vh;
    grid-template-columns: 350px 1fr 50px;
    grid-template-areas:
      "SideProfile Content Navigator" 
    ;
  }
</style>
