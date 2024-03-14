import React, { useState } from 'react';
import { Checkbox, Typography, List, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import type { Task } from '../models/Task';
import useTasks from '../stores/useTasks';
import EditTaskModal from './EditTaskModal';

type Props = {
  task: Task;
};

const { Text } = Typography;

function TaskItem({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const changeStatusTask = useTasks((state) => state.changeStatusTask);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <List.Item
        actions={[
          <Button
            shape="circle"
            key="edit-task"
            icon={<EditOutlined />}
            onClick={handleEditClick}
          />,
        ]}
      >
        <List.Item.Meta
          avatar={
            <Checkbox
              key="edit-status-task"
              onChange={() => changeStatusTask(task.id)}
              checked={task.completed}
            />
          }
          title={<Text delete={task.completed}>{task.title}</Text>}
          description={task.description}
        />
      </List.Item>
      {isEditing && (
        <EditTaskModal
          task={task}
          isEditing={isEditing}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
}

export default TaskItem;
