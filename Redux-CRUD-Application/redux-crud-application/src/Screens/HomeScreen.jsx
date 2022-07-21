import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TaskCard from "../Components/TaskCard";
import { getTasks } from "../Redux/AppReducer/appAction";

const HomeScreen = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.App.tasks);

  const handleGetTasks = useCallback(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    if (tasks.length === 0) {
      handleGetTasks();
    }
  }, [handleGetTasks, tasks.length]);

  const filterByParamsTags = (task) => {
    const paramsTags = searchParams.getAll("tags");
    if (paramsTags.includes("All") || paramsTags.length === 0) {
      return task;
    }
    const data = task.tags.filter((tag) => {
      if (paramsTags.includes(tag)) {
        return true;
      }
      return false;
    });
    if (data.length) {
      return task;
    }
    return false;
  };

  return (
    <Box border="1px solid black" width="100%" height="100vh">
      <Flex justifyContent="space-evenly">
        {/* TODO */}
        <Box width="260px" height="96vh" marginTop="4vh">
          <Flex direction="column">
            <Box
              border="2px solid #7aa860"
              width="100%"
              backgroundColor="#d6e8d5"
              padding="5px 0px"
            >
              <Text textAlign="center" fontWeight="600">
                TODO
              </Text>
            </Box>
            <Box
              border="2px solid #030303"
              width="100%"
              height="90vh"
              borderTop="none"
            >
              {tasks.length > 0 &&
                tasks
                  .filter((item) => item.task_status === "Todo")
                  .filter(filterByParamsTags)
                  .map((item) => {
                    return (
                      <TaskCard key={item.id} {...item} colorScheme={"green"} />
                    );
                  })}
            </Box>
          </Flex>
        </Box>
        {/* IN-PROGRESS */}
        <Box width="260px" height="96vh" marginTop="4vh">
          <Flex direction="column">
            <Box
              border="2px solid #c7a953"
              width="100%"
              backgroundColor="#fff2cc"
              padding="5px 0px"
            >
              <Text textAlign="center" fontWeight="600">
                IN PROGRESS
              </Text>
            </Box>
            <Box
              border="2px solid #030303"
              width="100%"
              height="90vh"
              borderTop="none"
            >
              {tasks.length > 0 &&
                tasks
                  .filter((item) => item.task_status === "In Progress")
                  .filter(filterByParamsTags)
                  .map((item) => {
                    return (
                      <TaskCard
                        key={item.id}
                        {...item}
                        colorScheme={"orange"}
                      />
                    );
                  })}
            </Box>
          </Flex>
        </Box>
        {/* DONE */}
        <Box width="260px" height="96vh" marginTop="4vh">
          <Flex direction="column">
            <Box
              border="2px solid #6785b2"
              width="100%"
              backgroundColor="#dbe8fc"
              padding="5px 0px"
            >
              <Text textAlign="center" fontWeight="600">
                DONE
              </Text>
            </Box>
            <Box
              border="2px solid #030303"
              width="100%"
              height="90vh"
              borderTop="none"
            >
              {tasks.length > 0 &&
                tasks
                  .filter((item) => item.task_status === "Done")
                  .filter(filterByParamsTags)
                  .map((item) => {
                    return (
                      <TaskCard key={item.id} {...item} colorScheme={"blue"} />
                    );
                  })}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeScreen;
