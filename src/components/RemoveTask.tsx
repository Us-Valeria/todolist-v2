import React from 'react';
import { Popconfirm, Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import useTasks from '../stores/useTasks';

function RemoveTask({ id }: { id: string }) {
  const removeTask = useTasks((state) => state.removeTask);
  const confirm = () => {
    removeTask(id);
    message.success('Задача удалена');
  };
  return (
    <Popconfirm
      key="remove-task"
      title="Удалить задачу?"
      onConfirm={confirm}
      okText="Да"
      cancelText="Нет"
    >
      <Button
        key="remove-task"
        danger
        type="text"
        icon={<DeleteOutlined />}
        shape="circle"
      />
    </Popconfirm>
  );
}
export default RemoveTask;
