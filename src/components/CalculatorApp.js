import React from "react";
import { Flex, Box, Input, Grid, Button } from "@chakra-ui/react";
import ButtonTitle2 from "./ButtonTitle2";
import ButtonTitle3 from "./ButtonTitle3";
import { useSelector } from "react-redux";
import { CALCULATOR_KEY } from "../redux/calculatorRedux/Calculator.reducer";
import {
  loadButtons,
  loadBackspace,
  loadAns,
  loadClear,
} from "../redux/calculatorRedux/Calculator.actions";
import { useDispatch } from "react-redux";


export const CalculatorApp = () => {
  const dispatch = useDispatch();

  const viewCalculator = useSelector((state) => {
    return state[CALCULATOR_KEY];
  });

  return (
    <Box
    >
      <Flex
        w="50%"
        backgroundColor="#3B4664"
        marginX="auto"
        borderRadius="30"
        direction="column"
        padding="50px"
      >
        <Input
          placeholder="0"
          _placeholder={{ color: "inherit" }}
          fontSize="50px"
          fontWeight="bold"
          textColor="#FFFFFF"
          textAlign="right"
          borderRadius="20"
          padding="10"
          backgroundColor="#191F32"
          variant="unstyled"
          value={
            viewCalculator.ans.length === 0
              ? viewCalculator.number
              : viewCalculator.ans
          }
        ></Input>
        <Flex
          backgroundColor="#191F32"
          marginTop={["5px", "50px"]}
          padding={["5", "15"]}
          borderRadius="20"
          direction="column"
        >
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={[3, 4, 5, 8]}
            padding={[5, 10, 20, 30]}
            marginX="auto"
          >
            <Button
              onClick={() => dispatch(loadButtons(7))}
              padding='10'
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              7
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(8))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              8
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(9))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              9
            </Button>
            <Button
              onClick={() => dispatch(loadBackspace('DEL'))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={50}
              textColor="#252d44"
            >
              DEL
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(4))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              4
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(5))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              5
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(6))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              6
            </Button>
            <Button
              onClick={() => dispatch(loadButtons('*'))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
              
            >
              x
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(1))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              1
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(2))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              2
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(3))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              3
            </Button>
            <Button
              onClick={() => dispatch(loadButtons('-'))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              -
            </Button>
            <Button
              onClick={() => dispatch(loadButtons('.'))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              .
            </Button>
            <Button
              onClick={() => dispatch(loadButtons(0))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              0
            </Button>
            <Button
              onClick={() => dispatch(loadButtons('/'))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              /
            </Button>
            <Button
              onClick={() => dispatch(loadButtons('+'))}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={50}
              textColor="#252d44"
            >
              +
            </Button>

          
          </Grid>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={5}
            paddingBottom='4'
            marginX="auto"
          >
            <ButtonTitle2 title="RESET" btn={loadClear}></ButtonTitle2>
            <ButtonTitle3 title="=" btn={loadAns}></ButtonTitle3>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};
