import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTasks, updateTask } from "../Redux/AppReducer/appAction";

const initialState = {
  title: "",
  description: "",
  task_status: "",
  tags: [],
  subTasks: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "title":
      return {
        ...state,
        title: payload,
      };
    case "description":
      return {
        ...state,
        description: payload,
      };
    case "task_status":
      return {
        ...state,
        task_status: payload,
      };
    case "tags":
      return {
        ...state,
        tags: payload,
      };
    case "subTasks":
      return {
        ...state,
        subTasks: payload,
      };

    default:
      return state;
  }
};

const CreateTaskScreen = () => {
  const dispatch = useDispatch();
  const [checkBox, setCheckBox] = useState([]);
  const [newCurrentSubTaskTitle, setNewCurrentSubTaskTitle] = useState("");
  const [state, setter] = useReducer(reducer, initialState);

  const handleAddSubTasks = (e) => {
    e.preventDefault();
    state.subTasks = [
      ...state.subTasks,
      {
        subTask_title: newCurrentSubTaskTitle,
        status: false,
      },
    ];
  };

  const handleDeleteSubTask = () => {};

  const handleCreateNewTask = () => {
    console.log(state);
  };

  return (
    <Box border={"1px solid green"} width={"100%"} height={"100vh"}>
      <Flex justifyContent={"space-evenly"} mt={"4vh"}>
        {/* Title, Description */}
        <Box width={"230px"} height={"96vh"}>
          <Stack direction={"column"} padding={"10px 0px"} spacing={[1, 7]}>
            <Input
              value={state.title}
              placeholder="New Title"
              onChange={(e) =>
                setter({ type: "title", payload: e.target.value })
              }
            />
            <Box>
              <Editable
                value={state.description}
                height={"50px"}
                placeholder={"Descriptions"}
              >
                <EditablePreview />
                <EditableTextarea
                  onChange={(e) =>
                    setter({
                      type: "description",
                      payload: e.target.value,
                    })
                  }
                />
              </Editable>
            </Box>
            <RadioGroup
              value={state.task_status}
              onChange={(e) => {
                setter({ type: "task_status", payload: e });
              }}
            >
              <Stack direction={"column"} spacing={[1, 3]} pl={"1rem"}>
                <Text fontWeight={"500"}>Status</Text>
                <Radio value={"Todo"}>Todo</Radio>
                <Radio value={"In Progress"}>In Progress</Radio>
                <Radio value={"Done"}>Done</Radio>
              </Stack>
            </RadioGroup>
            <CheckboxGroup
              onChange={(e) => {
                setter({ type: "tags", payload: e });
              }}
            >
              <Stack direction={"column"} spacing={[1, 4]} pl={"1rem"}>
                <Text fontWeight={"500"}>Tag (multiple possible)</Text>
                <Checkbox value={"Official"}>Official</Checkbox>
                <Checkbox value={"Personal"}>Personal</Checkbox>
                <Checkbox value={"Others"}>Others</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Stack>
        </Box>
        {/* Subtasks */}
        <Box width={"300px"} height={"96vh"}>
          <Stack direction={"column"} padding={"10px 0px"} spacing={[1, 5]}>
            <form onSubmit={handleAddSubTasks}>
              <Flex justifyContent={"space-between"}>
                <Input
                  placeholder="Add new sub task"
                  onChange={(e) => setNewCurrentSubTaskTitle(e.target.value)}
                />
                <Button type="submit" ml={"0.5rem"}>
                  Add
                </Button>
              </Flex>
            </form>
            <Stack direction={"column"} p={"0% 5%"} spacing={[1, 4]}>
              <CheckboxGroup value={checkBox} onChange={(e) => setCheckBox(e)}>
                {state.subTasks.length &&
                  state.subTasks.map((item, index) => {
                    return (
                      <Flex key={index} justifyContent={"space-between"}>
                        <Checkbox size="md" value={item.subTask_title}>
                          {item.subTask_title}
                        </Checkbox>
                        <DeleteIcon
                          cursor={"pointer"}
                          onClick={() => handleDeleteSubTask(index)}
                        />
                      </Flex>
                    );
                  })}
              </CheckboxGroup>
            </Stack>
          </Stack>
        </Box>
        {/* Create Task */}
        <Box width={"150px"} height={"96vh"}>
          <Stack padding={"10px 0px"} spacing={[1, 6]}>
            <Input type={"date"} />
            <Button onClick={() => handleCreateNewTask()}>
              Create New Task
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateTaskScreen;
