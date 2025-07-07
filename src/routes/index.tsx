export const Route = createFileRoute({
  component: RouteComponent,
})

import ContainerLogin from "../components/pages/loginPage/ContainerLogin";

const login = {
  titleName: "NAME",
  titleEmail: "EMAIL",
  titlePassword: "PASSWORD",
  titleLogin: "LOGIN",
  titleSignUp: "SIGN UP",
  titleDontHaveAccount: "DON'T HAVE AN ACCOUNT?",
}
function RouteComponent() {
  return (
    <>
      <ContainerLogin login={login}></ContainerLogin>
    </>
  );
}
