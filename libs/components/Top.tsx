import React, { useState } from "react";
import { Logout } from "@mui/icons-material";
import { Box, Menu, MenuItem, Stack } from "@mui/material";
import Link from "next/link";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Top = () => {
  const device = useDeviceDetect();
  // State for MUI Menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  if (device === "mobile") {
    return (
      <Stack className="navbar">
        <Link href="/"><div>Home</div></Link>
        <Link href="/property"><div>Properties</div></Link>
        <Link href="/agent"><div>Agents</div></Link>
        <Link href="/community"><div>Community</div></Link>
        <Link href="/cs"><div>CS</div></Link>
      </Stack>
    );
  } else {
    return (
      <Stack className="navbar">
        <Stack className="navbar-main">
          <Stack className="container" direction="row">
            <Box className="logo-box">
              <Link href="/">
                <img src="/img/logo/logoWhite.svg" alt="Logo" />
              </Link>
            </Box>
            
            <Box className="router-box">
              <Link href="/"><div>Home</div></Link>
              <Link href="/property"><div>Properties</div></Link>
              <Link href="/agent"><div>Agents</div></Link>
              <Link href="/community"><div>Community</div></Link>
              <Link href="/cs"><div>CS</div></Link>
            </Box>

            <Box className="user-box">
              <div className="login-user" onClick={handleOpenMenu} style={{ cursor: 'pointer' }}>
                <img src="/img/profile/defaultUser.svg" alt="User Profile" />
              </div>

              <Menu 
                anchorEl={anchorEl}
                id="basic-menu" 
                sx={{ mt: "5px" }} 
                open={open} 
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>
                  <Logout
                    fontSize="small"
                    style={{ color: "blue", marginRight: "10px" }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    );
  }
};

export default Top;