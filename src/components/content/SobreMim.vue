<template>
  <div class="bio">
    <h1>Sobre mim</h1>
    <div class="content-text">
      <p>
        Olá, meu nome é Gabriel Fernando Cesario, sou estudante do 6º semestre de Ciência da Computação da Faculdade de Americana(FAM) do período noturno.
        <br />Migrei do curso de Engenharia Mecânica por me sentir mais a vontade e feliz lidando com tecnologia. Conduzo meus estudos com auxilio de cursos online, vídeos e consulta em grupos e documentações de linguagens ou frameworks.
        <br />No momento procuro uma vaga de estágio para me auxiliar a crescer na área e alavancar meu desenvolvimento profissional.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreMim"
};
</script>

<style>
.bio {
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
}

.bio h1{
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20vh;
}

.bio .content-text{
    font-size: 1.5rem;
    line-height: 3rem;
    margin-bottom: 10vh;
}
@media (max-width: 600px) {
  .bio{
    padding: 0;
  }
    }
</style>