import React,{useRef} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { Edittodo } from './../redux/actions/actions';
function Edit({id}) {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const taskRef = useRef();
  const handleEdit=()=>{
    dispatch(Edittodo({task:taskRef.current.value,id})) 
    setOpen(false)
  }
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Edit</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Edit task' />
      <Modal.Content>
        <input type='text ' style={{width:'400px',height:'40px'}} ref={taskRef}/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => handleEdit()}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Edit