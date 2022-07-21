import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Editable,
  EditablePreview,
  EditableTextarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { register } from "../Redux/AuthReducer/authAction";
import { useDispatch } from "react-redux";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/authActionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "name":
      return {
        ...state,
        name: payload,
      };

    case "email":
      return {
        ...state,
        email: payload,
      };

    case "password":
      return {
        ...state,
        password: payload,
      };

    case "username":
      return {
        ...state,
        username: payload,
      };

    case "mobile":
      return {
        ...state,
        mobile: payload,
      };

    case "description":
      return {
        ...state,
        description: payload,
      };

    default:
      return state;
  }
};

const initialState = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: 0,
  description: "",
};

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  // const [showCPassword, setShowCPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  // const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        navigate("/login", { replace: true });
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={state.name}
                    onChange={(e) => {
                      setter({ type: "name", payload: e.target.value });
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="userName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input
                    type="text"
                    value={state.username}
                    onChange={(e) => {
                      setter({ type: "username", payload: e.target.value });
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <Box>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile</FormLabel>
                <Input
                  type="number"
                  value={state.mobile}
                  onChange={(e) => {
                    setter({ type: "mobile", payload: e.target.value });
                  }}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) => {
                    setter({ type: "email", payload: e.target.value });
                  }}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={state.password}
                    onChange={(e) => {
                      setter({ type: "password", payload: e.target.value });
                    }}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Box>
            {/* <Box>
              <FormControl id="cPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showCPassword ? "text" : "password"}
                    value={state.cPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowCPassword((showCPassword) => !showCPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Box> */}
            <Box>
              <Editable defaultValue="Description">
                <EditablePreview />
                <EditableTextarea
                  value={state.desription}
                  onChange={(e) =>
                    setter({ type: "description", payload: e.target.value })
                  }
                />
              </Editable>
            </Box>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login">
                  <Link color={"blue.400"}>Login</Link>
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
