import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Register() {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(watch("example"))

    return (
        <>
            <div className="mx-auto max-w-80 my-20">
                <h2 className="text-center mb-2 font-medium text-2xl">Welcome to Epixelab</h2>
                <p className="mb-5 text-center text-sm">Create your account and join us.</p>
                <Button variant="outline" className="w-full rounded-full">
                    Continue with Google
                </Button>
                <p className="text-center my-3">or</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter your email" type="email" {...register("email", { required: true })} className="border w-full rounded-md p-3 shadow" />
                    {errors.email && <span>This field is required</span>}
                    <Button type="submit" variant="myOrange" className="w-full rounded-full py-5 my-5">Continue</Button>
                </form>
                <p className="text-xs text-[#15143966] text-center mb-3 font-medium">By continuing, you agree to our <a href="#" target="_blank"><u>Terms</u></a> and <a href="#" target="_blank"><u>Privacy Policy</u></a>.</p>
                <p className="text-xs text-[#15143966] text-center font-bold">Already have an account? <Link to="/login"><u>Login</u></Link></p>
            </div>
        </>

    )
}

export default Register;