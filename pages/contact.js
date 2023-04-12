import { Box } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import * as React from "react";
import App from "../components/App";

const Img = styled(Image)({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Contact() {
  return (
    <App>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,

            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={4}>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  alt="avatar"
                  height={250}
                  width={250}
                  src="https://avatars.githubusercontent.com/u/74088759?v=4"
                />
              </ButtonBase>
            </Grid>
            <Grid md={8} item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Md Inzamamul Haque
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full Stack Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: inzamam.cu@gmail.com
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Portfolio: www.inzamam.me
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <Typography sx={{ color: "black" }} variant="body1">
                  {" "}
                  Skills:
                </Typography>{" "}
                React.js, Node.js, Next.js, GraphQL, Apollo, MongoDB, Express,
                Material UI, Tailwind CSS, Bootstrap, Linux, Nginx
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </App>
  );
}
