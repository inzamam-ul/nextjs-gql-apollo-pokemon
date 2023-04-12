import { useLazyQuery } from "@apollo/client";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { EVOLUTION_QUERY } from "../queries/queries";
import EvolutionItem from "./EvolutionItem";
import EvolutionSkeleton from "./skeleton/EvolutionSkeleton";

const PokemonEvolutions = ({ pokemon }) => {
  const [getEvolutions, { loading, data }] = useLazyQuery(EVOLUTION_QUERY, {
    variables: { id: pokemon.id, name: pokemon.name },
  });

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    getEvolutions();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(data?.pokemon);
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Show Evolutions
      </Button>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Evolutions"}</DialogTitle>
        <DialogContent>
          <Stack
            divider={
              <ArrowForwardIosIcon sx={{ fontSize: 50, color: "#73abff" }} />
            }
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {loading && (
              <>
                <EvolutionSkeleton />
                <ArrowForwardIosIcon sx={{ fontSize: 50, color: "#73abff" }} />
                <EvolutionSkeleton />
                <ArrowForwardIosIcon sx={{ fontSize: 50, color: "#73abff" }} />
                <EvolutionSkeleton />
              </>
            )}
            {!loading &&
              data &&
              [pokemon, ...data.pokemon.evolutions].map((evolution, index) => (
                <React.Fragment key={index}>
                  <EvolutionItem evolution={evolution} />
                </React.Fragment>
              ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="error"
            variant="outlined"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PokemonEvolutions;
