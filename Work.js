import React from 'react';
import GithubLogoWhite from '../github-logo-white.svg';
import {
  ActionButton,
  Content,
  Header,
  Dialog,
  DialogTrigger,
  Divider,
  Heading,
  Text,
  Image,
  Link
} from '@adobe/react-spectrum';

import { ReactTinyLink } from 'react-tiny-link'

const Work = () => {
    return (
<DialogTrigger isDismissable>
  <ActionButton>Projects</ActionButton>
    <Dialog>
      <Heading>Recent Work</Heading>
      <Header>For more projects, checkout my Github pofile: &nbsp; 
      <Link>
      <a href="https://github.com/andrewbastian">
      <Image  src={GithubLogoWhite} alt="GithubLogoWhite" objectFit="contain" maxWidth="35px"
      />
      </a>
      </Link>
      </Header>
      <Divider />
      <Content>
       <Text>
        Water My Plants App:
         </Text>
          <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://watermeplese.netlify.app/"
        />
        <Text>
                Design Hub:
         </Text>
          <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://designhubx.netlify.app/"
        />
        <Text>
        Pot-luck planner App:
         </Text>
          <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://keen-nightingale-e678d3.netlify.app/"
        />

      </Content>
    </Dialog>

</DialogTrigger>
    );
};


export default Work;
