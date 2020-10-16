import React from 'react';
import GithubLogoWhite from '../assets/github-logo-white.svg';
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
      <Link>
      <a href="https://github.com/andrewbastian/watermyplants-frontend">
       <Text>
        Water My Plants App: Repository Link
       </Text>
       </a>
      </Link>
          <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url="https://watermeplease.netlify.app"
              header="Water My Plants"
              description="A web app to help user's track their plant's water schedules"
        />
        <Link>
        <a href="https://github.com/andrewbastian/designhub-frontend">
          <Text>
                Design Hub: Repository Link
         </Text>
         </a>
        </Link>
          <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url="https://designhubx.netlify.app/"
              header="Design Hub"
              description="A collaborative asset platform for designers to share their work"
        />
        <Link>
        <a href="https://github.com/andrewbastian/cookbook-marketing">
          <Text>
                Secret Family Cookbook: Repository Link
         </Text>
         </a>
        </Link>
          <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url="https://secret-cookbook-marketing.netlify.app/"
              header="Secret Family Cookbook"
              description="A marketing page for the Secret Family Recipe Cookbook web-app"
        />
          <Link>
          <a href="https://github.com/andrewbastian/potluck-planner">
          <Text>Pot-luck planner App: Repository Link</Text>
          </a>
          </Link>  
          <ReactTinyLink
              cardSize='small'
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url='https://goodluck-potluck.netlify.app/login_page'
              header='Potluck Planner'
              description="A web app to help user's organize and plan potlucks"
          />

      </Content>
    </Dialog>

</DialogTrigger>
    );
};


export default Work;
