import { Box, Chip, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import React from "react";
import { handleColor, handleVariant } from "../utils/utils";
const EvolutionItem = ({ evolution }) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      <Avatar
        alt={evolution.name}
        sx={{
          width: 90,
          height: "auto",
          border: "5px solid #73abff",
          padding: "15px",
          background: "white",
        }}
      >
        <Image src={evolution.image} height={90} width={90} priority />
      </Avatar>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontSize: "17px" }}
          component="div"
        >
          {evolution.name}
        </Typography>
        &nbsp;
        <Typography
          sx={{ color: "gray", fontSize: "17px" }}
          variant="h6"
          gutterBottom
        >
          #{evolution.number}
        </Typography>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        {evolution.types.map((type, index) => (
          <Chip
            key={index}
            size="small"
            color={handleColor(type)}
            variant={handleVariant(type)}
            label={type}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default EvolutionItem;
