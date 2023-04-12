import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";
import App from "../../components/App";

import PokemonDetails from "../../components/PokemonDetails";
import PokemonEvolutions from "../../components/PokemonEvolutions";
import PokemonImage from "../../components/PokemonImage";
import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import { ALL_POKEMON_QUERY, SINGLE_POKEMON_QUERY } from "../../queries/queries";

const Pokemon = ({ data }) => {
  const { pokemon } = data;
  const router = useRouter();
  const name = router.query.name;
  return (
    <App>
      <Container
        maxWidth="md"
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          &nbsp; &nbsp;
          <Typography sx={{ color: "gray" }} variant="h5" gutterBottom>
            #{pokemon.number}
          </Typography>
        </Box>
        <Paper
          sx={{
            margin: "auto",
            width: "100%",
            flexGrow: 1,
            p: 2,
            mb: 5,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={5}>
            <PokemonImage image={pokemon.image} />
            <PokemonDetails pokemon={pokemon} />
          </Grid>

          <PokemonEvolutions pokemon={pokemon} />
        </Paper>
      </Container>
    </App>
  );
};

export default Pokemon;

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: ALL_POKEMON_QUERY,
    variables: {
      first: 20,
    },
  });
  const paths = data.pokemons.map((pokemon) => ({
    params: { name: pokemon.name },
  }));

  // We'll pre-render only 20 paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: SINGLE_POKEMON_QUERY,
    variables: {
      name: params.name,
    },
  });
  return addApolloState(apolloClient, {
    props: { data },
    revalidate: 1,
  });
}
