import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { FILTERS } from '../models/Filters';
import useFilter from '../stores/useFilter';

function FilterTaskList() {
  const { filter, setFilter } = useFilter();
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
