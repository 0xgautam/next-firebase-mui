import { Box } from "@mui/material";
import { NextPage } from "next";
import LoginForm from "@components/signup/LoginForm";

const Login: NextPage = () => {
  return (
    <Box sx={{ width: "25rem", margin: "auto" }}>
      <LoginForm />
    </Box>
  );
};

export default Login;
