<template>
  <div class="navigator">
    <li>
      <router-link to="/">
        <i class="fa fa-home fa-2x"></i>
      </router-link>
    </li>
    <li>
      <router-link to="/skills">
        <i class="fa fa-code fa-2x"></i>
      </router-link>
    </li>
  <li>
      <router-link to="/projetos">
        <i class="fa fa-github fa-2x"></i>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}

.navigator a{
    color: white;
    transition: 500ms;
}

.navigator a:focus,
.navigator a:hover{
    color: #e9e500;
}

@media (max-width: 600px) {
  .navigator{
    flex-direction: row;
  }
    }
</style>