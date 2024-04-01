import type { GlobalToken } from 'antd';
import { Flex, Layout, theme, Typography } from 'antd';
import 'antd/dist/reset.css';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import { Provider } from 'react-redux';
import AddTask from './features/Tasks/components/AddTask';
import TaskList from './features/Tasks/containers/TaskList';
import FilterTaskList from './features/Filter/components/FilterTaskList';
import SelectedSort from './features/Sort/components/SelectedSort';
import { store } from './app/store';

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
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
