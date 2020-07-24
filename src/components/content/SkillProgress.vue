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
    .prog-bar{
        margin:0px 0px 80px 0;
    }
</style>