import { Modal, Divider, Form, Space, Row, Col, Switch } from 'antd'
import Title from './Title'
import Styled from 'styled-components'
import { Card, MainActionButton } from '../styles/components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'

const PatientManagement = (props) => {
  const { modalState, setModalState } = props
  const [form] = Form.useForm()
  const [toggleTwo, setToggleTwo] = useState(false)
  const [fingerSelection, setFingerSelection] = useState(null)
  const [chestSelection, setChestSelection] = useState(null)
  const [generalSelection, setGeneralSelection] = useState(null)

  const handleCancel = () => {
    setModalState(false)
  }

  const handleSubmit = () => {
    setModalState(false)
  }

  const onOk = () => {
    console.log('OK')
  }

  const toggleSensor = () => {
    setToggleTwo(!toggleTwo)

    if (toggleTwo === true) {
      console.log('TWOO')
    }

    if (toggleTwo === false) {
      console.log('ONEE')
    }
  }

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/sensor')
      .then((res) => {
        const extractedData = res.data
          .filter((item) => item.availability !== 'ALLOCATED')
          .map((item) => ({
            name: item.name,
            availability: item.availability,
          }))
        setFilteredData(extractedData)
      })
      .catch((err) => console.log(err))
  }, [])

  const options = filteredData.map((item) => ({
    value: item.name,
    label: item.name,
  }))

  const handleFingerChange = (selectedOption) => {
    setFingerSelection(selectedOption.value)
  }

  const handleChestChange = (selectedOption) => {
    setChestSelection(selectedOption.value)
  }

  useEffect(() => {
    console.log('chest selection updated', chestSelection)
  }, [chestSelection, fingerSelection])

  useEffect(() => {
    console.log('finger selection updated', fingerSelection)
  }, [fingerSelection, chestSelection])

  return (
    <Modal
      centered
      footer={null}
      onOk={() => onOk()}
      onCancel={handleCancel}
      open={modalState}
      bodyStyle={{
        padding: '0px 140px 0px 0px',
      }}
      width={'auto'}
    >
      <div>
        <Title title="PATIENT MANAGEMENT" />
        <Divider style={{ margin: '5px 0' }} />
        <Form form={form} layout="vertical">
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <Col>
              <Row style={{ marginBottom: 8 }}>
                <Col flex="auto">
                  <Switch
                    onChange={toggleSensor}
                    checkedChildren="Two Sensors"
                    unCheckedChildren="One Sensor"
                    defaultChecked
                  />
                </Col>
              </Row>
            </Col>
            {!toggleTwo ? (
              <StyledCard color="rgba(96, 110, 185, 0.04)">
                <Form.Item
                  name="name"
                  label="Sensor (Finger)"
                  rules={[
                    {
                      required: true,
                      message: 'Enter a valid name',
                    },
                  ]}
                >
                  <Select
                    options={options}
                    placeholder="Select a sensor"
                    onChange={setFingerSelection}
                    value={fingerSelection}
                  />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Sensor (Chest)"
                  rules={[
                    {
                      required: true,
                      message: 'Enter a valid name',
                    },
                  ]}
                >
                  <Select
                    options={options}
                    placeholder="Select a sensor"
                    onChange={setChestSelection}
                    value={chestSelection}
                  />
                </Form.Item>
              </StyledCard>
            ) : (
              <StyledCard color="rgba(96, 110, 185, 0.04)">
                <Form.Item
                  name="finger"
                  label="Sensor (General)"
                  rules={[
                    {
                      required: true,
                      message: 'Enter a valid name',
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a sensor"
                    onChange={setGeneralSelection}
                    options={options}
                  />
                </Form.Item>
              </StyledCard>
            )}
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

export default PatientManagement

const StyledCard = Styled(Card)`
	.ant-card-body {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 16px;
    &::before, &::after {
      display: none
    }
	}
  .ant-form-item {
    width: 100%;
    align-self: flex-end;
  }
`
