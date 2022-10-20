import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loadAns } from "../redux/calculatorRedux/Calculator.actions";

export default function ButtonTitle2({ title }) {
  const handleAnswer = (e) => {
    e.preventDefault();
    // alert(number)
    dispatch(loadAns());
  };
  const dispatch = useDispatch();
  return (
    <Button
      onClick={handleAnswer}
      paddingX="150"
      paddingY="50"
      bg="#D13F30"
      borderRadius="10"
      fontSize={50}
      textColor="white"
      fontWeight="bold"
    >
      {title}
    </Button>
  );
}
