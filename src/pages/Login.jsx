import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"

function Login() {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(watch("example"))

    return (
        <>
            <div className="mx-auto max-w-80 my-20">
                <h2 className="text-center mb-5 font-medium text-2xl">Welcome back</h2>
                <Button variant="outline" className="w-full rounded-full mb-5">
                    Continue with Google
                </Button>
                <p className="text-center mb-5">or</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter your email" type="email" {...register("email", { required: true })} className="mb-5 border w-full rounded-md p-3 shadow" />
                    {errors.email && <span>This field is required</span>}
                    <Button type="submit" variant="myOrange" className="w-full rounded-full py-5 mb-5">Continue</Button>
                </form>
                <p className="text-xs text-[#15143966] text-center font-medium">By continuing, you agree to our <a href="#" target="_blank"><u>Terms</u></a> and <a href="#" target="_blank"><u>Privacy Policy</u></a>.</p>
            </div>
        </>
    )
}

export default Login;