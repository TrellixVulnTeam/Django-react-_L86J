
import React,{Component} from 'react'
import { Form, Input, Button, Radio } from 'antd';

class CustomForm extends Component {
    handleSubmit = (event) => {
       let  title = event.target.elements;
    //    let  comment = event.target.elements.comment.value;
       console.log(title)


    }
  
  render() {
    return (
      <div>
        <Form  onS={this.handleSubmit}>
          <Form.Item label="Title" >
            <Input name ="title" placeholder="put a title" />
          </Form.Item>
          <Form.Item label="Comment">
            <Input name ="comment" placeholder="put comment here" />
          </Form.Item>
          <Form.Item >
            <Button  type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;