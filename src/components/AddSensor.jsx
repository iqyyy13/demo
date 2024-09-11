import { Modal } from 'antd'
import Header from './Header'

const AddSensor = (props) => {
  console.log('YES')
  const { modalState, setModalState } = props
  const handleCancel = () => {
    setModalState(false)
  }
  const onOk = () => {
    console.log('OK')
  }

  return (
    <Modal
      centered
      footer={null}
      onOk={() => onOk()}
      onCancel={handleCancel}
      visible={modalState}
      bodyStyle={{
        padding: '60px 70px 40px',
      }}
      width="60vw"
    >
      <div>
        <Header title="PATIENTS" />
      </div>
    </Modal>
  )
}

export default AddSensor
