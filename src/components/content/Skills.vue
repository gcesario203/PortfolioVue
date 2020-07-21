<template>
    <div class="skills">
        <div class="progress-container">
            <SkillProgress skillName='HTML' :duration='500' :value='70'></SkillProgress>
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

</style>