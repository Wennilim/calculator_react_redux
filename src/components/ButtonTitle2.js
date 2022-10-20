import React from "react";
import { Button } from "@chakra-ui/react";
import { loadClear } from "../redux/calculatorRedux/Calculator.actions";
import { useDispatch } from "react-redux";

export default function ButtonTitle2({ title }) {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(loadClear())}
      paddingX="50"
      paddingY="50"
      bg="#647298"
      borderRadius="10"
      textColor="white"
      fontSize={50}
      fontWeight="bold"
    >
      {title}
    </Button>
  );
}
