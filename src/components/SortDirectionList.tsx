import React from 'react';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import type { GlobalToken } from 'antd';
import { Button, Space, Typography, theme } from 'antd';
import { css } from '@emotion/react';
import type { DirectionStatus } from '../models/DirectionStatus';

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
};

function SortDirectionList({
  sortDirection,
  setSortDirection,
  sortKey,
}: Props) {
  const { token } = theme.useToken();
  return (
    <>
      {(sortDirection === 'OLDER' || sortDirection === 'UNDER') && (
        <Space>
          {sortDirection === 'OLDER' ? (
            <Button
              type="link"
              onClick={() => setSortDirection('UNDER')}
              icon={<UpOutlined css={style(token).icon} />}
            />
          ) : (
            <Button
              type="link"
              onClick={() => setSortDirection('OLDER')}
              icon={<DownOutlined css={style(token).icon} />}
            />
          )}
          <Text css={style(token).text}>
            По {sortKey === 'title' && 'алфавиту'}
            {sortKey === 'date' && 'дате'}
          </Text>
          <Button
            type="link"
            onClick={() => setSortDirection('FALSE')}
            icon={<CloseOutlined css={style(token).icon} />}
          />
        </Space>
      )}
      {sortDirection === 'FALSE' && null}
    </>
  );
}

export default SortDirectionList;
