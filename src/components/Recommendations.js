(function() {
  const { Modal, Space, Typography, Divider } = antd;

  function Recommendations({ visible, data, onClose }) {
    return (
      <Modal open={visible} onCancel={onClose} title="Recommended Drinks" footer={null}>
        {data.map((rec, index) => (
          <Space direction="vertical" key={index} style={{ width: '100%' }}>
            <Typography.Title level={5}>{rec.name} - Score: {rec.score}</Typography.Title>
            <Typography.Paragraph><strong>Recipe:</strong> {rec.recipe}</Typography.Paragraph>
            <Typography.Paragraph><strong>Flavor:</strong> {rec.flavor}</Typography.Paragraph>
            <Typography.Paragraph><strong>Strength:</strong> {rec.strength}</Typography.Paragraph>
            <Typography.Paragraph><strong>Analysis:</strong> {rec.analysis}</Typography.Paragraph>
            <Typography.Paragraph><strong>History:</strong> {rec.history}</Typography.Paragraph>
            <Typography.Paragraph><strong>Fun Fact:</strong> {rec.funFact}</Typography.Paragraph>
            {index < data.length - 1 && <Divider />}
          </Space>
        ))}
      </Modal>
    );
  }

  window.Recommendations = Recommendations;
})();
