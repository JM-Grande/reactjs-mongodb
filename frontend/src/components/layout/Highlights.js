import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Banner from "../../assets/img/banner.jpg";

const StyledBox = styled(Box)({
  maxWidth: "100%",
});

const StyledImgBox = styled(Box)({
  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0,0, 0.7)),url(${Banner})`,
  height: "300px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const HTypography = styled(Typography)({
  color: "white",
  fontWeight: 400,
  sx: { margin: "auto 0" },
});

const Highlights = () => {
  return (
    <>
      <StyledBox>
        <StyledImgBox>
          <HTypography variant="h2">High-Tech Gadgets</HTypography>
        </StyledImgBox>
      </StyledBox>
    </>
  );
};

export default Highlights;
