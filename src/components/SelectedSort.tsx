import React from 'react';
import { Button, Space } from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import type { SortedKey } from '../models/SortKey';
import { SORTED_KEY } from '../models/SortKey';
import useSelectedSort from '../stores/useSelectedSort';
import { SORTED_DIRECTION } from '../models/SortDirection';

function SelectedSort() {
  const { sortKey, setSortKey, direction, setDirection } = useSelectedSort();

  const handleSortClick = (clickedSortKey: SortedKey) => {
    if (clickedSortKey === sortKey) {
      if (direction === SORTED_DIRECTION.ASC) {
        setDirection(SORTED_DIRECTION.DESC);
      } else {
        setSortKey(SORTED_KEY.DEFAULT);
        setDirection(SORTED_DIRECTION.ASC);
      }
    } else {
      setSortKey(clickedSortKey);
      setDirection(SORTED_DIRECTION.ASC);
    }
  };

  return (
    <Space>
      <Button
        onClick={() => handleSortClick(SORTED_KEY.TITLE)}
        icon={
          SORTED_DIRECTION.ASC ? (
            <SortAscendingOutlined />
          ) : (
            <SortDescendingOutlined />
          )
        }
      >
        По алфавиту
      </Button>
      <Button
        onClick={() => handleSortClick(SORTED_KEY.DATE)}
        icon={
          SORTED_DIRECTION.ASC ? (
            <SortAscendingOutlined />
          ) : (
            <SortDescendingOutlined />
          )
        }
      >
        По дате создания
      </Button>
    </Space>
  );
}

export default SelectedSort;
