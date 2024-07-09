import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER } from '../../models/Filter';
import { setFilter, selectFilter } from './filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const onChange = (e: RadioChangeEvent) => dispatch(setFilter(e.target.value));
  const filter = useSelector(selectFilter);

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

export default Filter;
