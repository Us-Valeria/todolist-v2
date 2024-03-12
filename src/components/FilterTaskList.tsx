import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { FilterStatus } from '../models/FilterStatus';
import { FILTER_STATUSES } from '../models/FilterStatus';

type Props = {
  filter: FilterStatus;
  setFilter: (value: FilterStatus) => void;
};

function FilterTaskList({ filter, setFilter }: Props) {
  const onChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
  };

  return (
    <Radio.Group value={filter} onChange={onChange}>
      {Object.values(FILTER_STATUSES).map((status) => (
        <Radio.Button key={status} value={status}>
          {status === 'ALL' && 'Все'}
          {status === 'ACTIVE' && 'В процессе'}
          {status === 'COMPLETED' && 'Завершенные'}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}

export default FilterTaskList;
