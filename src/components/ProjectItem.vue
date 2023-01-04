<template>
    <li>
        <h3>{{ company }}</h3>
        <p>{{ year }}</p>
        <p>{{ description }}</p>
    </li>
</template>

<script>
export default {
    props: ['company', 'description', 'year']
}
</script>

<style scoped>
li {
    background-color: #00006b;
    color: white;
    padding: 0.5rem;
    margin: 1rem 0;
}

li h3 {
    margin: 0;
}
</style>