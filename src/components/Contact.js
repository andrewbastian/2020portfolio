import React from 'react';
import LinkedinLogoWhite from '../assets/Linkedinlogo-white.svg';

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
        <DialogTrigger isDismissable>
            <ActionButton>Contact</ActionButton>
            {(close) => (
                <Dialog>
                    <Heading>
                        <Flex alignItems='center' gap='size-100'>
                            <Text>Contact Me</Text>
                        </Flex>
                    </Heading>
                    <Header>
                        <Link>
                            <a href='https://www.linkedin.com/in/andrew-bastian-a940101a4/'>
                                <Image
                                    src={LinkedinLogoWhite}
                                    alt='LinkedinLogoWhite'
                                    objectFit='contain'
                                    maxWidth='35px'
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
                        <Link>
                            <a href='mailto:andrew.bastian@gmail.com' target='_blank' rel='noopener noreferrer'>
                                andrew.bastian@gmail.com
                            </a>
                        </Link>
                    </Content>
                </Dialog>
            )}
        </DialogTrigger>
    );
};

export default Contact;
