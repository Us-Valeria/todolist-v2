import React from "react";
import { Button, Form, Input } from "antd";

type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFinish: () => void;
};

function TaskForm({ value, onChange, onFinish }: Props) {
  const [form] = Form.useForm();

  return (
    <Form
      layout="inline"
      form={form}
      onFinish={() => {
        onFinish();
        form.resetFields();
      }}
    >
      <Form.Item
        name="text"
        initialValue={value}
        rules={[{ required: true, whitespace: true, message: "Введите текст" }]}
      >
        <Input type="text" onChange={onChange} />
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
