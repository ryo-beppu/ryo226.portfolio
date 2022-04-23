import React from "react";
import { ReactSVG } from "react-svg";
import styled, { keyframes } from "styled-components";
import TimelineSVG from "../../images/Timeline/Timeline.svg";
import TimelineLowerItemSVG from "../../images/Timeline/Lower.svg";
import TimelineUpperItemSVG from "../../images/Timeline/Upper.svg";
import Parkour from "../../images/Timeline/Works/Parkour.png";
import ActionGame from "../../images/Timeline/Works/ActionGame.png";
import Emotion from "../../images/Timeline/Works/Emotion.png";
import Fujisawa from "../../images/Timeline/Works/Fujisawa.png";
import Sparkler from "../../images/Timeline/Works/Sparkler.png";
import OpenWeatherMapPlugin from "../../images/Timeline/Works/OpenWeatherMapPlugin.png";

interface TimelineDataProps {
  image: string;
  Time: string;
}

const TimelineData: TimelineDataProps[] = [
  { image: Parkour, Time: "2017-12" },
  { image: ActionGame, Time: "2018-10" },
  { image: Emotion, Time: "2018-12" },
  { image: Fujisawa, Time: "2020-02" },
  { image: Sparkler, Time: "2020-08" },
  { image: OpenWeatherMapPlugin, Time: "2021-01" },
];

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(64px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TimelineWrapper = styled.div`
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const TimelineItemWrapper = styled.div`
  position: absolute;
  left: 300px;
  display: flex;
`;

const TimelineUpperItemWrapper = styled.div`
  display: inline-block;
  width: 335px;
  height: 215px;
  position: relative;
`;

const TimelineLowerItemWrapper = styled.div`
  display: inline-block;
  width: 335px;
  height: 215px;
  position: relative;
`;

const StyledReactSVG = styled.div`
  position: absolute;
  top: 0px;
  left: 44px;
  min-width: 1080px;
  filter: drop-shadow(0 0 5px #09fbd3) drop-shadow(0 0 10px #09fbd3);
`;

const StyledTitleTypography = styled.p`
  position: absolute;
  top: 0px;
  left: 60px;
  margin: 0px;
  font-size: 50px;
  font-style: italic;
  font-family: "Rajdhani";
  color: white;
  filter: drop-shadow(0 0 1px white) drop-shadow(0 0 10px white);
  animation: ${slideIn} 1.6s forwards;
`;

const StyledUpperTypography = styled.p`
  font-size: 20px;
  font-style: italic;
  font-family: "Rajdhani";
  color: white;
  filter: drop-shadow(0 0 1px white) drop-shadow(0 0 10px white);
  position: absolute;
  bottom: 294px;
  margin: 0px;
  left: 80px;
  animation: ${slideIn} 0.5s forwards;
`;

const StyledLowerTypography = styled.p`
  font-size: 20px;
  font-style: italic;
  font-family: "Rajdhani";
  color: white;
  filter: drop-shadow(0 0 1px white) drop-shadow(0 0 10px white);
  position: absolute;
  top: 195px;
  margin: 0px;
  left: 80px;
  animation: ${slideIn} 0.5s forwards;
`;

const StyledTimelineUpperItemSVG = styled.div`
  position: absolute;
  bottom: 152px;
  filter: drop-shadow(0 0 5px #09fbd3) drop-shadow(0 0 10px #09fbd3);
`;
const StyledTimelineLowerItemSVG = styled.div`
  position: absolute;
  top: 57px;
  filter: drop-shadow(0 0 5px #09fbd3) drop-shadow(0 0 10px #09fbd3);
`;

const ImageUpperWrapper = styled.div`
  width: 367px;
  height: 149px;
  position: absolute;
  bottom: 157px;
  left: 17px;
  overflow: hidden;
  transform: skewX(-12deg);
`;

const ImageLowerWrapper = styled.div`
  width: 367px;
  height: 149px;
  position: absolute;
  top: 58px;
  left: 17px;
  overflow: hidden;
  transform: skewX(12deg);
`;

const StyledUpperImage = styled.img`
  position: absolute;
  top: 0px;
  left: -17px;
  transform: skewX(12deg);
  transition: box-shadow 0.2s;
  -webkit-user-drag: none;
  &:hover {
    transform: scale(1.2, 1.2) skewX(12deg);
    transition: 0.5s all;
  }
`;

const StyledLowerImage = styled.img`
  position: absolute;
  top: 0px;
  left: -17px;
  transform: skewX(-12deg);
  transition: box-shadow 0.2s;
  -webkit-user-drag: none;
  &:hover {
    transform: scale(1.2, 1.2) skewX(-12deg);
    transition: 0.5s all;
  }
`;

const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <StyledTitleTypography>Timeline</StyledTitleTypography>
      <TimelineItemWrapper>
        {TimelineData.map((work, index) => {
          return (
            <div key={work.image}>
              {index % 2 === 0 ? (
                <TimelineLowerItemWrapper>
                  <ImageLowerWrapper>
                    <StyledLowerImage src={work.image} />
                  </ImageLowerWrapper>
                  <StyledTimelineLowerItemSVG>
                    <ReactSVG src={TimelineLowerItemSVG} />
                  </StyledTimelineLowerItemSVG>
                  <StyledLowerTypography>{work.Time}</StyledLowerTypography>
                </TimelineLowerItemWrapper>
              ) : (
                <TimelineUpperItemWrapper>
                  <ImageUpperWrapper>
                    <StyledUpperImage src={work.image} />
                  </ImageUpperWrapper>
                  <StyledTimelineUpperItemSVG>
                    <ReactSVG src={TimelineUpperItemSVG} />
                  </StyledTimelineUpperItemSVG>
                  <StyledUpperTypography>{work.Time}</StyledUpperTypography>
                </TimelineUpperItemWrapper>
              )}
            </div>
          );
        })}
      </TimelineItemWrapper>
      <StyledReactSVG>
        <ReactSVG src={TimelineSVG} />
      </StyledReactSVG>
    </TimelineWrapper>
  );
};

export default Timeline;
