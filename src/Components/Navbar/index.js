import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import PersonIcon from "@mui/icons-material/Person";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { Stack } from "@mui/system";
import { IconButton, Typography } from "@mui/material";

export const Index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          height: "90px",
          pt: 1,
        }}
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignContent="center"
          alignItems={"center"}
          sx={{
            flexDirection: "row",
            padding: "10px 40px",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/740/912/original/hf-logo-monogram-with-emblem-style-isolated-on-black-background-free-vector.jpg"
            width="50px"
            height="50px"
            style={{
              borderRadius: "50px",
            }}
          />
          <Stack direction="row" spacing={10} alignItems="center">
            <Stack direction="column">
              <IconButton className="icon">
                <VideocamOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "600px",
                  letterSpacing: "2.5px",
                }}
              >
                LIVE
              </Typography>
            </Stack>
            <Stack direction="column">
              <IconButton className="icon">
                <NewspaperOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "600px",
                  letterSpacing: "2.5px",
                }}
              >
                MEMBERSHIP
              </Typography>
            </Stack>
            <Stack direction="column">
              <IconButton className="icon">
                <DirectionsRunOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "600px",
                  letterSpacing: "2.5px",
                }}
              >
                PLANS
              </Typography>
            </Stack>
            <Stack direction="column">
              <IconButton className="icon">
                <WidgetsOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "600px",
                  letterSpacing: "2.5px",
                }}
              >
                MORE
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <IconButton className="icon">
              <PersonIcon />
            </IconButton>
            <Typography
              sx={{
                color: "black",
              }}
            >
              Login
            </Typography>
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
};
export default Index;
