import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const TagBox = ({
  tagName,
  colorScheme,
  tasks,
  handleTagChange,
  selectedTags,
}) => {
  return (
    <Box
      onClick={() => {
        handleTagChange(tagName);
      }}
      backgroundColor={
        selectedTags.includes(tagName)
          ? colorScheme + ".300"
          : colorScheme + ".100"
      }
      cursor={"pointer"}
    >
      <Flex padding="3px 15px">
        <Text fontWeight={"400"} fontSize={"17px"}>
          {tagName}
        </Text>
        <Text marginLeft="auto">{tasks.length}</Text>
      </Flex>
    </Box>
  );
};

export default TagBox;
