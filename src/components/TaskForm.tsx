import React from "react";
import { Button, Form, Input } from "antd";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFinish: () => void;
};

function TaskForm({ ...props }: Props) {
  const [form] = Form.useForm();

  return (
    <Form
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      layout="inline"
      form={form}
      onFinish={() => {
        props.onFinish();
        form.resetFields();
      }}
    >
      <Form.Item name="text">
        <Input
          style={{ width: "40vw" }}
          type="text"
          defaultValue={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
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
