import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import BaseContainer from "./components/UI/BaseContainer.vue";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:9000/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.component("base-container", BaseContainer);

app.mount("#app");
