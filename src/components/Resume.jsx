import React from 'react';
// import AndrewBastianDevResume from '../assets/AndrewBastianDevResume.svg';
import AndrewBastianDevResume from '../assets/SVG/Resume.svg';
import { ActionButton,
         Content,
         Dialog, 
         DialogTrigger, 
         Divider, 
         Heading } from '@adobe/react-spectrum';
const About = () => {
    return (
        <DialogTrigger isDismissable>
            <ActionButton>Resume</ActionButton>
            <Dialog>
                <Heading>Resume</Heading>
                <Divider />
                <Content>
                    <img src={AndrewBastianDevResume} alt="resume" style={{background: "white"}}/>
                </Content>
            </Dialog>
        </DialogTrigger>
    );
};

export default About;