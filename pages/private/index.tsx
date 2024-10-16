import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { LoginNavigate } from "HOC/LoginNavigate";
import { PageWrapper } from "components/PageWrapper/PageWrapper";

const Private= () => {
  return <LoginNavigate>
    <PageWrapper>Private Page</PageWrapper>
  </LoginNavigate>
}

Private.getLayout = getLayout
export default Private