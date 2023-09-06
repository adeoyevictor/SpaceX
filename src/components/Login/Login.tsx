import Info from "./Info"
import LoginForm from "./LoginForm"
import '../../assets/Login/login.css'

const Login = () => {
  return (
    <div className="login__page">
        <Info/>
        <LoginForm />
    </div>
  )
}

export default Login