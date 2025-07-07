
import SignUpPage from "./SignUpPage";

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
        <div className="absolute flex size-full bg-cardmon-gray">
            <SignUpPage {...props.signUp}>
                
            </SignUpPage>
        </div>
    );
}