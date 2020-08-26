import React, {useState, useMemo} from 'react';

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

import {useTextField} from '@react-aria/textfield'
  let [post, setPost] = useState({firstName: '', lastName: '', email: '', message: ''})

  let isValid = useMemo(() => post.message.length >= 20, [post.message]);
  
  let isEmailValid = useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(post.email),
    [post.email]
  );

  const handleChange = (value, country, event) => {
      event.preventDefault()
      setPost({...post, [event.target.name]: event.target.value})
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

const UseTextField = (props) => {


  let {label} = props;
  let ref = React.useRef();
  let {labelProps, inputProps} = useTextField(props, ref);
    return (
     <div>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
    </div>
    );
};
<>

          <TextField
          name="firstName"
          type="text"
          label="First Name"
          placeholder="John"
          value={post.firstName}
          onSubmit={handleSubmit}
          onChange={handleChange}
          autoFocus />

          <TextField
          name="lastName"
          type="text" 
          label="Last Name" 
          placeholder="Smith" 
          value={post.lastName}
          onSubmit={handleSubmit}
          onChange={handleChange}/>

          <TextField
          name="email"
          type="text"
          label="Email Address"
          validationState={isEmailValid ? 'valid' : 'invalid'}
          placeholder="Enter your email"
          value={post.email}
          onSubmit={handleSubmit}
          onChange={handleChange} />

          <TextArea
          name="message"
          type="text"
          validationState={isValid ? 'valid' : 'invalid'}
          value={post.message}
          placeholder="Write your message here"
          onSubmit={handleSubmit}
          onChange={handleChange}
          label="Message"
          />
</>

export default UseTextField;
