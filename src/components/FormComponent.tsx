import { FormEvent } from "react";

const FormComponent = () => {
    const handler = (e: FormEvent<HTMLInputElement>) => {
        console.log(e)
    };
    return (
        <div>
            <form>
                <input type="text" name='username' onChange={handler}/>
                <input type="text" name='password'/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;