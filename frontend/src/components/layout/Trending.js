import React, { useEffect, useState } from "react";
import { Box, Stack, styled, Typography, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
//import items from "../../items";

//Styled Components
const StyledBox = styled(Box)({
  width: "80%",
  margin: "auto",
  height: "auto",
  paddingBottom: "2em",
});

const StackImages = styled(Stack)({
  gap: "1em",
  rowGap: "6em",
  display: "flex",
  flexWrap: "wrap",
  padding: "0 2em",
  paddingBottom: "2em",
  marginTop: "3em",
});

const StackImg = styled(Stack)({
  width: "250px",
  height: "400px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
  "&:hover": {
    color: "gray",
  },
});

const HotText = styled(Typography)({
  marginTop: "2em",
});

const ItemName = styled(Typography)({
  fontWeight: "600",
});

const ItemPrice = styled(Typography)({
  textDecoration: "line-through",
  color: "gray",
});

//End of Styled Components

const Trending = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const { data } = await axios("/api/v1/items");
      setItems(data);
    };
    getItems();
  }, []);

  return (
    <>
      <StyledBox>
        <HotText variant="h4"> Hot Items </HotText>
        {/* Image List */}
        <StackImages direction="row">
          {items.map((item) => (
            <StackImg key={item._id}>
              <img src={item.image} alt={item.name} loading="lazy" />

              <StyledLink to={"/Item/" + item._id}>
                <Stack>
                  <ItemName>{item.name}</ItemName>
                  <Typography>Brand: {item.brand}</Typography>
                </Stack>
              </StyledLink>

              <Stack direction="row" gap={1} mt={2}>
                <Typography variant="h6">
                  {item.preSalePrice === item.price ? (
                    ""
                  ) : (
                    <ItemPrice>${item.price}</ItemPrice>
                  )}
                </Typography>
                <Typography variant="h6">${item.preSalePrice}</Typography>
                <Rating
                  name="half-rating-read"
                  value={item.rating || ""}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </StackImg>
          ))}
          {/* End of Image List */}

          <Stack sx={{ width: "100%", height: "200px" }}></Stack>
        </StackImages>
      </StyledBox>
    </>
  );
};

export default Trending;
