import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function Footer() {
  const shareUrl = "https://github.com/faradji/react-shopping-cart";
  const title = "React Showcase";

  return (
    <div>
      <h1>
        Made by{" "}
        <a href="https://faradji.se/" target="_blank" rel="noreferrer">
          Ali
        </a>
      </h1>
      <div className="shareContainer">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <EmailShareButton url={shareUrl} quote={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <LinkedinShareButton url={shareUrl} quote={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

export default Footer;
