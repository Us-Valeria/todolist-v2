import React from "react";
import { Button, Form, Input } from "antd";

type Props = {
  value?: string;
  onSave: (value: string) => void;
};

function TaskForm({ value, onSave }: Props) {
  const [form] = Form.useForm();

  return (
    <Form
      layout="inline"
      form={form}
      autoComplete="off"
      onFinish={() => {
        onSave(form.getFieldValue("text"));
        form.resetFields();
      }}
    >
      <Form.Item
        name="text"
        initialValue={value}
        rules={[{ required: true, whitespace: true, message: "Введите текст" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TaskForm;
