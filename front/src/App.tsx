import type { GlobalToken } from 'antd';
import { Flex, Layout, theme, Typography } from 'antd';
import 'antd/dist/reset.css';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterTaskList from './components/FilterTaskList';
import SelectedSort from './components/SelectedSort';

dayjs.locale('ru');

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
        <AddTask />
        <Flex justify="space-between">
          <FilterTaskList />
          <SelectedSort />
        </Flex>
        <TaskList />
      </Content>
    </Layout>
  );
}

export default App;
