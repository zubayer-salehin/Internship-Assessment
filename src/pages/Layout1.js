import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";



const Layout1 = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const userList = localStorage.getItem("userList")

    if (!userList) {
        localStorage.setItem("userList", JSON.stringify([]));
    }

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const dateOfBirth = data.date;
        const newUser = { name, email, phone, dateOfBirth }
        const allUser = JSON.parse(localStorage.getItem("userList"))
        const userExist = allUser.find(user => user.email === email)
        if (!userExist) {
            localStorage.setItem("userList", JSON.stringify([...allUser, newUser]))
            toast.success("User Successfully Added");
            reset();
        } else {
            toast.error("Email user is already Exists");
        }
    }

    return (
        <div className='screen-width-height d-flex justify-content-center align-items-center screen-backgroud'>
            <div className='w-50 shadow-lg registerBox'>
                <h4 className='mb-4 text-center'>User Registration</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <>
                        <div className="row d-flex align-items-center">
                            <div className="col-4">
                                <label htmlFor='name' className='label'>
                                    Name :
                                </label>
                            </div>
                            <div className="col-8">
                                <input type="text" id="name" placeholder='Type Name' {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Name minimum 3 Character'
                                    }
                                })} />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-8 d-flex">
                                <label className='errorMessage'>
                                    {errors.name?.type === 'required' && <p className="label-alt" >{errors.name.message}</p>
                                    }
                                    {errors.name?.type === 'minLength' && <p className="label-alt" >{errors.name.message}</p>
                                    }
                                </label>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="row d-flex align-items-center">
                            <div className="col-4">
                                <label htmlFor='email' className='label'>
                                    Email :
                                </label>
                            </div>
                            <div className="col-8">
                                <input type="email" id="email" placeholder='Type Email' {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-8 d-flex">
                                <label className='errorMessage'>
                                    {errors.email?.type === 'required' && <p className="label-alt" >{errors.email.message}</p>
                                    }
                                    {errors.email?.type === 'pattern' && <p className="label-alt" >{errors.email.message}</p>
                                    }
                                </label>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="row d-flex align-items-center">
                            <div className="col-4">
                                <label htmlFor='phone' className='label'>
                                    Phone Number :
                                </label>
                            </div>
                            <div className="col-8">
                                <input type="text" id="phone" placeholder='Type Phone' {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone is required"
                                    },
                                    pattern: {
                                        value: /^[0-9 ()+-]+$/,
                                        message: 'Provide a valid number'
                                    }
                                })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-8 d-flex">
                                <label className='errorMessage'>
                                    {errors.phone?.type === 'required' && <p className="label-alt" >{errors.phone.message}</p>
                                    }
                                    {errors.phone?.type === 'pattern' && <p className="label-alt" >{errors.phone.message}</p>
                                    }
                                </label>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="row d-flex align-items-center">
                            <div className="col-4">
                                <label htmlFor='dateOfBirth' className='label'>
                                    Date Of Birth :
                                </label>
                            </div>
                            <div className="col-8">
                                <input type="date" id="dateOfBirth" {...register("date", {
                                    required: {
                                        value: true,
                                        message: "Date is required"
                                    }
                                })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-8 d-flex">
                                <label className='errorMessage'>
                                    {errors.date?.type === 'required' && <p className="label-alt" >{errors.date.message}</p>
                                    }
                                </label>
                            </div>
                        </div>
                    </>
                    <div className='submitBtnBox'>
                        <input type="submit" className='submitBtn' value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Layout1;