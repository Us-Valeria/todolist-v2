import React from "react";
import { Typography, Layout, GlobalToken, theme } from "antd";
import { Global, css } from "@emotion/react";
import FilterTaskList from "./components/FilterTaskList";
const { Header, Content } = Layout;
const { Text } = Typography;

const styles = (token: GlobalToken) => ({
  global: css`
    * {
      margin: 0;
      padding: 0;
    }
  `,
  page: css`
    min-height: 100vh;
  `,
  body: css`
    display: flex;
    flex-direction: column;
  `,
  title: css`
    color: white;
    font-size: ${token.fontSizeHeading3}px;
  `,
  text: css`
    margin: 3% 7% 0;
    font-size: ${token.fontSizeHeading1}px;
    font-weight: ${token.fontWeightStrong};
    color: #000f94;
    @media (max-width: 720px) {
      margin: 2% 25%;
      font-size: ${token.fontSizeHeading2}px;
    }
  `,
});

function App() {
  const { token } = theme.useToken();
  return (
    <>
      <Global styles={styles(token).global} />
      <Layout css={styles(token).page}>
        <Header>
          <Text css={styles(token).title}>To-Do</Text>
        </Header>
        <Content css={styles(token).body}>
          <Text css={styles(token).text}>Мои планы:</Text>
          <FilterTaskList />
        </Content>
      </Layout>
    </>
  );
}

export default App;
