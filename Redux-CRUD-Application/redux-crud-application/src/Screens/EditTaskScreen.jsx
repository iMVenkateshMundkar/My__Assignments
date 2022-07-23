import { AttachmentIcon, DeleteIcon } from "@chakra-ui/icons";
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
import {
  addSubTask,
  deleteSubTask,
  getTasks,
  updateTask,
} from "../Redux/AppReducer/appAction";

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

const EditTaskScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const tasks = useSelector((state) => state.App.tasks);
  const [checkBox, setCheckBox] = useState([]);
  const [newCurrentSubTaskTitle, setNewCurrentSubTaskTitle] = useState("");
  const [state, setter] = useReducer(reducer, initialState);

  const handleAddSubTasks = (e) => {
    e.preventDefault();
    if (newCurrentSubTaskTitle) {
      state.subTasks.push({
        subTask_title: newCurrentSubTaskTitle,
        status: false,
      });
      // dispatch(
      //   updateTask(id, {
      //     subTasks: state.subTasks,
      //   })
      // ).then(() => dispatch(getTasks()));
      dispatch(
        addSubTask(id, {
          subTasks: state.subTasks,
        })
      ).then(() => dispatch(getTasks()));
    }
  };

  const handleDeleteSubTask = (index) => {
    state.subTasks.splice(index, 1);
    // dispatch(
    //   updateTask(id, {
    //     subTasks: state.subTasks,
    //   })
    // ).then(() => dispatch(getTasks()));
    dispatch(
      deleteSubTask(id, {
        subTasks: state.subTasks,
      })
    ).then(() => dispatch(getTasks()));
  };

  const handleUpdateSubtaskStatus = (allCheckedBox) => {
    state.subTasks.forEach((item) => {
      allCheckedBox.includes(item.subTask_title)
        ? (item.status = true)
        : (item.status = false);
    });
    // dispatch(
    //   updateTask(id, {
    //     subTasks: state.subTasks,
    //   })
    // ).then(() => dispatch(getTasks()));
    dispatch(
      addSubTask(id, {
        subTasks: state.subTasks,
      })
    ).then(() => dispatch(getTasks()));
  };

  const handleUpdateTask = (type, value) => {
    if (type === "task&description") {
      dispatch(
        updateTask(id, {
          title: state.title,
          description: state.description,
        })
      ).then(() => dispatch(getTasks()));
    } else if (type === "status") {
      dispatch(
        updateTask(id, {
          task_status: value,
        })
      ).then(() => dispatch(getTasks()));
    } else if (type === "tags") {
      dispatch(
        updateTask(id, {
          tags: value,
        })
      ).then(() => dispatch(getTasks()));
    }
    // dispatch(updateTask(id, state)).then(() => dispatch(getTasks()));
  };

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());
    }
  }, [dispatch, getTasks]);

  useEffect(() => {
    if (tasks) {
      const currentTask = tasks.find((item) => item.id === Number(id));
      if (currentTask) {
        setter({ type: "title", payload: currentTask.title });
        setter({ type: "task_status", payload: currentTask.task_status });
        setter({ type: "description", payload: currentTask.description });
        setter({ type: "subTasks", payload: currentTask.subTasks });
        setter({ type: "tags", payload: currentTask.tags });
        let data = currentTask.subTasks
          .filter((item) => {
            return item.status && item.subTask_title;
          })
          .map((item) => item.subTask_title);
        setCheckBox(data);
      }
    }
  }, [tasks, id]);
  // console.log(checkBox);

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
              <Editable value={state.description} height={"50px"}>
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
              <Button
                width={"100%"}
                mt={"30px"}
                onClick={() => handleUpdateTask("task&description")}
              >
                Update Task
              </Button>
            </Box>
            <RadioGroup
              value={state.task_status}
              onChange={(e) => {
                setter({ type: "task_status", payload: e });
                handleUpdateTask("status", e);
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
                handleUpdateTask("tags", e);
              }}
              value={state.tags}
            >
              <Stack direction={"column"} spacing={[1, 4]} pl={"1rem"}>
                <Text fontWeight={"500"}>Tag (multiple possible)</Text>
                <Checkbox value={"Personal"}>Personal</Checkbox>
                <Checkbox value={"Official"}>Official</Checkbox>
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
            <Stack direction={"column"} p={"0% 20% 0% 6%"} spacing={[1, 4]}>
              <CheckboxGroup
                value={checkBox}
                onChange={(e) => {
                  setCheckBox(e);
                  handleUpdateSubtaskStatus(e);
                }}
              >
                {state.subTasks.length ? (
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
                  })
                ) : (
                  <p>No Sub Tasks</p>
                )}
              </CheckboxGroup>
            </Stack>
          </Stack>
        </Box>
        {/* Create Task */}
        <Box width={"150px"} height={"96vh"}>
          {/* <Stack padding={"10px 0px"} spacing={[1, 6]}>
            <Input type={"date"} />
            <Button onClick={() => handleUpdateTask}>Update Task</Button>
          </Stack> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default EditTaskScreen;
