import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
  DIRECTION_STATUSES,
  type DirectionStatus,
} from '../models/DirectionStatus';
import type { SortedKey } from '../models/SortKey';
import { SORTED_KEY } from '../models/SortKey';

type Props = {
  setSortKey: (value: SortedKey) => void;
  setSortDirection: (value: DirectionStatus) => void;
};

function SortTaskList({ setSortKey, setSortDirection }: Props) {
  const items: MenuProps['items'] = [
    {
      key: SORTED_KEY.TITLE,
      label: 'По алфавиту',
      onClick: () => {
        setSortKey(SORTED_KEY.TITLE);
        setSortDirection(DIRECTION_STATUSES.ASC);
      },
    },
    {
      key: SORTED_KEY.DATE,
      label: 'По дате создания',
      onClick: () => {
        setSortKey(SORTED_KEY.DATE);
        setSortDirection(DIRECTION_STATUSES.ASC);
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
