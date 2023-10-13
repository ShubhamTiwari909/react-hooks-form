import { useEffect } from "react"
import { useForm } from "react-hook-form"

const Form = () => {
    // Destructuring methods from hook
    const { register, handleSubmit, setValue, getValues, reset, watch } = useForm({
        // assigning initial values 
        defaultValues: {
            name: "",
            email: "",
        },
    })

    // Submit handler method with reset method
    const submitHandler = values => {
        console.log(values)
        reset()
    }

    // Setter and getter methods for inputs
    useEffect(() => {
        setValue("name", "Ironman")

        const name = getValues("name")
        console.log(name)
    }, [])

    // Watching input values with watch method
    const details = watch()
    console.log(details)

    return (
        <div className='grid-container'>
            <form className='form-container' onSubmit={handleSubmit(submitHandler)}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <div className='relative'>
                        <input type='text' id="name" className={`form-input`} {...register("name")} />
                    </div>
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <div className='relative'>
                        <input type='email' id="email" className={`form-input`} {...register("email")} />
                    </div>
                </div>
                <button type="submit" className="form-submit">Submit</button>
            </form>
        </div>
    )
}

export default Form