import React from "react";
export default () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="legal/privacy/index.htm">Privacy</a>
            </li>
            <li>
              <a href="legal/terms/index.htm">Terms</a>
            </li>
            <li>
              <a href="legal/billing/index.htm">Billing</a>
            </li>
            <li>
              <a href="legal/aup/index.htm">AUP</a>
            </li>
            <li>
              <a href="legal/copyright/index.htm">Copyright</a>
            </li>
            <li>
              <a href="contact/index.htm">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="soc_wrap">
          <ul>
            <li>
              <a className="ci ci-facebook" title="Facebook" href="Camgo-206187749833806/index.htm" target="_blank"></a>
            </li>
            <li>
              <a className="ci ci-instagram" title="Instagram" href="camgochat/index.htm" target="_blank"></a>
            </li>
            <li>
              <a className="ci ci-twitter" title="Twitter" href="followcamgo.html" target="_blank"></a>
            </li>
            <li>
              <a
                className="ci ci-youtube-play"
                title="Youtube"
                href="channel/UC9yQ8vd6J3zDY-P__eB04AA.html"
                target="_blank"
              ></a>
            </li>
          </ul>
        </div>
        <div className="footer-langs">
          <span data-lang="en">
            {" "}
            English <em className="ci ci-arrow-light"></em>
          </span>
          <div className="fl-list">
            <nav>
              <ul>
                <li className="fll-chse">Choose Your Language</li>
                <li>
                  <a data-lang="es" href="index-1.htm">
                    Español
                  </a>
                </li>
                <li>
                  <a data-lang="de" href="index-2.htm">
                    Deutsch
                  </a>
                </li>
                <li>
                  <a data-lang="fr" href="index-3.htm">
                    Français
                  </a>
                </li>
                <li>
                  <a data-lang="it" href="index-4.htm">
                    Italiano
                  </a>
                </li>
                <li>
                  <a data-lang="pt" href="index-5.htm">
                    Portuguęs
                  </a>
                </li>
                <li>
                  <a data-lang="ru" href="index-6.htm">
                    Русский
                  </a>
                </li>
                <li aria-hidden="true" className="fll-close"></li>
              </ul>
            </nav>
            <div className="fll-bg"></div>
          </div>
        </div>
        <div className="copy_wrap">
          <p>&copy; Camgo 2021</p>
        </div>
      </div>
    </footer>
  );
};
