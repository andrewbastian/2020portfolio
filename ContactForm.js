import React, { useMemo, useState } from 'react';
import LinkedinLogoWhite from '../Linkedinlogo-white.svg';

import {useTextField} from '@react-aria/textfield'

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

import axios from 'axios'

const Contact = () => {

//   function TextField(props) {
//    let {label} = props;
//   let ref = React.useRef();
//   let {labelProps, inputProps} = useTextField(props, ref);
//     return (
//      <div>
//       <label {...labelProps}>{label}</label>
//       <input {...inputProps} ref={ref} />
//     </div>
//     );
// };

  let [post, setPost] = useState({firstName: '', lastName: '', email: '', message: ''})

  let isValid = useMemo(() => post.message.length >= 20, [post.message]);
  
  let isEmailValid = useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(post.email),
    [post.email]
  );

  const handleChange = (name, value) => {

      setPost({...post, [name]: value})
  }

 

  function handleSubmit(event) {
    event.preventDefault()
    console.log("submit?")
    axios.post('http://localhost:5000/', post)
      .then(res =>{
        console.log('RES:',res)
        console.log('RES.DATA:',res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

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
        <Form onSubmit={handleSubmit}>

          <TextField
          name="firstName"
          type="text"
          label="First Name"
          placeholder="John"
          value={post.firstName}
          
          onChange={handleChange.setPost}
          autoFocus />

          <TextField
          name="lastName"
          type="text" 
          label="Last Name" 
          placeholder="Smith" 
          value={post.lastName}
          // onSubmit={handleSubmit}
          onChange={handleChange}/>

          <TextField
          name="email"
          type="text"
          label="Email Address"
          validationState={isEmailValid ? 'valid' : 'invalid'}
          placeholder="Enter your email"
          value={post.email}
          // onSubmit={handleSubmit}
          onChange={handleChange} />

          <TextArea
          name="message"
          type="text"
          validationState={isValid ? 'valid' : 'invalid'}
          value={post.message}
          placeholder="Write your message here"
          // onSubmit={handleSubmit}
          onChange={handleChange}
          label="Message"
          />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close} >
          Cancel
        </Button>
        <Button variant="cta" type='submit'>
          Send
        </Button>
      </ButtonGroup>
    </Dialog>
  )}
</DialogTrigger>
    );
};


export default Contact;
