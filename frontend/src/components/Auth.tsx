import {Link} from 'react-router-dom'
import { LabelledInput } from './LabelledInput'
import { SignupType } from '@vatsalgada/medium-common'
import { useState } from 'react';
import { ButtonHover } from './ButtonHover';

export const Auth =({type}: {type: "signup" | "signin"}) => {

    const [postInputs,setPostInputs] = useState<SignupType>({
        name: '',
        email: '',
        password: ''
    });
    return <div className=" flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div>
    <div className="text-4xl font-bold pb-2">{type == 'signin' ? 'Sign In' :  'Create an account'}</div>
   <div className="text-slate-500 text-center">{type == 'signin' ? "Don't have an account? " : "Already have an account? "} 
   <Link className='underline' to = { type == 'signin' ? '/signup' : '/signin'}>
    {type == 'signin' ? 'Signup' : 'Login'}
    </Link> </div>
    {type == 'signin' ? <LabelledInput label = 'Name' placeholder = 'John doe' onChange={(e) =>{
        setPostInputs({ ...postInputs ,name: e.target.value})
   }}></LabelledInput> : null}

      <LabelledInput label = 'Email' placeholder = 'try@email.com' onChange={(e) =>{
        setPostInputs({ ...postInputs ,email: e.target.value})
   }}></LabelledInput>

       <LabelledInput label = 'Password' type='password' onChange={(e) =>{
        setPostInputs({ ...postInputs ,password: e.target.value})
   }}></LabelledInput>

   <div className='mt-3'><ButtonHover type= {type}></ButtonHover></div>
  
   </div>
    </div></div>
}