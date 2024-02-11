import React, { useContext } from "react";
import { Button, Form, Input } from "antd";
import { TasksDispatchContext } from "./TasksContext";

function AddTaskForm() {
  const dispatch = useContext(TasksDispatchContext);
  const [form] = Form.useForm();

  const addTask = ({ text }: { text: string }) => {
    dispatch &&
      dispatch({
        type: "added",
        task: {
          id: String(Date.now()),
          text: text,
          completed: false,
        },
      });
  };

  return (
    <div>
      <Form
        layout="horizontal"
        form={form}
        onFinish={({ text }) => {
          addTask({ text });
          form.resetFields();
        }}
      >
        <Form.Item name="text">
          <Input type="text" placeholder="Введите задачу..." />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Добавить</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddTaskForm;
