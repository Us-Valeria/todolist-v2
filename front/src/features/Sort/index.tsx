import React from 'react';
import { Space } from 'antd';
import SortButton from './SortButton';
import { SORT_KEY } from '../../models/SortKey';

function SelectSort() {
  return (
    <Space>
      <SortButton sortKey={SORT_KEY.TITLE}>По алфавиту</SortButton>
      <SortButton sortKey={SORT_KEY.DATE}>По дате создания</SortButton>
    </Space>
  );
}
export default SelectSort;
