import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { dark } from "@mui/material/styles/createPalette";
import { green } from "@mui/material/colors";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header></Header>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SideMenu></SideMenu>
        </Grid>
        <Grid item xs={10}>
        <Outlet></Outlet>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
