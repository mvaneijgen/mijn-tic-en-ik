// Run the following query add the result to '@/apollo/client-configs/schema.json' (strip `data:` if it is on there)
// query {
//   __schema {
//     types {
//       name
//       kind
//       possibleTypes {
//         name
//         description
//       }
//     }
//   }
// }
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import schema from '@/apollo/client-configs/schema.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema
})

export default ({ req, app }) => {
  return {
    httpEndpoint: 'https://huge-orca-10.hasura.app/v1/graphql',
    errorHandler: '@/plugins/apollo-error-handler.js',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}
