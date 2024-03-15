import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { Filters } from '../models/Filters';
import { FILTERS } from '../models/Filters';

type Props = {
  filter: Filters;
  setFilter: (value: Filters) => void;
};

function FilterTaskList({ filter, setFilter }: Props) {
  const onChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
  };

  return (
    <Radio.Group value={filter} onChange={onChange}>
      {Object.values(FILTERS).map((status) => (
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
