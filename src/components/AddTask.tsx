import React from 'react';
import type { GlobalToken } from 'antd';
import { Form, Input, theme } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import useTasks from '../stores/useTasks';

const style = (token: GlobalToken) => ({
  form: css`
    margin-bottom: ${token.marginSM}px;
  `,
  input: css`
    width: 100%;
  `,
  icon: css`
    color: ${token.colorIcon};
  `,
});

function AddTask() {
  const { token } = theme.useToken();
  const addTask = useTasks((state) => state.addTask);
  const [form] = Form.useForm();
  return (
    <Form
      layout="inline"
      css={style(token).form}
      form={form}
      autoComplete="off"
      onFinish={({ title }) => {
        addTask(title);
        form.resetFields();
      }}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, whitespace: true, message: 'Введите текст' }]}
        css={style(token).input}
      >
        <Input
          type="title"
          prefix={<PlusOutlined css={style(token).icon} />}
          placeholder="Добавить задачу"
        />
      </Form.Item>
    </Form>
  );
}
export default AddTask;
