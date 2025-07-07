
import Login from "./Login";

interface LoginProps{
    titleName: string;
    titleEmail: string;
    titlePassword: string;
    titleLogin: string;
    titleSignUp: string;
    titleDontHaveAccount: string;
}

interface ContainerLoginProps {
    login: LoginProps;
}
export default function ContainerLogin(props: ContainerLoginProps) {
    return (
        <div>
            <Login {...props.login}></Login>
        </div>
    );
}