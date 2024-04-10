import React, { useState } from 'react';
import { Checkbox, Typography, List } from 'antd';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
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
  const {
    attributes,
    listeners,
    setNodeRef,
    transition,
    transform,
    isDragging,
  } = useSortable({
    id: task._id,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? 'move' : 'pointer',
  };

  return (
    <>
      <List.Item
        onClick={handleEditClick}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
      >
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
