import React from "react";
import { Typography } from "antd";
import AddTaskForm from "./components/AddTaskForm";
import FilterTaskList from "./components/FilterTaskList";

const { Title } = Typography;
function App() {
  return (
    <>
      <Title style={{ color: "#0958d9", textAlign: "center" }}>
        Список задач
      </Title>
      <AddTaskForm />
      <FilterTaskList />
    </>
  );
}

export default App;
