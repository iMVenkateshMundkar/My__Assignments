import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProfile } from "../Redux/AuthReducer/authAction";
import TagBox from "./TagBox";

const SideBar = () => {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const tasks = useSelector((state) => state.App.tasks);
  const personalTasks = tasks.filter((item) => item.tags.includes("Personal"));
  const officialTasks = tasks.filter((item) => item.tags.includes("Official"));
  const otherTasks = tasks.filter((item) => item.tags.includes("Other"));

  //   const token = useSelector((state) => state.Auth.token);
  //   const dispatch = useDispatch();
  //   const profile = useSelector((state) => state.Auth.userProfile);

  //   useEffect(() => {
  //     if (token && isAuth) {
  //       dispatch(getProfile("masai-school", token));
  //     }
  //   }, [dispatch, getProfile]);
  //   console.log(isAuth, token);
  //   console.log(profile);

  const [serachParams, setSearchParams] = useSearchParams();
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (tag) => {
    let newSelectedTags = [...selectedTags];
    if (selectedTags.includes(tag)) {
      newSelectedTags.splice(newSelectedTags.indexOf(tag), 1);
    } else {
      newSelectedTags.push(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  useEffect(() => {
    if (selectedTags) {
      setSearchParams({ tags: selectedTags });
    }
  }, [selectedTags, setSearchParams]);

  return (
    <Box border="1px solid red" width="250px" height="100vh">
      <Stack direction="column">
        <Box height="15vh" border="1px solid red">
          {/* USER PROFILE */}
        </Box>
        <Box height="70vh" border="1px solid blue" width="100%">
          <Flex direction="column" gap="7px" margin={"7px"}>
            <TagBox
              tagName="All"
              colorScheme={"blue"}
              tasks={tasks}
              handleTagChange={() => handleTagChange("All")}
              selectedTags={selectedTags}
            />
            <TagBox
              tagName="Personal"
              colorScheme={"green"}
              tasks={personalTasks}
              handleTagChange={() => handleTagChange("Personal")}
              selectedTags={selectedTags}
            />
            <TagBox
              tagName="Official"
              colorScheme={"gray"}
              tasks={officialTasks}
              handleTagChange={() => handleTagChange("Official")}
              selectedTags={selectedTags}
            />
            <TagBox
              tagName="Other"
              colorScheme={"orange"}
              tasks={otherTasks}
              handleTagChange={() => handleTagChange("Other")}
              selectedTags={selectedTags}
            />
          </Flex>
        </Box>
        <Box height="10vh" border="1px solid red">
          <Button width="100%">{isAuth && "LOGOUT"}</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
