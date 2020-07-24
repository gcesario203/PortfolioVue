<template>
  <div class="repo">
      <div class="projetos" v-for="projeto in projetos" :key="projeto.id">
          <div class="card">
              <h2 class="card-title">{{projeto.name}}</h2>
              <p class="card-content">{{projeto.description}}</p>
              <a :href="projeto.link" target="_blank" rel="Link do projeto"><i class="fa fa-arrow-right"></i></a>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
const url = 'https://api.github.com/users/gcesario203/repos'
export default {
    name:'Repo',
    data: function(){
        return{
            projetos:[]
        }
    },
    methods:{
        getRepositories(){
            axios.get(url).then(res=>{
                this.projetos = res.data.map(item=>{
                    return {name:item.name,description:item.description,link:item.html_url}
                })
            })
        }
    },
    mounted(){
        this.getRepositories()
    }
}
</script>

<style>
    .repo{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
        margin-top: 10vh;
    }

    .projetos{
        margin-bottom: 2vh;
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .card{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .card-title{
        padding:5px;
        width: 100%;
        word-wrap: break-word;
        background-color: #e9e500;
        color: black;
        transition: 500ms;
    }

    .card-content{
        font-size: 1.3rem;
        border-radius: 0px 0px 5px 5px;
        color: black;
        background: white;
        margin-bottom: 10px;
        padding: 20px;
    }

    .card a{
        margin-top: 0.5vh;
        color: black;
        background-color: #e9e500;
        align-self: center;
        font-size: 1.5rem;
        border-radius: 8px;
        text-decoration: none;
        width: 100px;
        transition: 500ms;
    }

    .card a:hover{
        background-color:#ffff4a;
        color: white;
    }

    .card i{
        color: black;
    }

@media (max-width: 600px) {
    .repo{
        display: block;
    }

    .card{
        width: auto;
        margin-left: 200%;
        margin-bottom: 40px;
    }
}
</style>