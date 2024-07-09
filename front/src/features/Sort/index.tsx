import React from 'react';
import { Space } from 'antd';
import SortButton from './SortButton';
import { SORT_DIRECTION, SORT_KEY } from '../../models/Sorting';

function Sorting() {
  return (
    <Space>
      <SortButton sortKey={SORT_KEY.TITLE} sortDirection={SORT_DIRECTION.ASC}>
        По алфавиту
      </SortButton>
      <SortButton sortKey={SORT_KEY.DATE} sortDirection={SORT_DIRECTION.ASC}>
        По дате создания
      </SortButton>
    </Space>
  );
}
export default Sorting;
