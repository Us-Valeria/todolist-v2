import React, { useEffect, useState } from 'react';
import { List, theme } from 'antd';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import type { GlobalToken } from 'antd';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TaskItem from './TaskItem';
import useFilterTasks from '../Filter/useFilterTasks';
import useSort from '../Sort/useSort';
import useSortDirection from '../Sort/useSortDirection';
import {
  useGetTasksQuery,
  useUpdateOrderListMutation,
} from '../../api/tasksApi';
import { selectSort } from '../Sort/sortSlice';
import { selectFilter } from '../Filter/filterSlice';
import type { Task } from '../../models/Task';

const styles = (token: GlobalToken) => ({
  list: css`
    margin-top: ${token.marginXS}px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 75vh;
  `,
});

function TaskList() {
  const { token } = theme.useToken();
  const [showList, setShowList] = useState<Task[]>([]);
  const { data = [], isLoading } = useGetTasksQuery();

  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);

  const filteredTaskList = useFilterTasks(data, filter);
  const sortedList = useSort(filteredTaskList, sort.key);
  const sortDirectionList = useSortDirection(sortedList, sort.direction);

  useEffect(() => {
    if (sortDirectionList.length > 0) {
      setShowList(sortDirectionList);
    }
  }, [sortDirectionList]);

  const [updateOrder] = useUpdateOrderListMutation();

  const newOrderList = (
    prev: Task[],
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier | undefined,
  ) => {
    const activeIndex = prev.findIndex((i) => i._id === activeId);
    const overIndex = prev.findIndex((i) => i._id === overId);
    return arrayMove(prev, activeIndex, overIndex);
  };

  const onDragEnd = async ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const newList = newOrderList(showList, active.id, over?.id);
      setShowList(newList);
      await updateOrder({ active, over });
    }
  };

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  return (
    <DndContext onDragEnd={onDragEnd} sensors={[sensor]}>
      <SortableContext
        items={showList.map((task) => task._id)}
        strategy={verticalListSortingStrategy}
      >
        <List
          css={styles(token).list}
          size="large"
          bordered
          loading={isLoading}
          dataSource={showList}
          renderItem={(task) => <TaskItem key={task._id} task={task} />}
          locale={{ emptyText: 'Список пуст' }}
        />
      </SortableContext>
    </DndContext>
  );
}

export default TaskList;
