import React from 'react';
import LinkedinLogoWhite from '../Linkedinlogo-white.svg';



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
  Link,
  Flex,
} from '@adobe/react-spectrum';



const Contact = () => {

  return (

<DialogTrigger>
  <ActionButton>Contact</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        <Flex alignItems="center" gap="size-100">
          <Text>Contact Me</Text>
        </Flex>
      </Heading>
      <Header>
      <Link>
        <a href="https://www.linkedin.com/in/andrew-bastian-a940101a4/">
        <Image  src={LinkedinLogoWhite} alt="LinkedinLogoWhite" objectFit="contain" maxWidth="35px"
        />
      </a>
      </Link>
{/*            <Link>
        <a href="https://www.linkedin.com/in/andrew-bastian-a940101a4/">
        <Image  src={EmailLogoWhite} alt="EmailLogoWhite" objectFit="contain" maxWidth="35px"
        />
      </a>
      </Link>*/}
      </Header>
      <Divider />
      <Content>
        <Link>andrew.bastian@gmail.com</Link>

      </Content>


    </Dialog>
  )}
</DialogTrigger>
    );
};


export default Contact;
