import { Box } from "@mui/material";
import { NextPage } from "next";
import SignupForm from "@components/auth/SignupForm";

const SignUp: NextPage = () => {
  return (
    <Box sx={{ width: "25rem", margin: "auto" }}>
      <SignupForm />
    </Box>
  );
};

export default SignUp;
