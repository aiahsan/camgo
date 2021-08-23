import React from "react";
import { Box, Link, Image, UnorderedList, ListItem, Text } from "@chakra-ui/react";

export default () => {
  return (
    <footer>
      <Box className="container">
        <nav>
          <UnorderedList>
            <ListItem>
              <a href="legal/privacy/index.htm">Privacy</a>
            </ListItem>
            <ListItem>
              <a href="legal/terms/index.htm">Terms</a>
            </ListItem>
            <ListItem>
              <a href="legal/billing/index.htm">Billing</a>
            </ListItem>
            <ListItem>
              <a href="legal/aup/index.htm">AUP</a>
            </ListItem>
            <ListItem>
              <a href="legal/copyright/index.htm">Copyright</a>
            </ListItem>
            <ListItem>
              <a href="contact/index.htm">Contact</a>
            </ListItem>
          </UnorderedList>
        </nav>
        <Box className="soc_wrap">
          <UnorderedList>
            <ListItem>
              <a className="ci ci-facebook" title="Facebook" href="Camgo-206187749833806/index.htm" target="_blank"></a>
            </ListItem>
            <ListItem>
              <a className="ci ci-instagram" title="Instagram" href="camgochat/index.htm" target="_blank"></a>
            </ListItem>
            <ListItem>
              <a className="ci ci-twitter" title="Twitter" href="followcamgo.html" target="_blank"></a>
            </ListItem>
            <ListItem>
              <a
                className="ci ci-youtube-play"
                title="Youtube"
                href="channel/UC9yQ8vd6J3zDY-P__eB04AA.html"
                target="_blank"
              ></a>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box className="footer-langs">
          <span data-lang="en">
            {" "}
            English <em className="ci ci-arrow-light"></em>
          </span>
          <Box className="fl-list">
            <nav>
              <UnorderedList>
                <ListItem className="fll-chse">Choose Your Language</ListItem>
                <ListItem>
                  <a data-lang="es" href="index-1.htm">
                    Español
                  </a>
                </ListItem>
                <ListItem>
                  <a data-lang="de" href="index-2.htm">
                    Deutsch
                  </a>
                </ListItem>
                <ListItem>
                  <a data-lang="fr" href="index-3.htm">
                    Français
                  </a>
                </ListItem>
                <ListItem>
                  <a data-lang="it" href="index-4.htm">
                    Italiano
                  </a>
                </ListItem>
                <ListItem>
                  <a data-lang="pt" href="index-5.htm">
                    Portuguęs
                  </a>
                </ListItem>
                <ListItem>
                  <a data-lang="ru" href="index-6.htm">
                    Русский
                  </a>
                </ListItem>
                <ListItem aria-hidden="true" className="fll-close"></ListItem>
              </UnorderedList>
            </nav>
            <Box className="fll-bg"></Box>
          </Box>
        </Box>
        <Box className="copy_wrap">
          <p>&copy; Camgo 2021</p>
        </Box>
      </Box>
    </footer>
  );
};
