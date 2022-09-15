import React from "react";

import {
  ActionButton,
  Content,
  Header,
  Dialog,
  DialogTrigger,
  Divider,
  Heading,
  Text,
  Link,
  Flex,
} from "@adobe/react-spectrum";

const Contact = () => {
  return (
    <DialogTrigger type='modal' isDismissable>
      <ActionButton>Contact</ActionButton>
        <Dialog>
          <Heading>
            <Flex alignItems="center" gap="size-100">
              <Text>Contact Me</Text>
            </Flex>
          </Heading>
          <Header>
          </Header>
          <Divider />
          <Content>
            <Link>
              <a
                href="mailto:andrew.bastian@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                andrew.bastian@gmail.com
              </a>
            </Link>
          </Content>
        </Dialog>
    </DialogTrigger>
  );
};

export default Contact;
