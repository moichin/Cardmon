export const Route = createFileRoute({
  component: RouteComponent,
})

import ContainerSignUp from "../components/pages/signUpPage/ContainerSignUp";


const signUp = {
  titleFullName: "FULL NAME",
  titleEmail: "EMAIL",
  titlePassword: "PASSWORD",
  titleConfirmPassword: "CONFIRM PASSWORD",
  titleSignUp: "SIGN UP",
  titleLogin: "LOGIN",
  titleAlreadyHaveAccount: "ALREADY HAVE AN ACCOUNT?",
}

function RouteComponent() {


  return (
    <> 
    <ContainerSignUp signUp={signUp}></ContainerSignUp>
    </>
  );
}


