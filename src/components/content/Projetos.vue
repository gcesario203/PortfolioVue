<template>
  <div class="projects">
    <h1>Projetos</h1>
    <Repo></Repo>
  </div>
</template>

<script>
import Repo from "../github/Repo";

export default {
  name: "Projects",
  components: { Repo }
};
</script>

<style>
.projects h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10vh;
}
</style>