import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { handleColor, handleVariant } from "../utils/utils";

const PokemonDetails = ({ pokemon }) => {
  return (
    <Grid md={6} my={2} item xs={12}>
      <Grid item container xs={12}>
        <Typography gutterBottom variant="h5">
          {pokemon.name}
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={{ background: "#73abff", padding: 3, borderRadius: 3 }}
      >
        <Grid md={6} item container direction="column" spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              <Typography variant="h6" color="white" component="div">
                Height
              </Typography>
              {pokemon.height.maximum}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <Typography variant="h6" color="white" component="div">
                Weight
              </Typography>
              {pokemon.weight.maximum}
            </Typography>
          </Grid>
        </Grid>
        <Grid md={6} item container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h6" component="div">
              <Typography variant="h6" color="white" component="div">
                Classification
              </Typography>
              {pokemon.classification}
            </Typography>
            <Typography variant="h6" component="div">
              <Typography variant="h6" color="white" component="div">
                Flee Rate
              </Typography>
              {pokemon.fleeRate}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography variant="h6" component="div">
          Type
        </Typography>
        <Box mt={1}>
          {pokemon.types.map((type, index) => (
            <Chip
              sx={{ marginRight: 1 }}
              key={index}
              size="small"
              color={handleColor(type)}
              variant={handleVariant(type)}
              label={type}
            />
          ))}
        </Box>
      </Box>
      <Box mt={2}>
        <Typography variant="h6" component="div">
          Resistant
        </Typography>
        <Box mt={1}>
          {pokemon.resistant.map((type, index) => (
            <Chip
              sx={{ marginRight: 1 }}
              key={index}
              size="small"
              color={handleColor(type)}
              variant={handleVariant(type)}
              label={type}
            />
          ))}
        </Box>
      </Box>
      <Box mt={2}>
        <Typography variant="h6" component="div">
          Weaknesses
        </Typography>
        <Box mt={1}>
          {pokemon.weaknesses.map((type, index) => (
            <Chip
              sx={{ marginRight: 1 }}
              key={index}
              size="small"
              color={handleColor(type)}
              variant={handleVariant(type)}
              label={type}
            />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default PokemonDetails;
