import React, { useState, useEffect, useCallback } from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem, Typography } from "@mui/material";

function Header({ homeRef, experienceRef, projectsRef, contactRef }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const headerItems = [
    { label: "HOME", ref: homeRef },
    { label: "EXPERIENCE", ref: experienceRef },
    { label: "PROJECTS", ref: projectsRef },
    { label: "CONTACT", ref: contactRef },
  ];

  const handleHeaderItemClick = (index) => {
    const sectionRef = headerItems[index].ref;
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
        {headerItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleHeaderItemClick(index)}
            className={selectedIndex === index ? styles.activeItem : ""}
          >
            {item.label}
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
        {headerItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleHeaderItemClick(index)}
            sx={{
              bgcolor: selectedIndex === index ? "blue" : "inherit",
              color: selectedIndex === index ? "white" : "inherit",
            }}
          >
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Header;
