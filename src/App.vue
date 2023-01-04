<template>
  <main>
    <ConsultantTab @list-projects="getProjects" />
    <ProjectsTab :projects="projects" />
  </main>
</template>

<script>
import ConsultantTab from "./components/ConsultantTab.vue"
import ProjectsTab from "./components/ProjectsTab.vue"

import { PROJECTS_OF_CONSULTANT_QUERY } from "./graphql/queries"
import { useQuery } from "@vue/apollo-composable"
import { ref, computed } from "vue"

export default {
  components: {
    ConsultantTab,
    ProjectsTab,
  },

  setup() {

    const consultantId = ref(0)
    const enableFetch = ref(false)

    // useQuery cannot be used inside functions, thus it is defined here, but disabled ({enable:false} in third argument)
    // only when calling the getProjects function, it will fetch the data
    const { result } = useQuery(PROJECTS_OF_CONSULTANT_QUERY, { consultantId: consultantId }, { enabled: enableFetch })

    function getProjects(uid) {
      consultantId.value = uid
      enableFetch.value = true
    }

    // extract projects array from the result, specify empty array as default value
    const projects = computed(() => result.value?.consultant.projects ?? [])

    // watch(projects, function (value) {
    //   console.log(value)
    // })

    return {
      getProjects,
      projects
    }
  }
}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}

button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
