import React from 'react';
import type { GlobalToken } from 'antd';
import { Button, theme } from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { setSort, selectSort } from './sortSlice';
import type { SortKey, SortDirection } from '../../models/Sorting';
import { SORT_DIRECTION, SORT_KEY } from '../../models/Sorting';

type SortButtonProps = {
  sortKey: SortKey;
  sortDirection: SortDirection;
  children: React.ReactNode;
};

const style = (token: GlobalToken, currentDirection: SortDirection | null) => ({
  button: css`
    background-color: ${currentDirection
      ? token.colorPrimaryBg
      : token.colorBgContainer};
  `,
});

function SortButton({ sortKey, sortDirection, children }: SortButtonProps) {
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const getNextDirection = () => {
    switch (sort.direction) {
      case SORT_DIRECTION.ASC:
        return SORT_DIRECTION.DESC;
      case SORT_DIRECTION.DESC:
        return null;
      default:
        return SORT_DIRECTION.ASC;
    }
  };
  const handleSortClick = (clickedSortKey: SortKey) => {
    const nextKey =
      sort.direction !== SORT_DIRECTION.DESC || sort.key !== clickedSortKey
        ? clickedSortKey
        : SORT_KEY.DEFAULT;
    dispatch(
      setSort({
        key: nextKey,
        direction:
          sort.key === clickedSortKey ? getNextDirection() : sortDirection,
      }),
    );
  };

  const isCurrentSortKey = sort.key === sortKey;
  const currentDirection = isCurrentSortKey ? sort.direction : null;

  return (
    <Button
      onClick={() => handleSortClick(sortKey)}
      icon={
        currentDirection === SORT_DIRECTION.DESC ? (
          <SortDescendingOutlined />
        ) : (
          <SortAscendingOutlined />
        )
      }
      css={style(token, currentDirection).button}
    >
      {children}
    </Button>
  );
}

export default SortButton;
