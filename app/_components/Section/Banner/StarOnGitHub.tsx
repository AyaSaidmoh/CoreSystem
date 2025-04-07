import { mdiGithub } from "@mdi/js";
import React from "react";
import { gradientBgPinkRed } from "../../../_lib/colors";
import Button from "../../Button";
import SectionBanner from ".";

const SectionBannerStarOnGitHub = () => {
  return (
    <SectionBanner className={gradientBgPinkRed}>
      <h1 className="text-3xl text-white mb-6">
     
      </h1>
      <div>
        <Button
         
          target="_blank"
          icon={mdiGithub}
          label="GitHub"
          roundedFull
        />
      </div>
    </SectionBanner>
  );
};

export default SectionBannerStarOnGitHub;
