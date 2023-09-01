import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";

import { dataPush } from "@/utils/gtm";

import { gumletLoaderBasic } from "../../utils/gumletLoader";
import Icons from "../Icons";
import {
  Column,
  Container,
  Copyright,
  FooterLink,
  Row,
  SocialIcon,
  SocialRow,
  SubHeading,
  LinkRow
} from "./style";

const Footer = (props: any) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  }, []);
  return (
    <Container id={props.id}>
      <Row>
        <Column>
          <a
            href={"https://fundfolio.com"}
            rel="noopener noreferrer nofollow"
            target={"_blank"}
          >
            <Icons
              name="marketfeedUniversityLogo"
              width={isMobile ? "142.5" : ""}
              height={24}
              alt={"marketfeed Logo"}
              fill={"#fff"}
            />
          </a>
          <p className="desc">
            Honeykomb by BHIVE, <br />
            19th Main Road, <br />
            HSR Sector 3,
            <br />
            Bengaluru, KA - 560102
          </p>
          <SocialRow>
            <SocialIcon
              id="mf_social"
              onClick={() => {
                dataPush("mf_social_link_click", {
                  event_action: "Click Link",
                  event_label: "Linkedin",
                  position: "bottom_nav",
                });
              }}
              href={
                "https://www.linkedin.com/company/marketfeedapp/mycompany/verification/?viewAsMember=true"
              }
              target={"_blank"}
              rel="noopener noreferrer nofollow"
            >
              <Image
                loader={gumletLoaderBasic}
                src={"/Linkedin_Logo.svg"}
                width={26}
                height={26}
                alt={"linkedIn"}
              />
            </SocialIcon>
            <SocialIcon
              id="mf_social"
              onClick={() => {
                dataPush("mf_social_link_click", {
                  event_action: "Click Link",
                  event_label: "Twitter",
                  position: "bottom_nav",
                });
              }}
              href={"https://twitter.com/marketfeedapp"}
              target={"_blank"}
              rel="noopener noreferrer nofollow"
            >
              <Image
                loader={gumletLoaderBasic}
                src={"/twitter.svg"}
                width={26}
                height={26}
                alt={"twitter"}
              />
            </SocialIcon>
            <SocialIcon
              id="mf_social"
              onClick={() => {
                dataPush("mf_social_link_click", {
                  event_action: "Click Link",
                  event_label: "Instagram",
                  position: "bottom_nav",
                });
              }}
              href={"https://www.instagram.com/marketfeed.app/"}
              target={"_blank"}
              rel="noopener noreferrer nofollow"
            >
              <Image
                loader={gumletLoaderBasic}
                src={"/instagram.svg"}
                width={26}
                height={26}
                alt={"instagram"}
              />
            </SocialIcon>
            <SocialIcon
              id="mf_social"
              onClick={() => {
                dataPush("mf_social_link_click", {
                  event_action: "Click Link",
                  event_label: "Youtube",
                  position: "bottom_nav",
                });
              }}
              href={"https://www.youtube.com/channel/UCmapkf4A5883lT90j86WXFg"}
              target={"_blank"}
              rel="noopener noreferrer nofollow"
            >
              <Image
                loader={gumletLoaderBasic}
                src={"/you-tube.svg"}
                width={26}
                height={26}
                alt={"youtube"}
              />
            </SocialIcon>
          </SocialRow>
        </Column>
        <LinkRow>
        <Column>
          <SubHeading>Quick links</SubHeading>
          <Link
            id="mf_quick_link"
            onClick={() => {
              dataPush("mf_quick_link_click", {
                event_action: "Click Link",
                event_label: "Market Updates",
                position: "bottom_nav",
              });
            }}
            href="/read"
            rel="noopener noreferrer"
          >
            <FooterLink>Blog</FooterLink>
          </Link>
          <Link
            id="mf_quick_link"
            onClick={() => {
              dataPush("mf_quick_link_click", {
                event_action: "Click Link",
                event_label: "Market Updates",
                position: "bottom_nav",
              });
            }}
            href="/read"
            rel="noopener noreferrer"
          >
            <FooterLink>Market Updates</FooterLink>
          </Link>
          <Link
            id="mf_quick_link"
            onClick={() => {
              dataPush("mf_quick_link_click", {
                event_action: "Click Link",
                event_label: "Market Updates",
                position: "bottom_nav",
              });
            }}
            href="/read"
            rel="noopener noreferrer"
          >
            <FooterLink>Fyers Remapping</FooterLink>
          </Link>
          <Link
            id="mf_quick_link"
            onClick={() => {
              dataPush("mf_quick_link_click", {
                event_action: "Click Link",
                event_label: "Market Updates",
                position: "bottom_nav",
              });
            }}
            href="/read"
            rel="noopener noreferrer"
          >
            <FooterLink>Careers</FooterLink>
          </Link>
          <div id="mf_quick_link" rel="noopener noreferrer">
            <FooterLink unclickable={true}>Download App</FooterLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <Link
              id="mf_quick_link"
              onClick={() => {
                dataPush("mf_quick_link_click", {
                  event_action: "Click Link",
                  event_label: "Download App",
                  position: "bottom_nav",
                });
              }}
              href="https://get.marketfeed.app/8GbT/frl4ekko"
              rel="noopener noreferrer"
            >
              <Icons name="playstore" />
            </Link>

            <div style={{ height: "22px", width: "1px", background: "#fff" }} />
            <Link
              id="mf_quick_link"
              onClick={() => {
                dataPush("mf_quick_link_click", {
                  event_action: "Click Link",
                  event_label: "Download App",
                  position: "bottom_nav",
                });
              }}
              href="https://get.marketfeed.app/8GbT/frl4ekko"
              rel="noopener noreferrer"
            >
              <Icons name="appstore" height={"22px"} width={"22px"} />
            </Link>
          </div>

          {/* <Link
            id='mf_quick_link'
            onClick={() => {
              dataPush('mf_quick_link_click', {
                event_action: 'Click Link',
                event_label: 'Download App',
                position: 'bottom_nav',
              });
            }}
            href='https://get.marketfeed.app/8GbT/frl4ekko'
            rel='noopener noreferrer'
          >
            <FooterLink>Download Android App</FooterLink>
          </Link> */}

          {/* <Link
            id='mf_quick_link'
            onClick={() => {
              dataPush('mf_quick_link_click', {
                event_action: 'Click Link',
                event_label: 'Career',
                position: 'bottom_nav',
              });
            }}
            href='/read'
            rel='noopener noreferrer'
          >
            <FooterLink>Career</FooterLink>
          </Link> */}
          {/* <Link href="https://fundfolio.com/grow/">
                <a rel="noopener noreferrer" target={"_blank"}>
                  <FooterLink>ITR for traders</FooterLink>
                </a>
              </Link> */}
        </Column>
        <Column>
          <SubHeading>company</SubHeading>
          <Link
            id="mf_company"
            onClick={() => {
              dataPush("mf_company_info_click", {
                event_action: "Click Link",
                event_label: "About Us",
                position: "bottom_nav",
              });
            }}
            href="/about-us"
          >
            <FooterLink>About Us</FooterLink>
          </Link>
          <Link
            onClick={() => {
              dataPush("mf_company_info_click", {
                event_action: "Click Link",
                event_label: "Disclaimer",
                position: "bottom_nav",
              });
            }}
            id="mf_company"
            href="https://payments.marketfeed.com/disclaimer/"
          >
            <FooterLink>Disclaimer</FooterLink>
          </Link>
          <Link
            onClick={() => {
              dataPush("mf_company_info_click", {
                event_action: "Click Link",
                event_label: "Privacy Policy",
                position: "bottom_nav",
              });
            }}
            id="mf_company"
            href="https://payments.marketfeed.com/privacy-policy/"
          >
            <FooterLink>Privacy Policy</FooterLink>
          </Link>
          <Link
            onClick={() => {
              dataPush("mf_company_info_click", {
                event_action: "Click Link",
                event_label: "Terms & Conditions",
                position: "bottom_nav",
              });
            }}
            id="mf_company"
            href="https://payments.marketfeed.com/terms-of-use/"
          >
            <FooterLink>Terms & Conditions</FooterLink>
          </Link>
        </Column>
        </LinkRow>
      </Row>
      <Copyright>
        <span>Crafted by Traders 🔥</span>
        <span
          style={{
            opacity: "0.3",
            color: "white",
            marginTop: "100px",
            fontFamily: "Satoshi-Variable",
            marginTop: 4,
          }}
        >
          © marketfeed 2023
        </span>
      </Copyright>
    </Container>
  );
};

export default Footer;
