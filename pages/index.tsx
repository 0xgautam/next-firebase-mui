import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          component={"h1"}
          variant="overline"
          color="primary"
          sx={{ fontSize: "3rem" }}
        >
          NextJs Firebase Starter
        </Typography>
        <Typography
          variant="overline"
          sx={{ fontSize: "1.25rem", letterSpacing: "2px" }}
        >
          Using Typescript, MUI, React Firebase Hooks & Redux Toolkit
        </Typography>
      </Box>

      <Typography variant="overline" color={"primary"} sx={{ mt: "5rem" }}>
        Get Started by looking into the README
      </Typography>
    </Box>
  );
};

export default Home;
