
import SignUp from "./SignUp";

interface SignUpProps{
    titleFullName: string;
    titleEmail: string;
    titlePassword: string;
    titleConfirmPassword: string;
    titleSignUp: string;
    titleLogin: string;
    titleAlreadyHaveAccount: string;
}

interface ContainerSignUpProps{
    signUp: SignUpProps
}

export default function ContainerSignUp(props: ContainerSignUpProps){
    return(
        <div>
            <SignUp {...props.signUp}>
                
            </SignUp>
        </div>
    );
}