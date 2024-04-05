import type { GlobalToken } from 'antd';
import { Flex, Layout, theme, Typography, ConfigProvider, Switch } from 'antd';
import 'antd/dist/reset.css';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import AddTask from './features/Tasks/AddTask';
import TaskList from './features/Tasks/TaskList';
import FilterTaskList from './features/Filter';
import SelectSort from './features/Sort';
import { selectTheme, setTheme } from './features/theme/themeSlice';

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

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const isDark = useSelector(selectTheme);
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout css={styles(token).page}>
        <Content css={styles(token).body}>
          <Flex justify="space-between" align="center">
            <Title>Список задач</Title>
            <Switch
              value={isDark}
              checkedChildren={<SunOutlined />}
              unCheckedChildren={<MoonOutlined />}
              onChange={() => {
                dispatch(setTheme());
              }}
            />
          </Flex>
          <AddTask />
          <Flex justify="space-between">
            <FilterTaskList />
            <SelectSort />
          </Flex>
          <TaskList />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
