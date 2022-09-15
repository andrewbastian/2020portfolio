import React from "react";
import "../App.css";
import { ReactComponent as LinkedinLogo } from "../assets/linkLogos/WebLinkLogos_LinkedInLogo.svg";
import { ReactComponent as GithubLogo } from "../assets/linkLogos/WebLinkLogos_GithubLogo.svg";

import { Link } from "@adobe/react-spectrum";

const Footer = () => {
  return (
    <>
      <Link>
        <a href="https://github.com/andrewbastian">
          <GithubLogo className="svgLogoWhite" />
        </a>
      </Link>

      <Link>
        <a href="https://www.linkedin.com/in/andrew-bastian-a940101a4/">
            <LinkedinLogo className="svgLogoWhite" />
        </a>
      </Link>
    </>
  );
};

export default Footer;
