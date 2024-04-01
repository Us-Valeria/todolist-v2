import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER } from '../models/Filter';
import { setFilter } from '../filterSlice';
import type { RootState } from '../../../app/store';

function FilterTaskList() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const onChange = (e: RadioChangeEvent) => dispatch(setFilter(e.target.value));

  return (
    <Radio.Group value={filter} onChange={onChange}>
      {Object.values(FILTER).map((status) => (
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
