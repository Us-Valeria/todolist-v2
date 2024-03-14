import React from 'react';
import { Modal, Input, Form, Button } from 'antd';
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
  onClose: () => void;
};

function EditTaskModal({ task, isEditing, onClose }: Props) {
  const [form] = Form.useForm();
  const changeTask = useTasks((state) => state.changeTask);
  const removeTask = useTasks((state) => state.removeTask);

  const handleSave = () => {
    form.validateFields().then((values) => {
      changeTask(values, task.id);
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      title="Редактирование"
      open={isEditing}
      okText="OK"
      cancelText="Отменить"
      footer={[
        <Button
          key="remove"
          onClick={() => {
            removeTask(task.id);
            onClose();
          }}
          danger
        >
          Удалить
        </Button>,
        <Button key="cancel" onClick={onClose}>
          Отменить
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Сохранить
        </Button>,
      ]}
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
