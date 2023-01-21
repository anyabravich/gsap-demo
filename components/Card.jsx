import React, { useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";

import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-blue.css";

const Card = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CardWrap>
      <CardTitle>gsap.to</CardTitle>
      <CardPre>
        <CardCode
          class="language-javascript"
          dangerouslySetInnerHTML={{
            __html: `function sum(a, b) {
  return a + b;
}

sum();`,
          }}
        />
      </CardPre>
    </CardWrap>
  );
};

const CardWrap = styled.div``;

const CardTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
`;

const CardPre = styled.pre`
  border-radius: ${rem(10)};
`;

const CardCode = styled.code`
  border-radius: ${rem(10)};
`;

export default Card;
