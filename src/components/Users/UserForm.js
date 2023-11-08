import React from 'react';
import {useForm} from 'react-hook-form'
import {userService} from "../../servises/userService";
const UserForm = ({setUsers}) => {
    const {reset, handleSubmit,register} = useForm();
    const save =async (user)=>{
        const {data} = await userService.create(user);
        setUsers(prev=>[...prev, data])
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'userName'} {...register('userName')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
            </form>
        </div>
    );
};


export {UserForm};
