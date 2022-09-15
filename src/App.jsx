import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Flex,
  Grid,
  View,
} from "@adobe/react-spectrum";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Clouds from "./components/Clouds";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <div className="App">
          <Clouds />
          {loading === false ? (
            <View>
              <Grid
                areas={["header  header", "content content", "footer  footer"]}
                columns={["1fr", "3fr"]}
                rows={["auto", "auto", "auto"]}
                height="auto"
                gap="size-100"
              >
                <View
                  gridArea="header"
                  display="flex"
                  justifySelf="center"
                  alignSelf="center"
                  marginTop="5%"
                  width="50%"
                >
                  <h1 className="NeonHeader">Andrew Bastian</h1>
                </View>

                <View
                  gridArea="content"
                  display="flex"
                  justifySelf="center"
                  marginTop="size-100"
                >
                  <Flex
                    direction="column"
                    width="size-2000"
                    gap="size-200"
                    marginTop="10%"
                  >
                    <About />
                    <Work />
                    <Contact />
                  </Flex>
                </View>
                <View gridArea="footer" margin="auto">
                  <Flex
                    direction="row"
                    width="size-2000"
                    justifyContent='space-evenly'
                    alignSelf="center"
                    justifySelf="center"
                    marginTop="25%"
                  >
                    <Footer />
                  </Flex>
                </View>
              </Grid>
            </View>
          ) : (
            <h1 className="NeonHeader">Loading...</h1>
          )}
      </div>
    </>
  );
}

export default App;
