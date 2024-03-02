import React, { useState, useEffect } from "react";
import { Flex, Radio, RadioChangeEvent } from "antd";
import { css } from "@emotion/react";
import TaskList from "./TaskList";
import { useTasks } from "../stores/useTasks";

const styles = {
  content: css`
    margin: 1% 2%;
    @media (max-width: 720px) {
      margin: 0;
    }
  `,
  list: css`
    margin-top: 2px;
  `,
};

function FilterTaskList() {
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
    <div css={styles.content}>
      <Flex gap="small" align="center">
        <Radio.Group defaultValue={filter} onChange={onChange}>
          <Radio.Button value="all">Все</Radio.Button>
          <Radio.Button value="active">В процессе</Radio.Button>
          <Radio.Button value="completed">Завершенные</Radio.Button>
        </Radio.Group>
      </Flex>
      <div css={styles.list}>
        <TaskList tasks={filteredTasks} />
      </div>
    </div>
  );
}

export default FilterTaskList;
