import { List, Flex, Radio, RadioChangeEvent } from "antd";
import TaskItem from "./TaskItem";
import React, { useState, useEffect } from "react";
import { useTasks } from "../stores/useTasks";

function TaskList() {
  const tasks = useTasks((state) => state.tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filter, setFilter] = useState("all");

  const onChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
    filterTask(e.target.value);
  };

  const filterTask = (value: string) => {
    if (tasks) {
      switch (value) {
        case "all": {
          return setFilteredTasks(tasks);
        }
        case "active": {
          return setFilteredTasks(tasks.filter((task) => !task.completed));
        }
        case "completed": {
          return setFilteredTasks(tasks.filter((task) => task.completed));
        }
        default:
          throw new Error("Unknown status: " + filter);
      }
    }
  };

  useEffect(() => {
    filterTask(filter);
  }, [tasks]);

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Flex gap="middle" align="center">
        <Radio.Group
          defaultValue={filter}
          onChange={onChange}
          buttonStyle="solid"
        >
          <Radio.Button value="all">Все</Radio.Button>
          <Radio.Button value="active">В процессе</Radio.Button>
          <Radio.Button value="completed">Завершенные</Radio.Button>
        </Radio.Group>
      </Flex>

      <div>
        {filteredTasks && filteredTasks.length > 0 ? (
          <List
            size="large"
            bordered
            dataSource={filteredTasks}
            renderItem={(task) => (
              <List.Item>
                <TaskItem key={task.id} task={task} />
              </List.Item>
            )}
          />
        ) : (
          <p style={{ textAlign: "center" }}>Список задач пуст</p>
        )}
      </div>
    </div>
  );
}
export default TaskList;
