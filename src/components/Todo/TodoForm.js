import React from 'react';
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import './TodoStyles.scss';

export default props => (
  <form onSubmit={e => props.onAddItem(e)}>
    <FormGroup>
       <InputGroup>
         <FormControl
            type="text"
            value={props.input}
            onChange={({ target: { value } }) => props.onChange(value) }
        />
         <InputGroup.Button>
           <Button type="submit" disabled={!props.input} >Add Item</Button>
         </InputGroup.Button>
       </InputGroup>
     </FormGroup>
  </form>
);
