import react from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import CalculateIcon from "@mui/icons-material/Calculate";

const GithubLink = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <GitHubIcon />
    </a>
  );
};

const Header = ({ heading, gitLink }) => {
  return (
    <AppBar
      position="static"
      enableColorOnDark
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CalculateIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <span>{heading}</span>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="View App Source">
              <IconButton sx={{ p: 0 }}>
                <GithubLink link={gitLink} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
