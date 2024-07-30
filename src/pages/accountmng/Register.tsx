import '../../assets/account-form.css'
export const Login = () => {
    return (
        <section className='account-form'>
            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input type="email" name="" id="" />
                </label>
                <label htmlFor="">
                    <span>Password</span>
                    <input type="password" name="" id="" />
                </label>
                <button type="submit">Log In</button>
                <button>Forgot password?</button>
            </form>
            <button>Don't you have an account?</button>
        </section>
    )
}
