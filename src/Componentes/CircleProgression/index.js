import React from "react";

import { ContainerCircle, ContainerSvg } from "./styles";

function CircleProgression({ percent }) {
  return (
    <ContainerCircle>
      <ContainerSvg percent={percent}>
        <circle cx="70" cy="70" r="70" />
        <circle
          cx="70"
          cy="70"
          r="70"
          style={{ strokeDashoffset: 440 - (440 * percent) / 100 }}
        />
      </ContainerSvg>
    </ContainerCircle>
  );
}

export default CircleProgression;
