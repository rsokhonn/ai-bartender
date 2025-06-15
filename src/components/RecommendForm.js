(function() {
  const { Form, Select, Button } = antd;

  function RecommendForm({ onRecommend }) {
    const [form] = Form.useForm();

    const handleFinish = values => {
      onRecommend(values);
    };

    return (
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item name="mood" label="Mood" rules={[{ required: true, message: 'Please select your mood' }]}>
          <Select placeholder="Select mood">
            <Select.Option value="chill">Chill</Select.Option>
            <Select.Option value="party">Party</Select.Option>
            <Select.Option value="romantic">Romantic</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="flavor" label="Flavor" rules={[{ required: true, message: 'Please select flavor' }]}>
          <Select placeholder="Select flavor">
            <Select.Option value="fruity">Fruity</Select.Option>
            <Select.Option value="bitter">Bitter</Select.Option>
            <Select.Option value="sweet">Sweet</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="strength" label="Strength" rules={[{ required: true, message: 'Please select strength' }]}>
          <Select placeholder="Select strength">
            <Select.Option value="light">Light</Select.Option>
            <Select.Option value="medium">Medium</Select.Option>
            <Select.Option value="strong">Strong</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Generate</Button>
        </Form.Item>
      </Form>
    );
  }

  window.RecommendForm = RecommendForm;
})();
