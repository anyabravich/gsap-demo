import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";
import Button from "./Button";
import gsap from "gsap";

const TimelineOctopus = () => {
  const [octopusStateAnimation, setOctopusStateAnimation] = useState(null);

  useEffect(() => {
    setOctopusStateAnimation(
      gsap
        .timeline({
          paused: true,
        })
        .from("[data-title]", {
          opacity: 0,
          scale: 0,
          ease: "back",
          rotation: gsap.utils.wrap([-100, 100]),
        })
        .from("[data-fred]", {
          y: 160,
          stagger: 0.5,
          duration: 0.5,
          delay: 1,
          ease: "back",
        })
        .from("[data-time]", {
          xPercent: 100,
          duration: 1,
          ease: "bounce",
        })
    );
  }, []);

  const activeButton = (e) => {
    const currentSiblings = e.target.parentNode.children;

    [...currentSiblings].forEach((sibling) => {
      sibling.style.background = "#37b24d";
    });
    e.target.style.background = "#257834";
  };

  const octopusPlay = (e) => {
    activeButton(e);
    octopusStateAnimation.play();
  };

  const octopusPause = (e) => {
    activeButton(e);
    octopusStateAnimation.pause();
  };

  const octopusReverse = (e) => {
    activeButton(e);
    octopusStateAnimation.reverse();
  };

  const octopusRestart = (e) => {
    activeButton(e);
    octopusStateAnimation.restart();
  };

  const freds = [
    {
      src: "https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877097/fred_ndktpv.svg",
      attr: "data-fred",
    },
    {
      src: "https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877096/fred-purple_xewmg6.svg",
      attr: "data-fred",
    },
    {
      src: "https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877096/fred-orange_ol0jzb.svg",
      attr: "data-fred",
    },
    {
      src: "https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877096/fred-pink_y7sknt.svg",
      attr: "data-fred",
    },
    {
      src: "https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877096/fred-red_oc0wla.svg",
      attr: "data-fred",
    },
  ];

  return (
    <TimelineOctopusWrap>
      <Container>
        <TimelineOctopusInner>
          <TimelineOctopusButtons>
            <Button ev={octopusPlay}>Play</Button>
            <Button ev={octopusPause}>Pause</Button>
            <Button ev={octopusReverse}>Reverse</Button>
            <Button ev={octopusRestart}>Restart</Button>
          </TimelineOctopusButtons>
          <TimelineOctopusApp data-app>
            <TimelineOctopusTime data-time>Sundays, 9pm</TimelineOctopusTime>
            <TimelineOctopusTitle
              src="https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877096/meet-the-freds_wistst.png"
              data-title
            />
            <TimelineOctopusFreds>
              {freds.map(({ src }, index) => (
                <TimelineOctopusFredsImg src={src} key={index} data-fred />
              ))}
            </TimelineOctopusFreds>
          </TimelineOctopusApp>
        </TimelineOctopusInner>
      </Container>
    </TimelineOctopusWrap>
  );
};

const TimelineOctopusWrap = styled.div`
  margin-top: ${rem(80)};
  @media (max-width: 576px) {
    margin-top: ${rem(40)};
  }
`;

const TimelineOctopusInner = styled.div``;

const TimelineOctopusButtons = styled.div`
  display: flex;
  gap: ${rem(10)};
  margin-bottom: ${rem(20)};
`;

const TimelineOctopusApp = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: ${rem(700)};
  height: ${rem(400)};
  background: url("https://res.cloudinary.com/duk6gqw1x/image/upload/v1673877097/space-background_xcjrsf.png")
    no-repeat center bottom;
  background-size: cover;
  overflow: hidden;
  padding-bottom: ${rem(30)};
  @media (max-width: 700px) {
    width: 100%;
    height: ${rem(250)};
  }
`;

const TimelineOctopusTime = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 200px;
  background: blue;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 14px;
    width: 150px;
    height: 25px;
  }
`;

const TimelineOctopusTitle = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
`;

const TimelineOctopusFreds = styled.div`
  display: flex;
`;

const TimelineOctopusFredsImg = styled.img`
  flex-shirink: 0;
  width: 100px;
  @media (max-width: 700px) {
    width: 60px;
    &:nth-child(3) ~ img {
      display: none;
    }
  }
`;

export default TimelineOctopus;
