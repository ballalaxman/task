import { Grid, IconButton, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Image1 from "../../Components/Images/image1.jpg";
import Image2 from "../../Components/Images/image2.jpg";
import Image3 from "../../Components/Images/image3.jpg";

export const Index = () => {
  const [mouseIndex, setMouseIndex] = useState(2);

  return (
    <div>
      <Container maxWidth="xl">
        <Box
          sx={{
            pt: 15,
          }}
        >
          <Stack spacing={3}>
            <Typography
              sx={{
                fontSize: "4rem",
              }}
            >
              Runner's Workout
            </Typography>
            <Box>
              <Grid container direction="row">
                <Grid item sm={mouseIndex == 0 ? 6 : 3}>
                  <Box
                    className="img-hover"
                    onMouseOver={() => setMouseIndex(0)}
                    sx={{
                      width: "100%",
                      height: "500px",
                      backgroundImage: `url(${Image1})`,
                      backgroundSize: "cover",
                      borderRadius: "10px 0px 0px 10px",
                      boxShadow:
                        "inset 140px 225px 140px 225px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Stack direction="row" spacing={60}>
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          color: "white",
                          fontWeight: "500",
                          p: 3,
                        }}
                      >
                        STRENGTH
                      </Typography>
                      {mouseIndex == 0 && (
                        <IconButton
                          sx={{
                            color: "white",
                            transform: "scale(1.8) rotate(-90deg)",
                          }}
                        >
                          <ExpandCircleDownIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </Box>
                </Grid>
                <Grid item sm={mouseIndex == 1 ? 6 : 3}>
                  <Box
                    onMouseOver={() => setMouseIndex(1)}
                    sx={{
                      width: "100%",
                      height: "500px",
                      backgroundImage: `url(${Image2})`,
                      backgroundSize: "cover",
                      boxShadow:
                        "inset 140px 225px 140px 225px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Stack direction="row" spacing={65}>
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          color: "white",
                          fontWeight: "500",
                          p: 3,
                        }}
                      >
                        MOBILITY
                      </Typography>
                      {mouseIndex == 1 && (
                        <IconButton
                          sx={{
                            color: "white",
                            transform: "scale(1.8) rotate(-90deg)",
                          }}
                        >
                          <ExpandCircleDownIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </Box>
                </Grid>
                <Grid item sm={mouseIndex == 2 ? 6 : 3}>
                  <Box
                    onMouseOver={() => setMouseIndex(2)}
                    sx={{
                      width: "100%",
                      height: "500px",
                      backgroundImage: `url(${Image3})`,
                      backgroundSize: "cover",
                      borderRadius: "0px 10px 10px 0px",
                      boxShadow:
                        "inset 140px 225px 140px 225px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Stack direction="row" spacing={70}>
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          color: "white",
                          fontWeight: "500",
                          p: 3,
                        }}
                      >
                        DRILL
                      </Typography>
                      {mouseIndex == 2 && (
                        <IconButton
                          sx={{
                            color: "white",
                            transform: "scale(1.8) rotate(-90deg)",
                          }}
                        >
                          <ExpandCircleDownIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};
export default Index;
