export const Route = createFileRoute({
  component: RouteComponent,
})

import ContainerSignUp from "../components/pages/signUpPage/ContainerSignUp";


const signUp = {
  titleFullName: "Full Name",
  titleEmail: "Email",
  titlePassword: "Password",
  titleConfirmPassword: "Confirm Password",
  titleSignUp: "Sign Up",
  titleLogin: "Login",
  titleAlreadyHaveAccount: "Already have an account?",
}

function RouteComponent() {


  return (
    <> 
    <ContainerSignUp signUp={signUp}></ContainerSignUp>
    </>
  );
}


