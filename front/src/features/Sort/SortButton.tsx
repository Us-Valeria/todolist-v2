import React from 'react';
import { Button } from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSort, selectSort } from './sortSlice';
import { SORT_DIRECTION } from '../../models/SortDirection';
import type { SortKey } from '../../models/SortKey';

type SortButtonProps = {
  sortKey: SortKey;
  children: React.ReactNode;
};

function SortButton({ sortKey, children }: SortButtonProps) {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const getNextDirection = () => {
    switch (sort.direction) {
      case SORT_DIRECTION.ASC:
        return SORT_DIRECTION.DESC;
      case SORT_DIRECTION.DESC:
        return null;
      default:
        return SORT_DIRECTION.ASC;
    }
  };

  const handleSortClick = (clickedSortKey: SortKey) => {
    dispatch(
      setSort({
        key: clickedSortKey,
        direction: sort.key === sortKey ? getNextDirection() : null,
      }),
    );
  };

  const isCurrentSortKey = sort.key === sortKey;
  const currentDirection = isCurrentSortKey ? sort.direction : null;

  return (
    <Button
      onClick={() => handleSortClick(sortKey)}
      icon={
        currentDirection === SORT_DIRECTION.ASC ? (
          <SortAscendingOutlined />
        ) : (
          <SortDescendingOutlined />
        )
      }
    >
      {children}
    </Button>
  );
}

export default SortButton;
