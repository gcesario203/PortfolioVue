<template>
    <div class="skills">
        <h1>Skills</h1>
        <div class="progress-container">
            <SkillProgress skillName='HTML' :duration='500' :percentage='100'></SkillProgress>
            <SkillProgress skillName='CSS' :duration='1000' :percentage='100'></SkillProgress>
            <SkillProgress skillName='Javascript' :duration='1500' :percentage='100'></SkillProgress>
            <SkillProgress skillName='Vue.js' :duration='2000' :percentage='100'></SkillProgress>
        </div>
    </div>
</template>

<script>
import SkillProgress from './SkillProgress'
export default {
    name:'Skills',
    components:{SkillProgress}
}
</script>

<style>
    .skills{
        display: flex;
        flex-direction: column;
    }

    .skills h1{
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 20vh;
    }

    .skills .progress-container{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>