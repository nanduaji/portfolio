import { useState, useEffect, useCallback } from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem, Typography } from "@mui/material";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track selected index
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check initial screen size

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const headerItems = ["HOME", "EXPERIENCE", "WORKS", "CONTACT"];

  const handleHeaderItemClick = (index) => {
    setSelectedIndex(index);
    handleCloseNavMenu();
  };

  const updateMedia = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [updateMedia]);

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="logo.jpeg" alt="Logo" className={styles.image} />
        <span className={styles.text}>NANDU A</span>
      </div>
      <ul className={styles.desktopMenu}>
        {headerItems.map((header, index) => (
          <li
            key={index}
            onClick={() => handleHeaderItemClick(index)}
            className={selectedIndex === index ? styles.activeItem : ""}
          >
            {header}
          </li>
        ))}
      </ul>

      <IconButton
        className={styles.menuIcon}
        onClick={handleOpenNavMenu}
        style={{ display: isMobile ? "block" : "none" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {headerItems.map((header, index) => (
          <MenuItem
            key={header}
            onClick={() => handleHeaderItemClick(index)}
            sx={{
              bgcolor: selectedIndex === index ? "blue" : "inherit",
              color: selectedIndex === index ? "white" : "inherit",
            }}
          >
            <Typography textAlign="center">{header}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Header;
