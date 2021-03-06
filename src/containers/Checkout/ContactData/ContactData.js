
import React, {Component} from 'react';
import Button  from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
class ContactData extends Component
{ 
    state ={
        name: '',
        email: '',
        address:{
            street:'',
            postalCode:''}
    }

    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Enter yout contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="email" name="email" placeholder="Your Email"/>
                    <input type="text" name="street" placeholder="Your stret"/>
                    <input type="text" name="postal" placeholder="Postal Code"/>
              <Button btnType="Succes">Order</Button>
                </form>
            </div>
        );
    }
}
export default ContactData;