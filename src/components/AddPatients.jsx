import { Modal, Divider, Form, Space, Input, Row, Col, message } from 'antd'
import Title from './Title'
import Styled from 'styled-components'
import { Card, MainActionButton } from '../styles/components'

const AddPatients = (props) => {
  const { modalState, setModalState } = props
  const [form] = Form.useForm()

  const handleCancel = () => {
    setModalState(false)
  }
  const onOk = () => {
    console.log('OK')
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      console.log('Form values:', values)
      message.success('Form submit success')
    } catch (error) {
      console.log('Validation failed', error)
    }
  }

  return (
    <Modal
      centered
      footer={null}
      onOk={() => onOk()}
      onCancel={handleCancel}
      open={modalState}
      style={{ padding: '60px 70px 40px ' }}
      width="60vw"
    >
      <div>
        <Title title="PATIENT MANAGEMENT" />
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
            </StyledCard>
            <Row justify="center" gutter={[24, 24]}>
              <Col>
                <MainActionButton onClick={handleCancel} shape="round" cancel>
                  CANCEL
                </MainActionButton>
              </Col>
              <Col>
                <MainActionButton onClick={handleSubmit} shape="round" cancel>
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

export default AddPatients

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
