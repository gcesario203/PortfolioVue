<template>
  <div class="navigator">
    <li>
      <router-link to="/sobremim">
        <i class="fa fa-home fa-2x"></i>
      </router-link>
    </li>
    <li>
      <router-link to="/skills">
        <i class="fa fa-code fa-2x"></i>
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "Navigator"
};
</script>

<style>
.navigator {
  grid-area: Navigator;
  background-color: rgb(46, 44, 44);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.navigator a{
    position: relative;
    left: 0.5vw;
    text-align: center;
    color: white;
    transition: 500ms;
}

.navigator a:hover,
.navigator a:focus{
    color: #e9e500;
}
</style>