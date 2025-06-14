const { useState } = React;
const {
  Layout,
  Select,
  Button,
  Modal,
  Row,
  Col,
  Space
} = antd;
const { Header, Content } = Layout;

const { bars, drinks } = window.DRINKS_CONFIG;


function App() {
  const [selectedBar, setSelectedBar] = useState(bars[0].id);
  const [recommendVisible, setRecommendVisible] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = values => {
    window.recommendService.recommend(values).then(results => {
      setRecommendations(results);
      setRecommendVisible(true);
    });
  };

  return (
    <Layout>
      <Header style={{ color: '#fff', fontSize: '1.5rem' }}>AI Bartender</Header>
      <Content style={{ marginTop: 20 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            value={selectedBar}
            onChange={setSelectedBar}
            style={{ width: 200 }}
          >
            {bars.map(bar => (
              <Select.Option key={bar.id} value={bar.id}>{bar.name}</Select.Option>
            ))}
          </Select>

          <Row gutter={[16,16]}>
            {drinks[selectedBar].map(drink => (
              <Col xs={24} sm={12} md={8} key={drink.name}>
                <DrinkCard drink={drink} />
              </Col>
            ))}
          </Row>

          <Button type="primary" onClick={() => setRecommendVisible(true)}>
            Recommend me a drink
          </Button>
        </Space>
      </Content>

      <Modal
        open={recommendVisible}
        footer={null}
        onCancel={() => setRecommendVisible(false)}
        title="Describe Your Drink Vibe"
      >
        <RecommendForm onRecommend={handleRecommend} />
      </Modal>

      <Recommendations
        visible={recommendations.length > 0}
        data={recommendations}
        onClose={() => setRecommendations([])}
      />
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
