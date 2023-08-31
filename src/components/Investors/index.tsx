import React, {
  useEffect,
  useState,
} from 'react';

import {
  Column,
  Container,
  Row,
  SubTitle,
  Title,
} from './style';

const Investors2 = (props) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1920) setDevice("large");
  }, []);
  return (
    <Container id="partners">
      <Title>Our Investors</Title>
        <SubTitle>marketfeed. is backed by some of the world’s<br/>
most influential supporters.</SubTitle>
      <Row>
        {device === "large" ? (
          <>
          <Column className="column_1">
          <img
              src="https://marketfeed-app.gumlet.io/marketfeed-website/ycomb.png"
              style = {{width: '90%'}}
            />
          </Column>
          <Column className="column_2">
          <img
              src="https://marketfeed-app.gumlet.io/marketfeed-website/vibe.png"
              style = {{width: '90%'}}
            />
          </Column>
          <Column className="column_3">
          <img
              src="https://marketfeed-app.gumlet.io/marketfeed-website/kube.png"
              style = {{width: '90%'}}
            />
          </Column>
          <Column className="column_4">
          <img
              src="https://marketfeed-app.gumlet.io/marketfeed-website/olive.png"
              style = {{width: '90%'}}
            />
          </Column>
          <Column className="column_5">
          <img
              src="https://marketfeed-app.gumlet.io/marketfeed-website/iseed.png"
              style = {{width: '90%'}}
            />
          </Column>
          <Column className="column_6">
          <img
              src="https://marketfeed-app.gumlet.io/marketfeed-website/dragon.png"
              style = {{width: '90%'}}
            />
          </Column>
        </>
        ) : (
          <>
            <Column className="column_1">
            <img
                src="https://marketfeed-app.gumlet.io/marketfeed-website/ycomb.png"
                style = {{width: '90%'}}
              />
            </Column>
            <Column className="column_2">
            <img
                src="https://marketfeed-app.gumlet.io/marketfeed-website/vibe.png"
                style = {{width: '90%'}}
              />
            </Column>
            <Column className="column_3">
            <img
                src="https://marketfeed-app.gumlet.io/marketfeed-website/kube.png"
                style = {{width: '90%'}}
              />
            </Column>
            <Column className="column_4">
            <img
                src="https://marketfeed-app.gumlet.io/marketfeed-website/olive.png"
                style = {{width: '90%'}}
              />
            </Column>
            <Column className="column_5">
            <img
                src="https://marketfeed-app.gumlet.io/marketfeed-website/iseed.png"
                style = {{width: '90%'}}
              />
            </Column>
            <Column className="column_6">
            <img
                src="https://marketfeed-app.gumlet.io/marketfeed-website/dragon.png"
                style = {{width: '90%'}}
              />
            </Column>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Investors2;