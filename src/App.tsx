import React, { useState } from 'react';
import type { GlobalToken } from 'antd';
import { Layout, theme, Typography } from 'antd';
import 'antd/dist/reset.css';
import { css } from '@emotion/react';
import AddTask from './components/AddTask';
import ListManager from './components/ListManager';
import TaskList from './components/TaskList';
import useTasks from './stores/useTasks';

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
  const tasks = useTasks((state) => state.tasks);
  const [list, setList] = useState(tasks);
  return (
    <Layout css={styles(token).page}>
      <Content css={styles(token).body}>
        <Title>Список задач</Title>
        <AddTask />
        <ListManager setList={setList} />
        <TaskList tasks={list} />
      </Content>
    </Layout>
  );
}

export default App;
