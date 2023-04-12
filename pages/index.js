import App from "../components/App";
import PokemonList from "../components/PokemonList";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import { ALL_POKEMON_QUERY } from "../queries/queries";

const IndexPage = () => (
  <App>
    <PokemonList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POKEMON_QUERY,
    variables: {
      first: 60,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default IndexPage;
