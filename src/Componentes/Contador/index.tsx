import React, { useState, useEffect, useCallback } from "react";

import Circle from "../CircleProgression/index";
import {
  ContainerContador,
  ContainerTime,
  ContainerCircleProgress,
  Time,
  NameTime,
} from "./styles";

function Contador() {
  const date = new Date();

  const [currentSecond, setCurrentSecond] = useState(date.getSeconds());
  const [currentMinuts, setCurrentMinuts] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);

  const timeCount = () => {
    setCurrentTime((prevTime) => {
      if (prevTime === 23) {
        setCurrentDay((prevDay) => prevDay + 1);
        return 0;
      }
      return prevTime + 1;
    });
  };

  const minutsCount = () => {
    setCurrentMinuts((prevMinuts) => {
      if (prevMinuts === 59) {
        timeCount();
        return 0;
      } else {
        return prevMinuts + 1;
      }
    });
  };

  const timer = useCallback(() => {
    setCurrentSecond((prevTime) => {
      if (prevTime === 59) {
        minutsCount();
        return 0;
      }
      return prevTime + 1;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInterval(() => timer(), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return (
    <ContainerContador>
      <ContainerTime>
        <ContainerCircleProgress>
          <Time>{currentDay}</Time>
          <Circle percent={(currentDay * 100) / 30} />
        </ContainerCircleProgress>
        <NameTime>Dias</NameTime>
      </ContainerTime>
      <ContainerTime>
        <ContainerCircleProgress>
          <Time>{currentTime}</Time>
          <Circle percent={(currentTime * 100) / 24} />
        </ContainerCircleProgress>
        <NameTime>Horas</NameTime>
      </ContainerTime>
      <ContainerTime>
        <ContainerCircleProgress>
          <Time>{currentMinuts}</Time>
          <Circle percent={(currentMinuts * 100) / 60} />
        </ContainerCircleProgress>
        <NameTime>Minutos</NameTime>
      </ContainerTime>
      <ContainerTime>
        <ContainerCircleProgress>
          <Time>{currentSecond}</Time>
          <Circle percent={(currentSecond * 100) / 60} />
        </ContainerCircleProgress>
        <NameTime>Segundos</NameTime>
      </ContainerTime>
    </ContainerContador>
  );
}

export default Contador;
