import styled from "styled-components";

export const ContainerCircle = styled.div`
  background-color: #fff;
  border-radius: 50%;
`;

export const ContainerSvg = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1000;
  transform: rotate(-90deg);
  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #ff8811;
    stroke-opacity: 0.3;
    stroke-width: 7px;
    stroke-linecap: square;
    transform: translate(5px, 5px);
    &:nth-child(2) {
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      stroke: #ff8811;
      stroke-opacity: 1;
    }
  }
`;
