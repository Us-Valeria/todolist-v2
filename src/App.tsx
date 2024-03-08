import React from 'react';
import type { GlobalToken } from 'antd';
import { Layout, theme, Typography } from 'antd';
import 'antd/dist/reset.css';
import { css } from '@emotion/react';
import FilterTaskList from './components/FilterTaskList';

const { Content } = Layout;
const { Title } = Typography;

const styles = (token: GlobalToken) => ({
  page: css`
    min-height: 100vh;
  `,
  body: css`
    margin: ${token.marginLG}px;
  `,
});

function App() {
  const { token } = theme.useToken();
  return (
    <Layout css={styles(token).page}>
      <Content css={styles(token).body}>
        <Title>Список задач</Title>
        <FilterTaskList />
      </Content>
    </Layout>
  );
}

export default App;
