import {useForm} from "react-hook-form";
export default function App(){
    const {
        register,
        handleSubmit,
        reset,
    }=useForm();

    const onSubmit=(data)=>{
        alert(JSON.stringify(data))
        reset();

    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="input1"
                   {...register('FirstName',{required:true,minLength:{value:5}})}/>
            <input className="input2"
                   {...register('LastName',{required:true,minLength:{value:5}})}/>
            <input type="submit"/>
        </form>
    )

}
