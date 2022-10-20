import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export default function ButtonTitle({ title, btn, sym }) {
  const dispatch = useDispatch();

  return (
    // <Button
    //   onClick={() => dispatch({ btn }({ sym }))}
    //   padding="70"
    //   bg="#E9E3D3"
    //   borderRadius="10"
    //   fontSize={30}
    //   textColor="#252d44"
    // >
    //   {title}
    // </Button>
    <Button
    onClick={() => dispatch({ btn }({ sym }))}
    padding="70"
    bg="#E9E3D3"
    borderRadius="10"
    fontSize={30}
    textColor="#252d44"
  >
    {title}
  </Button>
  );
}
