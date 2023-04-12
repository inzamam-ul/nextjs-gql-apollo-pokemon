import { NetworkStatus, useQuery } from "@apollo/client";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ALL_POKEMON_QUERY } from "../queries/queries";
import { handleColor, handleVariant } from "../utils/utils";
import ErrorMessage from "./ErrorMessage";
import PokemonSkeleton from "./skeleton/PokemonSkeleton";

export default function PokemonList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POKEMON_QUERY,
    {
      variables: 60,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );
  const { pokemons } = data;

  const router = useRouter();
  const { page } = router.query;
  const pageNumber = parseInt(page || 1, 10);
  const loadingMorePokemons = networkStatus === NetworkStatus.fetchMore;

  const loadMorePosts = (pageNumber = null) => {
    fetchMore({
      variables: {
        first: pageNumber ? 20 * pageNumber : pokemons.length + 20,
      },
    });
  };

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading && !loadingMorePokemons) return <div>Loading</div>;

  const [currentPokemons, setCurrentPokemons] = useState(
    pokemons.slice((pageNumber - 1) * 20, pageNumber * 20)
  );

  useEffect(() => {
    if (page) {
      if (pokemons.length <= 20 * pageNumber && pokemons.length >= 60) {
        console.log("loadMorePosts", page);
        loadMorePosts(pageNumber);
        return;
      }
    }
  }, [page]);

  useEffect(() => {
    console.log("pokemons.length", pokemons.length);
    console.log(page);
    if (pokemons.length >= 20 && pageNumber) {
      console.log("updating");
      setCurrentPokemons(
        pokemons.slice((pageNumber - 1) * 20, pageNumber * 20)
      );
    }
  }, [pokemons, pageNumber]);

  return (
    <Container maxWidth="md" sx={{ flexGrow: 1, marginTop: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {loading && Array.from(Array(20)).map((_, i) => <PokemonSkeleton />)}

        {currentPokemons.map((pokemon, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <Link legacyBehavior href={`/pokedex/${pokemon.name}`}>
                <CardActionArea>
                  <>
                    <CardMedia style={{ padding: 10 }} title={pokemon.name}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={pokemon.image}
                          alt={pokemon.name}
                          height={130}
                          width={130}
                        />
                      </div>
                    </CardMedia>

                    <CardContent sx={{ padding: "0px 15px" }}>
                      <Typography
                        style={{ fontWeight: "bold", color: "gray" }}
                        variant="body2"
                        component="p"
                      >
                        #{pokemon.number}
                      </Typography>
                      <Typography variant="h6" component="div">
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ marginBottom: 1, padding: 1 }}>
                      {pokemon.types.map((type, index) => (
                        <Chip
                          key={index}
                          size="small"
                          color={handleColor(type)}
                          variant={handleVariant(type)}
                          label={type}
                        />
                      ))}
                    </CardActions>
                  </>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      {!currentPokemons.length && !loading && (
        <Typography
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h5"
          component="div"
        >
          No more pokemon available
        </Typography>
      )}

      <Pagination
        sx={{
          marginTop: 3,
          marginBottom: 3,
          display: "flex",
          justifyContent: "center",
        }}
        page={pageNumber}
        count={10}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            href={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </Container>
  );
}
