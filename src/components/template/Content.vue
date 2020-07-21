<template>
  <div class="content">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
.content {
  grid-area: Content;
  overflow-y: auto;
  padding: 70px;
  background-color: rgb(65, 60, 60);
  color: white;
}
</style>