import React, { useState } from 'react';

// import { trackEvent } from "../../utils/events";
import Icons from '../Icons';
import {
  Button,
  ContactCard,
  Container,
  EmailInput,
  EmailInputMobile,
} from './style';

function RemappingComponent() {
  const [clientId, setClientId] = useState();
  const [isClientIdSubmitted, setClientIdSubmitted] = useState(false);
  const [isSubmitActive, setSubmitActive] = useState(false);

  const handleChange = (value) => {
    setClientId(value);
    if (value !== "") {
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  };

  const handleEmailSubmit = () => {
    if (isSubmitActive) {
      setClientIdSubmitted(true);
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <Container>
      <div className="wrapper">
        <ContactCard>
          <div className="bg" />
          <div className="contactSection1">
            {" "}
            <div className="sectionTitle">
              <div className="link" href="mailto:marketfeed@fundfolio.in">
                <span>Remap</span> my Fyers
              </div>
            </div>
            <h3 className="sectionDetail">
              {isClientIdSubmitted
                ? "Thank You for Helping  🇮🇳  make an Extra Income from the Stock Market ❤️"
                : "Send an email to Fyers & help us keep marketfeed free for users!"}
            </h3>
          </div>
          <div className="contactSection2">
            <div className="sectionDetailDesktop">
              <Button
                id="subscribe_email"
                onClick={() => handleEmailSubmit()}
                disabled={isClientIdSubmitted || clientId === ""}
                href={
                  !clientId
                    ? ""
                    : `mailto:support@fyers.in?cc=fyers_remapping@marketfeed.com&subject=Mapping%20under%20AP%201217&body=Hi%20Team%2C%0D%0A%0D%0A%0D%0AMy%20Client%20ID%20is%20${clientId},%20please%20map%20me%20under%20AP1217.%0D%0A%0D%0A%0D%0AThanks`
                }
              >
                {isClientIdSubmitted ? "Remapped" : "Send Email"}
              </Button>
            </div>
            <div className="emailInputContainer">
              {isClientIdSubmitted ? (
                <div className="submitIcon">
                  <Icons name="check" />{" "}
                </div>
              ) : (
                ""
              )}

              <EmailInput
                placeholder="Enter your Fyers Client Id"
                onChange={(event) => handleChange(event.target.value)}
                value={clientId}
              />
            </div>
            <div className="sectionDetailMobile">
              <div className="emailInputContainerMobile">
                {isClientIdSubmitted ? (
                  <div className="submitIcon">
                    <Icons name="check" />{" "}
                  </div>
                ) : (
                  ""
                )}
                <EmailInputMobile
                  placeholder="Enter your Fyers Client Id"
                  onChange={(event) => handleChange(event.target.value)}
                  value={clientId}
                />
              </div>
              <Button
                onClick={() => handleEmailSubmit()}
                disabled={isClientIdSubmitted || clientId === ""}
                href={
                  !clientId
                    ? ""
                    : `mailto:support@fyers.in?cc=fyers_remapping@marketfeed.com&subject=Mapping%20under%20AP%201217&body=Hi%20Team%2C%0D%0A%0D%0A%0D%0AMy%20Client%20ID%20is%20${clientId},%20please%20map%20me%20under%20AP1217.%0D%0A%0D%0A%0D%0AThanks`
                }
              >
                {isClientIdSubmitted ? "Remapped" : "Send Email"}
              </Button>
            </div>
          </div>
        </ContactCard>
      </div>
    </Container>
  );
}

export default RemappingComponent;
