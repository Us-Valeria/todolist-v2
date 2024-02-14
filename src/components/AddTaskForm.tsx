import React from "react";
import { Button, Form, Input } from "antd";
import { useTasks } from "../stores/useTasks";

function AddTaskForm() {
  const [form] = Form.useForm();
  const addTask = useTasks((state) => state.addTask);

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
