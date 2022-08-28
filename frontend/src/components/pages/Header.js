import React from "react";
import { Box, AppBar, Toolbar, Typography, styled, Badge } from "@mui/material";
import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Styled Components
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  color: "black",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1em",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid gray`,
    padding: "0 4px",
  },
});

// End of Styled Components

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <AppBar position="sticky" color="primary">
          <StyledToolBar>
            <Typography variant="h5" fontWeight="700">
              <StyledLink to="/">GADGET</StyledLink>
            </Typography>
            {/* Icon And Account Button */}
            <UserBox>
              <StyledLink to="/Cart">
                <StyledBadge badgeContent={4}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </StyledLink>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "black" }}
              >
                Account
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  <StyledLink to="/Login"> Login </StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <StyledLink to="/Registration">Sign Up</StyledLink>
                </MenuItem>
              </Menu>
            </UserBox>
            {/*End of Icon And Account Button */}
          </StyledToolBar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
