import {
  Badge,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addSubTask,
  getTasks,
  updateTask,
} from "../Redux/AppReducer/appAction";

const TaskCard = ({
  id,
  title,
  description,
  tags,
  subTasks,
  colorScheme = "green",
}) => {
  const [checkBox, setCheckBox] = useState(() => {
    let data = subTasks
      .filter((item) => {
        return item.status && item.subTask_title;
      })
      .map((item) => item.subTask_title);
    return data;
  });
  const dispatch = useDispatch();

  const handleUpdateSubtaskStatus = (allCheckedBox) => {
    subTasks.forEach((item) => {
      allCheckedBox.includes(item.subTask_title)
        ? (item.status = true)
        : (item.status = false);
    });
    // dispatch(
    //   updateTask(id, {
    //     subTasks,
    //   })
    // ).then(() => dispatch(getTasks()));
    dispatch(
      addSubTask(id, {
        subTasks,
      })
    ).then(() => dispatch(getTasks()));
  };

  return (
    <Box
      border={`1px solid ${colorScheme}`}
      width={"85%"}
      padding={"15px"}
      margin={"auto"}
      marginTop={"20px"}
    >
      <Stack direction={"column"} spacing={[1, 2]}>
        <Flex justifyContent={"space-between"}>
          <Text>{title}</Text>
          <Link to={`/tasks/${id}`}>
            <EditIcon />
          </Link>
        </Flex>
        <Box>
          <Grid templateColumns={"repeat(2, 1fr)"} gap={"5px"} width={"80%"}>
            {tags.length &&
              tags.map((item, index) => {
                return (
                  <Badge key={index} colorScheme={colorScheme}>
                    {item}
                  </Badge>
                );
              })}
          </Grid>
        </Box>
        <Text>{description}</Text>
        <Box>
          <CheckboxGroup
            defaultValue={checkBox}
            onChange={(e) => handleUpdateSubtaskStatus(e)}
          >
            {subTasks.length &&
              subTasks.map((item, index) => {
                return (
                  <Checkbox key={index} size="md" value={item.subTask_title}>
                    {item.subTask_title}
                  </Checkbox>
                );
              })}
          </CheckboxGroup>
        </Box>
      </Stack>
    </Box>
  );
};

export default TaskCard;
