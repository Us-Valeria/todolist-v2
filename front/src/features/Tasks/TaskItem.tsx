import React, { useState } from 'react';
import { Checkbox, Typography, List } from 'antd';
import type { Task } from '../../models/Task';
import EditTaskModal from './EditTaskModal';
import { useUpdateTaskMutation } from '../../api/tasksApi';

type Props = {
  task: Task;
};

const { Text } = Typography;

function TaskItem({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTask] = useUpdateTaskMutation();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <List.Item onClick={handleEditClick}>
        <List.Item.Meta
          avatar={
            <Checkbox
              key="edit-status-task"
              onClick={(e) => e.stopPropagation()}
              onChange={() => {
                updateTask({
                  _id: task._id,
                  completed: !task.completed,
                });
              }}
              checked={task.completed}
            />
          }
          title={<Text delete={task.completed}>{task.title}</Text>}
          description={task.text}
        />
      </List.Item>
      {isEditing && (
        <EditTaskModal task={task} onClose={() => setIsEditing(false)} />
      )}
    </>
  );
}

export default TaskItem;
