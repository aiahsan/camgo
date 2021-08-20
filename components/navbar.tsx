import React from "react";
import { Box, Link, Image, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Navbar() {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <>
      <Box className={`${showNav == true ? "nav-open" : ""}`}>
        <header>
          <Box className="container-fluid">
            <Box className="head-logo">
              <Link href="index.htm" title="CamGo">
                <img src="assets/img/logo.svg?v1.0" alt="CamGo" title="CamGo" />
              </Link>
            </Box>
            <UnorderedList className="head-mnu">
              <ListItem>
                <Link href="index.htm">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="why-camgo/index.htm">Why Camgo</Link>
              </ListItem>
              <ListItem>
                <Link href="about/index.htm">About</Link>
              </ListItem>
              <ListItem>
                <Link href="socially-distanced-dating-stats/index.htm">Chat Stats</Link>
              </ListItem>
              <ListItem>
                <p className="get-plus">
                  <span>Get Camgo</span> <em>Plus</em>
                </p>
              </ListItem>
              <ListItem>
                <p className="report-bug trns">
                  <em className="ci ci-bug"></em>Report bugs
                </p>
              </ListItem>
            </UnorderedList>
            <Box className="head-count">
              <em className="ci ci-user"></em> <span>800</span> <strong>online now</strong>
            </Box>
            <Box className="head-toggle" onClick={() => setShowNav(!showNav)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Box>
          </Box>
        </header>
      </Box>
    </>
  );
}
