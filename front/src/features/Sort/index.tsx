import React from 'react';
import { Space } from 'antd';
import SortButton from './SortButton';
import { SORT_KEY } from '../../models/SortKey';
import { SORT_DIRECTION } from '../../models/SortDirection';

function SelectSort() {
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
export default SelectSort;
