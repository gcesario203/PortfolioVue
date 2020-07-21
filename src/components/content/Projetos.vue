<template>
  <div class="projects">
      <h1>Projetos</h1>
      <Repo></Repo>
  </div>
</template>

<script>
import Repo from '../github/Repo'

export default {
    name:'Projects',
    components:{Repo}
}
</script>

<style>

</style>