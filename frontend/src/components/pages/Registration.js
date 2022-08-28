import React from "react";
import { Box, Stack, Typography, TextField } from "@mui/material";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Button,
} from "@mui/material";

const Registration = () => {
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
          Sign Up
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
          <TextField
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
          />
          <TextField id="standard-basic" label="Last Name" variant="standard" />

          <Stack mt="1em" maxWidth="20%">
            <Typography variant="h7">Sex:</Typography>
            <RadioGroup>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Stack>

          <Stack sx={{ maxwidth: { xs: "100%", sm: "80%", md: "60%" } }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I Agree with the Terms & Condition"
              />
            </FormGroup>
          </Stack>

          <Button
            sx={{
              maxWidth: { xs: "100%", sm: "50%", md: "25%" },
              margin: "1em 0",
              backgroundColor: "black",
              color: " white",
              padding: "1em",
              "&:hover": { color: " black", border: ".5px solid gray" },
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Registration;
