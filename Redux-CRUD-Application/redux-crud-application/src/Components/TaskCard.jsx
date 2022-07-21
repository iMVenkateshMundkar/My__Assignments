import {
  Badge,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const TaskCard = ({ title, description, tags, subTasks, colorScheme }) => {
  const [checkBox, setCheckBox] = useState(() => {
    let data = subTasks
      .filter((item) => {
        return item.status && item.subTask_title;
      })
      .map((item) => item.subTask_title);
    return data;
  });
  return (
    <Box
      border={`1px solid ${colorScheme}`}
      width={"85%"}
      padding={"15px"}
      margin={"auto"}
      marginTop={"20px"}
    >
      <Flex justifyContent={"space-between"}>
        <Text>{title}</Text>
        <EditIcon />
      </Flex>
      <Box>
        <Stack direction={"row"}>
          {tags.length &&
            tags.map((item, index) => {
              return (
                <Badge key={index} colorScheme={colorScheme}>
                  {item}
                </Badge>
              );
            })}
        </Stack>
      </Box>
      <Text>{description}</Text>
      <Box>
        <CheckboxGroup defaultValue={checkBox}>
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
    </Box>
  );
};

export default TaskCard;
