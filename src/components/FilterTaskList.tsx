import React, { useState, useEffect } from "react";
import { Flex, GlobalToken, Radio, RadioChangeEvent, theme } from "antd";
import { css } from "@emotion/react";
import TaskList from "./TaskList";
import { useTasks } from "../stores/useTasks";

const styles = (token: GlobalToken) => ({
  content: css`
    margin-top: ${token.marginLG}px;
  `,
  list: css`
    margin-top: ${token.marginXXS}px;
  `,
});

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

  const { token } = theme.useToken();

  return (
    <div css={styles(token).content}>
      <Flex gap="small" align="center">
        <Radio.Group defaultValue={filter} onChange={onChange}>
          <Radio.Button value="all">Все</Radio.Button>
          <Radio.Button value="active">В процессе</Radio.Button>
          <Radio.Button value="completed">Завершенные</Radio.Button>
        </Radio.Group>
      </Flex>
      <div css={styles(token).list}>
        <TaskList tasks={filteredTasks} />
      </div>
    </div>
  );
}

export default FilterTaskList;
