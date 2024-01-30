import { Button, Checkbox, Typography } from "antd";
import React from "react";

function TaskItem(props) {
  const { Text } = Typography;
  return (
    <>
      <Checkbox />
      <Text>
        {props.number}. {props.task.item}
      </Text>
      <Button onClick={() => props.remove(props.task)}>Удалить</Button>
    </>
  );
}
export default TaskItem;
