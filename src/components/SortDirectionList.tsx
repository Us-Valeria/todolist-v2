import React from 'react';
import {
  CloseOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import type { GlobalToken } from 'antd';
import { Button, Space, Typography, theme } from 'antd';
import { css } from '@emotion/react';
import { SORTED_DIRECTION, type SortDirection } from '../models/SortDirection';
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
  setSortDirection: (value: SortDirection) => void;
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
      {sortKey !== SORTED_KEY.DEFAULT && (
        <Space>
          {sortDirection === SORTED_DIRECTION.DESK ? (
            <Button
              type="link"
              onClick={() => setSortDirection(SORTED_DIRECTION.ASC)}
              icon={<SortDescendingOutlined css={style(token).icon} />}
            />
          ) : (
            <Button
              type="link"
              onClick={() => setSortDirection(SORTED_DIRECTION.DESK)}
              icon={<SortAscendingOutlined css={style(token).icon} />}
            />
          )}
          <Text css={style(token).text}>
            По {sortKey === SORTED_KEY.TITLE && 'алфавиту'}
            {sortKey === SORTED_KEY.DATE && 'дате'}
          </Text>
          <Button
            type="link"
            onClick={() => {
              setSortDirection(SORTED_DIRECTION.ASC);
              setSortKey(SORTED_KEY.DEFAULT);
            }}
            icon={<CloseOutlined css={style(token).icon} />}
          />
        </Space>
      )}
      {sortKey === SORTED_KEY.DEFAULT && null}
    </>
  );
}

export default SortDirectionList;
