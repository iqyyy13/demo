import { Modal, Divider, Form, Space, Input, Row, Col, Select } from 'antd'
import Title from './Title'
import Styled from 'styled-components'
import { Card, MainActionButton } from '../styles/components'

const AddSensor = (props) => {
  const { modalState, setModalState } = props
  const [form] = Form.useForm()
  const handleCancel = () => {
    setModalState(false)
  }
  const onOk = () => {
    console.log('OK')
  }

  // const handleSubmit = async () => {
  //   try {
  //     const values = await form.validateFields()
  //     console.log('Form values:', values)
  //     message.success('Form submit success')
  //   } catch (error) {
  //     console.log('Validation failed', error)
  //   }
  // }

  return (
    <Modal
      centered
      footer={null}
      onOk={() => onOk()}
      onCancel={handleCancel}
      open={modalState}
      bodyStyle={{
        padding: '60px 70px 40px',
      }}
      width="60vw"
    >
      <div>
        <Title title="ADD SENSOR" />
        <Divider style={{ margin: '12px 0' }} />
        <Title title="General Details" />
        <Form form={form} layout="vertical">
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <StyledCard color="rgba(96, 110, 185, 0.04)">
              <Form.Item
                name="name"
                label="NAME"
                rules={[
                  {
                    required: true,
                    message: 'Enter a valid name',
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="macId"
                label="MAC ID"
                rules={[
                  {
                    required: true,
                    message: 'Enter Sensor MAC address, e.g. 00112233FFEE!',
                  },
                ]}
              >
                <Input placeholder="MAC ID" />
              </Form.Item>

              <Form.Item
                name="organisation"
                label="ORGANISATION"
                rules={[
                  {
                    required: true,
                    message: 'Please choose an organisation',
                  },
                ]}
              >
                <Select placeholder="Organisation">
                  <Select.Option value="Demo">Demo</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="type"
                label="SENSOR TYPE"
                rules={[
                  {
                    required: true,
                    message: 'Please choose sensor type',
                  },
                ]}
              >
                <Select placeholder="Sensor Type">
                  <Select.Option value="Finger">Finger</Select.Option>
                  <Select.Option value="Chest">Chest</Select.Option>
                </Select>
              </Form.Item>
            </StyledCard>
            <Row justify="center" gutter={[24, 24]}>
              <Col>
                <MainActionButton onClick={handleCancel} shape="round" cancel>
                  CANCEL
                </MainActionButton>
              </Col>
              <Col>
                <MainActionButton onClick={handleCancel} shape="round" cancel>
                  SAVE
                </MainActionButton>
              </Col>
            </Row>
          </Space>
        </Form>
      </div>
    </Modal>
  )
}

export default AddSensor

const StyledCard = Styled(Card)`
	.ant-card-body {
    flex-flow: wrap;
    justify-content: space-between;
    &::before, &::after {
      display: none
    }
	}
  .ant-form-item {
    width: 45%;
    align-self: flex-end;
  }
`
