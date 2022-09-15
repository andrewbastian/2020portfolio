import React from "react";
import { ReactComponent as GithubLogo } from "../assets/linkLogos/WebLinkLogos_GithubLogo.svg";
import { ReactComponent as WebLogo } from "../assets/linkLogos/WebLinkLogos_GlobeLogo.svg";
import {
  Well,
  Grid,
  Image,
  Link,
  Text,
  View,
  Heading,
  Flex,
  Divider,
} from "@adobe/react-spectrum";

function ProjectCard({
  githubLink,
  thumbnail,
  url,
  header,
  description,
  tech,
}) {
  return (
    <div>
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        gap="size-100"
        marginBottom="size-100"
        padding="size-150"
      >
        <Grid
          areas={[
            "heading  heading",
            "description  description",
            "imgAndLink imgAndLink",
            "tech  repoLink",
          ]}
          columns={["3fr", "1fr"]}
          rows={["size-1000", "size-500", "auto", "auto"]}
          height="size-8000"
          gap="size-100"
        >
          <View gridArea="heading">
            <Heading>{header}</Heading>
            <Divider marginBottom="size-300" />
          </View>
          <View gridArea="description">
            <Text>{description}</Text>
          </View>
          <View gridArea="tech">
            <Flex direction="column">
              <Heading level="5">Built With:</Heading>
              <Flex direction="row" wrap>
                {tech.map((e, i) => {
                  if (i === tech.length - 1) {
                    return <Text>{`& ${e}`}</Text>;
                  } else {
                    return <Text>{`${e},`}</Text>;
                  }
                })}
              </Flex>
            </Flex>
          </View>
          <View gridArea="imgAndLink">
            <Link>
              <a href={url}>
                <Image src={thumbnail} alt={`image ${header}`} />
              </a>
            </Link>
          </View>
          <View gridArea="repoLink">
            <Well aria-labelledby="wellLabel">
              <Flex
                id="wellLabel"
                alignItems="center"
                alignSelf="center"
                marginRight="size-50"
                justifyContent="center"
                direction="row"
              >
                {!githubLink ? (
                  <>
                    <Flex direction="row">
                      <Text alignSelf="center">
                        {" "}
                        Repository Link available on request
                      </Text>
                    </Flex>
                    <Flex direction="row">
                      <Link>
                        <a href={url}>
                          <Text>Website:</Text>
                          <WebLogo className="svgLogoBlack" />
                        </a>
                      </Link>
                    </Flex>
                  </>
                ) : (
                  <>
                    <Flex direction="row">
                      <Link>
                        <a href={githubLink}>
                          <Text>Repository:</Text>
                          <GithubLogo className="svgLogoBlack" />
                        </a>
                      </Link>
                    </Flex>
                    <Flex direction="row">
                      <Link>
                        <a href={url}>
                          <Text>Website:</Text>
                          <WebLogo className="svgLogoBlack" />
                        </a>
                      </Link>
                    </Flex>
                  </>
                )}
              </Flex>
            </Well>
          </View>
        </Grid>
      </View>
    </div>
  );
}

export default ProjectCard;
