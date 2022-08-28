import React from "react";
import {
  Box,
  Stack,
  Typography,
  styled,
  Button,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

// Styled Components

const MainBox = styled(Box)({
  margin: "0 auto",
  height: "100vh",
  paddingTop: "5em",
});

const NavStack = styled(Stack)({
  justifyContent: "flex-end",
  maxWidth: "95%",
  margin: "0 auto",
  backgroundColor: "black",
  color: "white",
  padding: "1.5em 0",
});

const TopTypography = styled(Typography)({
  marginRight: "7em",
});

const ItemBox = styled(Box)({
  backgroundColor: "white",
  maxWidth: "95%",
  height: "auto",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "1em 0",
  borderBottom: ".5px solid rgba(0, 0, 0, 0.2)",
});

const ItemBoxContent = styled(Typography)({
  marginRight: "6.5em",
});

const TotalBox = styled(Box)({
  border: ".5px solid rgba(0, 0, 0, 0.2)",
  maxWidth: "30%",
  margin: "0 auto",
  marginTop: "2em",
  padding: "1em",
});

const TotalStack = styled(Stack)({
  gap: "1em",
});

const TotalStackItem = styled(Stack)({
  justifyContent: "space-between",
});

const Divider = styled(Box)({
  border: ".5px solid rgba(0, 0, 0, 0.2)",
});

const ChkOutButton = styled(Button)({
  color: "white",
  backgroundColor: "black",
  padding: "1em",
  marginTop: "2em",
  borderRadius: "25px",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
    border: ".5px solid rgba(0, 0, 0, 0.2)",
  },
});
//End of Styled Components

const Cart = () => {
  return (
    <>
      <MainBox sx={{ maxWidth: { xs: "90%", sm: "80%", md: "70%" } }}>
        <NavStack direction="row">
          <TopTypography variant="span">Product</TopTypography>
          <TopTypography variant="span">Price</TopTypography>
          <TopTypography variant="span">Quantity</TopTypography>
          <TopTypography variant="span">Total</TopTypography>
        </NavStack>

        <ItemBox>
          <ItemBoxContent>
            <Button
              size="small"
              sx={{
                color: "black",
                padding: "1 0",
              }}
            >
              <ClearIcon />
            </Button>
          </ItemBoxContent>

          <ItemBoxContent>
            <Stack direction="row">
              <Stack sx={{ maxWidth: "100px" }}>
                <img
                  src="https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtleWJvYXJkfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="keyboard"
                />
              </Stack>

              <Stack ml="1em">
                <Typography variant="h6">Keyboard</Typography>
                <Typography variant="span">Smooth Keyboard</Typography>
              </Stack>
            </Stack>
          </ItemBoxContent>

          <ItemBoxContent>
            <Typography variant="span">$300</Typography>
          </ItemBoxContent>

          <ItemBoxContent sx={{ maxWidth: "5em" }}>
            <TextField size="small" />
          </ItemBoxContent>

          <ItemBoxContent>
            <Typography variant="span">$300</Typography>
          </ItemBoxContent>
        </ItemBox>

        <ItemBox>
          <ItemBoxContent>
            <Button
              size="small"
              sx={{
                color: "black",
                padding: "1 0",
              }}
            >
              <ClearIcon />
            </Button>
          </ItemBoxContent>

          <ItemBoxContent>
            <Stack direction="row">
              <Stack sx={{ maxWidth: "100px" }}>
                <img
                  src="https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtleWJvYXJkfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="keyboard"
                />
              </Stack>

              <Stack ml="1em">
                <Typography variant="h6">Keyboard</Typography>
                <Typography variant="span">Smooth Keyboard</Typography>
              </Stack>
            </Stack>
          </ItemBoxContent>

          <ItemBoxContent>
            <Typography variant="span">$300</Typography>
          </ItemBoxContent>

          <ItemBoxContent sx={{ maxWidth: "5em" }}>
            <TextField size="small" />
          </ItemBoxContent>

          <ItemBoxContent>
            <Typography variant="span">$300</Typography>
          </ItemBoxContent>
        </ItemBox>

        <TotalBox>
          <Typography variant="h5" mb="1em">
            CART TOTALS
          </Typography>

          <TotalStack>
            <TotalStackItem direction="row">
              <Typography variant="span">Sub Total</Typography>
              <Typography variant="span">$300</Typography>
            </TotalStackItem>
            <TotalStackItem direction="row">
              <Typography variant="span">Delivery</Typography>
              <Typography variant="span">$0</Typography>
            </TotalStackItem>
            <TotalStackItem direction="row">
              <Typography variant="span">Discount</Typography>
              <Typography variant="span">$0</Typography>
            </TotalStackItem>
            <Divider></Divider>
            <TotalStackItem direction="row">
              <Typography variant="span">TOTAL</Typography>
              <Typography variant="span">
                <b>$300</b>
              </Typography>
            </TotalStackItem>
          </TotalStack>

          <ChkOutButton>Proceed to Checkout</ChkOutButton>
        </TotalBox>
      </MainBox>
    </>
  );
};

export default Cart;
