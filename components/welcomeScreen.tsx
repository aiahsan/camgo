import React from "react";
import { Box, Flex, Image, Text, Button, Input } from "@chakra-ui/react";
import { css } from "@emotion/css";

export default function WelcomeScreen() {
  const [dropdownshow, setdropdownshow] = React.useState(false);

  return (
    <Box className="home-welcone container">
      <Box className="intro-content">
        <Box className="ic-top">
          <strong>Welcome to Camgo!</strong>
          <Text>
            Socially Distanced <span className="green-text">Video Chat</span> for Meeting New People.
          </Text>
        </Box>
        <Box className="ic-form">
          <Box id="rlt-gender-select" className={`ic-select ${dropdownshow == true ? "active" : ""}`}>
            <span className="trns" onClick={() => setdropdownshow(!dropdownshow)}>
              Select Your Gender
            </span>
            <ul
              className={`gender-selected ${css`
                display: ${dropdownshow == true ? "block !important" : "none"};
              `}`}
            >
              <li>
                <Input type="radio" id="m-gndr" name="gender" value="m" />
                <label htmlFor="m-gndr">
                  {" "}
                  <span>I am</span> <em className="ci ci-mars"></em> Male{" "}
                </label>
              </li>
              <li>
                <Input type="radio" id="f-gndr" name="gender" value="f" />
                <label htmlFor="f-gndr">
                  {" "}
                  <span>I am</span> <em className="ci ci-venus"></em> Female{" "}
                </label>
              </li>
              <li>
                <Input type="radio" id="t-gndr" name="gender" value="t" />
                <label htmlFor="t-gndr">
                  {" "}
                  <span>I am</span> <em className="ci ci-transgender-icon"></em> Transgender{" "}
                </label>
              </li>
              <li>
                <Input type="radio" id="c-gndr" name="gender" value="c" />
                <label htmlFor="c-gndr">
                  {" "}
                  <span>We are</span> <em className="ci ci-unisex"></em> Couple{" "}
                </label>
              </li>
            </ul>
          </Box>
          <Box className="ic-start login_button">
            <strong>
              <em className="ci ci-arrow-light"></em> Start Chat <em className="ci ci-arrow-light"></em>
            </strong>
            <Box className="ics-btn">
              <span id="rlt-start-text" className="btn green-btn trns">
                Text
              </span>
              <Text>or</Text>
              <span id="rlt-start-video" className="btn green-btn trns">
                Video
              </span>
              <Box id="rlt-start-btn"></Box>
            </Box>
          </Box>
          <Box className="ic-cont gf-terms">
            <Input type="checkbox" id="hcw-check" className="rlt-terms-cb" />
            <label htmlFor="hcw-check">
              I certify I have read and agree to the
              <a href="legal/terms/index.htm" target="_blank">
                Terms-of-Use Agreement
              </a>
              . I certify I am at least 18-years old and have reached the age of majority where I live.
            </label>
            <span className="icc-error trns">You must agree to continue</span>
          </Box>
          <Box className="ic-interests">
            <Box className="ici-area ">
              <form className="rlt-interests-form" action="#">
                <Input type="text" aria-label="interests" placeholder="Add your interests (optional)" />
                <Input type="submit" hidden={true} />
              </form>
            </Box>

            {/* <Box className="ici-available" style={{ display: "block" }}>
            <Box className="icia-list">
              <span data-tag="stocks">stocks</span>
              <span data-tag="politics">politics</span>
              <span data-tag="sports">sports</span>
              <span data-tag="covid dating">covid dating</span>
              <span data-tag="movies">movies</span>
              <span data-tag="21">21</span>
              <span data-tag="19">19</span>
              <span data-tag="arab">arab</span>
              <span data-tag="dance">dance</span>
              <span data-tag="18">18</span>
              <span data-tag="virtual date">virtual date</span>
              <span data-tag="party">party</span>
              <span data-tag="music">music</span>
              <span data-tag="friends">friends</span>
              <span data-tag="talk">talk</span>
              <span data-tag="games">games</span>
              <span data-tag="older">older</span>
              <span data-tag="chat">chat</span>
              <span data-tag="bi">bi</span>
              <span data-tag="flirting">flirting</span>
              <span data-tag="asian">asian</span>
              <span data-tag="make friends">make friends</span>
              <span data-tag="flirt">flirt</span>
              <span data-tag="love">love</span>
              <span data-tag="dating">dating</span>
              <span data-tag="hookup">hookup</span>
              <span data-tag="straight">straight</span>
              <span data-tag="fun">fun</span>
              <span data-tag="gay">gay</span>
            </Box>
          </Box>
        */}
          </Box>
        </Box>
      </Box>
      <Box className="learn-more">
        <span>learn more</span>
      </Box>
    </Box>
  );
}
