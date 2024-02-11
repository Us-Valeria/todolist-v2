import { List } from "antd";
import TaskItem from "./TaskItem";
import React, { useContext } from "react";
import { TasksContext } from "./TasksContext";

function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <div>
      {tasks && tasks.length > 0 ? (
        <List
          size="large"
          bordered
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <TaskItem key={task.id} task={task} />
            </List.Item>
          )}
        />
      ) : (
        <p>Список задач пуст</p>
      )}
    </div>
  );
}
export default TaskList;
