import React from 'react';
import LinkedinLogoWhite from '../Linkedinlogo-white.svg';
import EmailLogoWhite from '../email-logo-white.svg';
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
  Form,
  TextField,
  Footer,
  Checkbox,
  Button,
  ButtonGroup,
  TextArea
} from '@adobe/react-spectrum';

const Contact = () => {
    let [value, setValue] = React.useState('');
  let isValid = React.useMemo(() => value.length >= 20, [value]);
  
  let [emailValue, setEmailValue] = React.useState('');
  let isEmailValid = React.useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue),
    [emailValue]
  );

    return (
<DialogTrigger>
  <ActionButton>Contact</ActionButton>
  {(close) => (
    <Dialog>
      <Heading>
        <Flex alignItems="center" gap="size-100">
          <Text>Contact for newsletter</Text>
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
        <Form>
          <TextField label="First Name" placeholder="John" autoFocus />
          <TextField label="Last Name" placeholder="Smith" />
          <TextField
          label="Email Address"
          validationState={isEmailValid ? 'valid' : 'invalid'}
          placeholder="Enter your email"
          value={emailValue}
          onChange={setEmailValue}
           />
              <TextArea
      validationState={isValid ? 'valid' : 'invalid'}
      value={value}
      placeholder="Write your message here"
      onChange={setValue}
      label="Message"
    />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button variant="cta" onPress={close}>
          Send
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
    );
};


export default Contact;
