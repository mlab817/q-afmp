// import something here
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const client = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:8000/graphql'
})

const provider = new VueApollo({ defaultClient: client })

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default ({ app, Vue }) => {
  Vue.use(VueApollo)
  app.apolloProvider = provider
}
