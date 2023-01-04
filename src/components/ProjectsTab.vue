<template>
    <base-container>
        <h2>Projects</h2>
        <div v-if="projects.length == 0">Please select a consultant</div>
        <ul v-if="projects.length > 0">
            <ProjectItem v-for="project in projects" :key="project.id" :company="project.company"
                :description="project.description" :year="project.year" />
        </ul>
    </base-container>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
export default {
    props: ['projects'],
    components: {
        ProjectItem
    },
    setup() { }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>