import {FormEvent, useState } from "react";

interface IFormProps {
  username: string,
  password: string
}
const FormComponent = () => {
    const [formState, setFormState] = useState<IFormProps>({
        username: 'username',
        password: '1111'
    })
    const handlerSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let user ={
            username: formState.username,
            password: formState.password
        }
        console.log(user)
        // const form = e.target as HTMLFormElement
        // console.log(form.username)
        // console.log(form.username.value)
        // console.log(form.password)
        // console.log(form.password.value)
    };
    // const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, username: input.value})
    // };
    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, password: input.value})
    // };
    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.value);
        setFormState({...formState, [input.name]: input.value})
    };
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" name='username' value={formState.username} onChange={handleInputChange}/>
                <input type="text" name='password' value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;