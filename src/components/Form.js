import React , {useState} from 'react';
import SignupForm from './SignupForm';
import SuccessesSignUp from './SuccessesSignUp';


const Form = () => {
    const [formIsSubmitted , setFormIsSubmitted] = useState(false);
    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
  return (
    <div>
        { !formIsSubmitted ? (<SignupForm submitForm={submitForm}/> ): (<SuccessesSignUp/>)}
    </div>
  );
};

export default Form