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
  onClose: () => void;
};

function EditTaskModal({ task, onClose }: Props) {
  const [form] = Form.useForm();
  const { changeTask, removeTask } = useTasks();

  const handleSave = () => {
    form.validateFields().then((values) => {
      changeTask({ ...values, completed: task.completed }, task._id);
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      open
      title="Редактирование"
      okText="OK"
      cancelText="Отменить"
      onCancel={onClose}
      footer={[
        <Button
          key="remove"
          onClick={() => {
            removeTask(task._id);
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
          name="text"
          initialValue={task.text}
          rules={[
            {
              whitespace: true,
            },
          ]}
        >
          <TextArea />
        </Form.Item>
      </Form>
      <p>Изменено: {dayjs(task.createdAt).fromNow()}</p>
    </Modal>
  );
}

export default EditTaskModal;
