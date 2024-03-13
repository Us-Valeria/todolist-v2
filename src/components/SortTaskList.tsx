import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { DirectionStatus } from '../models/DirectionStatus';

type Props = {
  setSortKey: (value: string) => void;
  setSortDirection: (value: DirectionStatus) => void;
};

function SortTaskList({ setSortKey, setSortDirection }: Props) {
  const items: MenuProps['items'] = [
    {
      key: 'default',
      label: 'По умолчанию',
      onClick: () => {
        setSortKey('default');
        setSortDirection('FALSE');
      },
    },
    {
      key: 'title',
      label: 'По алфавиту',
      onClick: () => {
        setSortKey('title');
        setSortDirection('UNDER');
      },
    },
    {
      key: 'date',
      label: 'По дате создания',
      onClick: () => {
        setSortKey('date');
        setSortDirection('UNDER');
      },
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Space>
        Сортировка
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}

export default SortTaskList;
