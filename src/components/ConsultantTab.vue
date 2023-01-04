<template>
    <base-container>
        <h2>Consultants</h2>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <ul v-else-if="result && result.consultants">
            <ConsultantItem v-for="consultant of result.consultants" :key="consultant.id" :id="consultant.id"
                :name="consultant.name" @list-projects="$emit('list-projects', $event)" />
        </ul>
    </base-container>
</template>

<script>
import ConsultantItem from './ConsultantItem.vue';
import { useQuery } from '@vue/apollo-composable'
import { ALL_CONSULTANTS_QUERY } from '../graphql/queries'

export default {
    components: {
        ConsultantItem,
    },
    emits: ['list-projects'],
    setup() {
        // load list of all consultants, also obtain loading status and error messages
        const { result, loading, error } = useQuery(ALL_CONSULTANTS_QUERY)
        return {
            result,
            loading,
            error
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>