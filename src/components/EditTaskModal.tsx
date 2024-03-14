import React from 'react';
import { Modal, Input, Form } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import useTasks from '../stores/useTasks';
import type { Task } from '../models/Task';

dayjs.extend(relativeTime);

const { TextArea } = Input;

type Props = {
  task: Task;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

function EditTaskModal({ task, isEditing, setIsEditing }: Props) {
  const [form] = Form.useForm();
  const changeTask = useTasks((state) => state.changeTask);

  const handleSave = () => {
    form.validateFields().then((values) => {
      changeTask(values, task.id);
      form.resetFields();
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Modal
      title="Редактирование"
      open={isEditing}
      onOk={handleSave}
      onCancel={handleCancel}
      okText="OK"
      cancelText="Отменить"
    >
      <Form form={form} onFinish={handleSave}>
        <Form.Item
          name="title"
          initialValue={task.title}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Введите текст',
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="description"
          initialValue={task.description}
          rules={[
            {
              whitespace: true,
            },
          ]}
        >
          <TextArea />
        </Form.Item>
      </Form>
      <p>Добавлено: {dayjs(task.created).fromNow()}</p>
    </Modal>
  );
}

export default EditTaskModal;
