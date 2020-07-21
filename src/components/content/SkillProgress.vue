<template>
    <div class="prog-bar">
        <Progress 
        :value='percentage'
        :radius='55'
        :transitionDuration='duration'
        >
            <template>
                <h4>{{skillName}}</h4>
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