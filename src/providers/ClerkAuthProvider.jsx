import { ClerkProvider } from "@clerk/react"
import { useNavigate } from "react-router-dom";

const publisherbleKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!publisherbleKey){
  throw new Error("set VITE_CLERK_PUBLISHABLE_KEY in your local environment!")
}

const ClerkAuthProvider = ({children}) => {

  const navigate = useNavigate();

  return (
    <ClerkProvider 
      publishableKey={publisherbleKey}
      routerPush= {(to) => navigate(to)}
      routerReplace= {(to) => navigate(to, {replace: true})}
      signInUrl="/login"
      signUpUrl="/sign-up"
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
      afterSignOutUrl="/login">

       {children}

    </ClerkProvider>
  )
}

export default ClerkAuthProvider;