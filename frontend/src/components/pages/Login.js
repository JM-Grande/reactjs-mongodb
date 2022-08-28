import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  marginTop: ".5em",
  color: "gray",
});

const Login = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: "90%", sm: "80%", md: "50%" },
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" textAlign="center" mt="2em" mb="2em">
          Log In
        </Typography>
        <Stack
          sx={{
            maxWidth: { xs: "90%", sm: "80%" },
            margin: "0 auto",
            border: ".5px solid gray",
            padding: "3em",
            borderRadius: "30px",
          }}
        >
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />

          <Button
            sx={{
              maxWidth: { xs: "100%", sm: "50%", md: "25%" },
              marginTop: "2em",
              backgroundColor: "black",
              color: " white",
              padding: "1em",
              "&:hover": { color: " black", border: ".5px solid gray" },
            }}
          >
            Log In
          </Button>
          <StyledLink to="/Forgot">
            <Typography variant="span">Forgot Password ?</Typography>
          </StyledLink>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
