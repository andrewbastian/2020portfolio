import React from 'react';
import { ActionButton,
         Content,
         Dialog, 
         DialogTrigger, 
         Divider, 
         Heading, 
         Text } from '@adobe/react-spectrum';
const About = () => {
    return (
        <DialogTrigger isDismissable>
            <ActionButton>About</ActionButton>
            <Dialog>
                <Heading>About Me</Heading>
                <Divider />
                <Content>
                    <Text>
                        Hello world, I'm a full-stack web developer with a particular interest in front-end development. 
                        I have a special affinity for JavaScript, ReactJS, Sass, Material-UI, Jest, NodeJS, Express, Redux, GraphQL, and Apollo Client.
                        <br />
                        <br />
                        After discovering the unique opportunity to study web development at Lambda School remotely, 
                        I have laid a strong foundation of core skills to build my career. Along with fundamental technical knowledge in web development, 
                        my time at Lambda has allowed me to work on expansive projects in a team environment. I have always loved the process of building 
                        collaboratively with others, and I look forward to bringing that passion to a full-time role.
                        <br />
                        <br />
                        If I'm not programming, I'm likely playing music, building a piece of furniture, 
                        or trying to make my daughter laugh. If you'd like to know more, feel free to get in touch.
                    </Text>
                </Content>
            </Dialog>
        </DialogTrigger>
    );
};

export default About;
