import React from 'react';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import type { GlobalToken } from 'antd';
import { Button, Space, Typography, theme } from 'antd';
import { css } from '@emotion/react';
import {
  DIRECTION_STATUSES,
  type DirectionStatus,
} from '../models/DirectionStatus';
import { SORTED_KEY, type SortedKey } from '../models/SortKey';

const { Text } = Typography;

const style = (token: GlobalToken) => ({
  text: css`
    font-weight: ${token.fontWeightStrong};
  `,
  icon: css`
    color: ${token.colorText};
  `,
});

type Props = {
  sortDirection: string;
  setSortDirection: (value: DirectionStatus) => void;
  sortKey: string;
  setSortKey: (value: SortedKey) => void;
};

function SortDirectionList({
  sortDirection,
  setSortDirection,
  sortKey,
  setSortKey,
}: Props) {
  const { token } = theme.useToken();
  return (
    <>
      {(sortDirection === DIRECTION_STATUSES.DESK ||
        sortDirection === DIRECTION_STATUSES.ASC) && (
        <Space>
          {sortDirection === DIRECTION_STATUSES.DESK ? (
            <Button
              type="link"
              onClick={() => setSortDirection(DIRECTION_STATUSES.ASC)}
              icon={<UpOutlined css={style(token).icon} />}
            />
          ) : (
            <Button
              type="link"
              onClick={() => setSortDirection(DIRECTION_STATUSES.DESK)}
              icon={<DownOutlined css={style(token).icon} />}
            />
          )}
          <Text css={style(token).text}>
            По {sortKey === SORTED_KEY.TITLE && 'алфавиту'}
            {sortKey === SORTED_KEY.DATE && 'дате'}
          </Text>
          <Button
            type="link"
            onClick={() => {
              setSortDirection(DIRECTION_STATUSES.NULL);
              setSortKey(SORTED_KEY.DEFAULT);
            }}
            icon={<CloseOutlined css={style(token).icon} />}
          />
        </Space>
      )}
      {sortDirection === DIRECTION_STATUSES.NULL && null}
    </>
  );
}

export default SortDirectionList;
