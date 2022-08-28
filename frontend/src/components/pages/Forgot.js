import React from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

const Forgot = () => {
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
          Reset Password
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

          <Button
            sx={{
              maxWidth: { xs: "100%", sm: "50%", md: "40%" },
              marginTop: "2em",
              backgroundColor: "black",
              color: " white",
              padding: "1em",
              "&:hover": { color: " black", border: ".5px solid gray" },
            }}
          >
            Send Password to Email
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Forgot;
