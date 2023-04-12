import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
} from "@mui/material";
import React from "react";

const PokemonSkeleton = () => {
  return (
    <Grid item xs={2} sm={4} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <>
            <CardMedia style={{ padding: 10 }}>
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
                <Skeleton variant="rectangular" width={200} height={135} />
              </div>
            </CardMedia>

            <CardContent sx={{ padding: "0px 10px" }}>
              <Skeleton variant="rectangular" width={70} height={20} />
              <Skeleton
                sx={{ mt: 1 }}
                variant="rectangular"
                width={120}
                height={20}
              />
            </CardContent>
            <CardActions sx={{ marginBottom: 1, padding: "10px" }}>
              <Skeleton variant="rounded" width={120} height={20} />
            </CardActions>
          </>
        </CardActionArea>
      </Card>
    </Grid>
    // <Stack
    //   sx={{ background: "gray" }}
    //   justifyContent="center"
    //   alignItems="flex-start"
    //   spacing={1}
    // >
    //   {/* For variant="text", adjust the height via font-size */}

    //   {/* For other variants, adjust the size with `width` and `height` */}
    //   <Skeleton variant="rectangular" width={200} height={140} />
    //   <Skeleton variant="rectangular" width={80} height={20} />
    //   <Skeleton variant="rectangular" width={120} height={20} />
    //   <Skeleton variant="rounded" width={120} height={20} />
    // </Stack>
  );
};

export default PokemonSkeleton;
