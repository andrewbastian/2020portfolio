import React from "react";
import { ReactComponent as GithubLogo } from "../assets/linkLogos/WebLinkLogos_GithubLogo.svg";

import {
  ActionButton,
  Content,
  Header,
  Dialog,
  DialogTrigger,
  Divider,
  Heading,
  Flex,
  Well,
  Link,
} from "@adobe/react-spectrum";
import ProjectCard from "./ProjectCard";
import NashNumScreenShot from "../assets/NashNumsScreenShot.png";
import WordleHintScreenShot from "../assets/WordleHintScreenShot.png";

const Work = () => {
  const projects = [
    {
      githubLink: "https://github.com/andrewbastian/watermyplants-frontend",
      thumbnail: NashNumScreenShot,
      url: "https://three-nashville.vercel.app/",
      header: "Nashville Numbers",
      description:
        "A web app to help user's hear and see chord harmonic function groups",
        tech: ['NextJS', 'Typescript', 'ToneJS', 'TonalJS', 'THREE-JS']
    },
    {
      githubLink: "https://github.com/andrewbastian/next-word/",
      thumbnail: WordleHintScreenShot,
      url: "https://wordle-next-zeta.vercel.app/",
      header: "Wordle Today",
      description: "Solve today's Wordle on the first try or just get a hint",
        tech: ['Firebase-Functions(pubsub) & Firestore', 'Puppeteer', 'NextJS', "Typescript", 'Axios', '3rd party thesaurus API']
    },

    //{
    //  githubLink: "https://github.com/andrewbastian/watermyplants-frontend",
    //  thumbnail: "TBD",
    //  url: "https://watermeplease.netlify.app",
    //  header: "Water My Plants",
    //  description:
    //    "A web app to help user's track their plant's water schedules",
    //},
    //{
    //  githubLink: "https://github.com/andrewbastian/cookbook-marketing",
    //  thumbnail: "TBD",
    //  url: "https://secret-cookbook-marketing.netlify.app/",
    //  header: "Secret Family Cookbook",
    //  description:
    //    "A marketing page for the Secret Family Recipe Cookbook web-app",
    //},
  ];
  return (
    <DialogTrigger isDismissable type="modal">
      <ActionButton>Projects</ActionButton>
      <Dialog>
        <Heading>Recent Work</Heading>

        <Divider marginBottom="size-300" />
        <Content>
          {projects.map((e) => {
            return (
              <ProjectCard
                githubLink={e.githubLink}
                thumbnail={e.thumbnail}
                url={e.url}
                header={e.header}
                description={e.description}
                tech={e.tech}
              />
            );
          })}
          <Well
            display="flex"
            justifyContent="center"
          >
            <Flex
              gap="size-100"
              direction="column"
              alignItems="center"
              marginRight="size-50"
              marginTop="size-100"
              marginBottom="size-300"
              justifyContent="center"
            >
              <Header alignSelf="center">More projects:</Header>
              <Link height="size-200">
                <a href="https://github.com/andrewbastian">
                    <GithubLogo className="svgLogoBlack"/>
                </a>
              </Link>
            </Flex>
          </Well>
        </Content>
      </Dialog>
    </DialogTrigger>
  );
};

export default Work;
