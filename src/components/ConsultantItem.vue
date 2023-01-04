<template>
    <li>
        <h3>{{ name }}</h3>
        <button @click="viewProjects">View Projects</button>
    </li>
</template>

<script>
export default {
    props: ['id', 'name'],
    emits: ['list-projects'],
    setup(props, context) {
        function viewProjects() {
            context.emit('list-projects', props.id);
        }
        return {
            viewProjects,
        };

    },
}
</script>

<style scoped>
li {
    margin: 0.5rem 0;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border: 1px solid #ccc;
}

li h3 {
    margin: 0;
}
</style>