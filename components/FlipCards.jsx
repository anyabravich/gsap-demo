import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";

const FlipCards = () => {
  useEffect(() => {
    const wrapper = document.querySelector("[data-flip-wrapper]");
    const parentCard = document.querySelector("[data-flip-card]");
    const cardCount = 6; // make bigger

    function createCards() {
      for (var i = 0; i < cardCount - 1; i++) {
        let clone = parentCard.cloneNode(true);
        wrapper.appendChild(clone);
      }
    }
    createCards();

    let cards = gsap.utils.toArray("[data-flip-card] > [data-flip-faces]");

    let loserIndex = gsap.utils.random(0, cardCount - 1, 1);
    cards[loserIndex].classList.add("loser");

    cards.forEach(function (card, index) {
      let animation = gsap.timeline({ paused: true });
      animation.fromTo(card, { rotationY: 180 }, { rotationY: 0 });
      if (index == loserIndex) {
        animation.to(".faces:not(.loser)", {
          opacity: 0,
          ease: "power1.in",
          scale: 0.9,
          duration: 0.3,
          stagger: 0.1,
        });
        animation.to(".loser .face", {
          duration: 0.3,
          borderColor: "red",
          repeat: 4,
          yoyo: true,
        });
      }
      card.animation = animation;
      card.addEventListener("click", function () {
        card.animation.play();
      });
    });
  }, []);
  return (
    <FlipCardsWrapper data-flip-wrapper>
      <FlipCardsCard data-flip-card>
        <FlipCardsFaces data-flip-faces className="faces">
          <FlipCardsFaceFront data-flip-front className="face">
            <img
              src="https://assets.codepen.io/32887/herman.svg"
              width="100"
              data-flip-img
            />
          </FlipCardsFaceFront>
          <FlipCardsFaceBack className="face" />
        </FlipCardsFaces>
      </FlipCardsCard>
    </FlipCardsWrapper>
  );
};

const FlipCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FlipCardsCard = styled.div`
  margin: 20px;
  perspective: 600px;
`;

const FlipCardsFaces = styled.div`
  width: 160px;
  height: 220px;
  transform-style: preserve-3d;
`;

const FlipCardsFaceFront = styled.div`
  border: 8px solid white;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  backface-visibility: hidden;
  background: #ffcc32;
  /*added for mobile browsers*/
  transform: translateZ(1px);
`;

const FlipCardsFaceBack = styled.div`
  border: 8px solid white;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: rotateY(180deg);
  color: white;
  background: repeating-linear-gradient(
    70deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
`;

export default FlipCards;
