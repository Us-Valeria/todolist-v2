import React from 'react';
import { Button, Space } from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSortKey, setDirection } from '../sortSlice';
import { SORTED_DIRECTION } from '../models/SortDirection';
import type { RootState } from '../../../app/store';
import type { SortedKey } from '../models/SortKey';
import { SORTED_KEY } from '../models/SortKey';

function SelectedSort() {
  const dispatch = useDispatch();
  const { sortKey, direction } = useSelector(
    (state: RootState) => state.sorted,
  );

  const handleSortClick = (clickedSortKey: SortedKey) => {
    if (clickedSortKey === sortKey) {
      if (direction === SORTED_DIRECTION.ASC) {
        dispatch(setDirection(SORTED_DIRECTION.DESC));
      } else {
        dispatch(setDirection(SORTED_DIRECTION.ASC));
        dispatch(setSortKey(SORTED_KEY.DEFAULT));
      }
    } else {
      dispatch(setSortKey(clickedSortKey));
      dispatch(setDirection(SORTED_DIRECTION.ASC));
    }
  };

  return (
    <Space>
      <Button
        onClick={() => handleSortClick(SORTED_KEY.TITLE)}
        icon={
          direction === SORTED_DIRECTION.ASC ? (
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
          direction === SORTED_DIRECTION.ASC ? (
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
