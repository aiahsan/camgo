import React from "react";
import { Box, Link, Image, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
export default function Navbar() {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <>
      <Box className={`${showNav == true ? "nav-open" : ""}`}>
        <header>
          <Box className="container-fluid">
            <Box className="head-logo">
              <Link href="index.htm" title="CamGo">
                <Image src="assets/img/logo.svg?v1.0" alt="CamGo" title="CamGo" />
              </Link>
            </Box>
            <UnorderedList className="head-mnu">
              <ListItem>
                <Link href="index.htm">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="why">Why Camgo</Link>
              </ListItem>
              <ListItem>
                <Link href="about">About</Link>
              </ListItem>
              <ListItem>
                <Link href="distance">Chat Stats</Link>
              </ListItem>
              <ListItem>
                <Text className="get-plus">
                  <span>Get Camgo</span> <em>Plus</em>
                </Text>
              </ListItem>
              <ListItem>
                <Text className="report-bug trns">
                  <em className="ci ci-bug"></em>Report bugs
                </Text>
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
