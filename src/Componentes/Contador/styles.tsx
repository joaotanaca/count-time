import styled from "styled-components";

export const ContainerContador = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fdfffc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #131d47;
`;

export const ContainerTime = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
`;

export const ContainerCircleProgress = styled.div`
  position: relative;
  border-radius: 50%;
  padding: 5px;
  padding-bottom: 1.5px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
`;

export const Time = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

export const NameTime = styled.h2``;
