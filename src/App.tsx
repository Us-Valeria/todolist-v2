import React from "react";
import { Typography, Layout, GlobalToken, theme, Col, Row } from "antd";
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
    margin-top: ${token.marginLG}px;
  `,
  title: css`
    color: white;
    font-size: ${token.fontSizeHeading3}px;
  `,
  text: css`
    font-size: ${token.fontSizeHeading1}px;
    font-weight: ${token.fontWeightStrong};
    color: #000f94;
    @media (max-width: 720px) {
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
          <Row>
            <Col span={12} offset={6}>
              <Text css={styles(token).text}>Мои планы:</Text>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 22, offset: 0 }}>
              <FilterTaskList />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default App;
