<template>
  <div class="side-profile">
    <h2>Gabriel Cesario</h2>
    <h2>Desenvolvedor web</h2>
    <h3>Aspirante em desenvolvimento web e eterno aprendiz na jornada da vida</h3>
    <div class="social-links">
      <li>
        <a href="https://www.linkedin.com/in/gabriel-cesario-04784ab2/" target="_blank">
          <i class="fa fa-linkedin fa-3x"></i>
        </a>
      </li>
      <li>
        <a href="mailto:cesario203@outlook.com">
          <i class="fa fa-envelope fa-3x"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/gcesario203" target="_blank">
          <i class="fa fa-github fa-3x"></i>
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideProfile"
};
</script>

<style>
.side-profile {
  padding: 30px;
  color: white;
  text-align: center;
  background-color: rgb(46, 44, 44);
  font-weight: 100;
  grid-area: SideProfile;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.side-profile .social-links {
  display: flex;
  list-style: none;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.side-profile .social-links a{
    color: white;
    transition: 500ms;
}

.side-profile .social-links a:hover,
.side-profile .social-links a:focus{
    color: #e9e500;
}
</style>