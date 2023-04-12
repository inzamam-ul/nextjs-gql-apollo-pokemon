import styled from "@emotion/styled";
import { ButtonBase, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
const Img = styled(Image)({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const PokemonImage = ({ image }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      p={3}
      item
      md={6}
      sm={12}
    >
      <ButtonBase style={{ background: "gray" }}>
        <Img
          alt="avatar"
          style={{ height: "auto", width: "auto" }}
          height={400}
          width={400}
          src={image}
          priority
        />
      </ButtonBase>
    </Grid>
  );
};

export default PokemonImage;
