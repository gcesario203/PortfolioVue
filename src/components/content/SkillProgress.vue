<template>
    <div class="prog-bar">
        <Progress 
        :value='percentage'
        :radius='100'
        :transitionDuration='duration'
        strokeColor="#e9e500"
        >
            <template>
                <h2>{{skillName}}</h2>
                <h3>{{percentage}}%</h3>
            </template>
        </Progress>
    </div>
</template>

<script>
import Progress from 'easy-circular-progress'
export default {
    name:'SkillProgress',
    components:{Progress},
    props:['skillName','percentage','duration']
}
</script>

<style>

</style>