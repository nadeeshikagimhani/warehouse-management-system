import ClerkAuthProvider from "./providers/ClerkAuthProvider"
import AppRouter from "./routing/AppRouter"

const App = () => {
  return (

    <ClerkAuthProvider>
      {<AppRouter/>}
    </ClerkAuthProvider>
    
  )
}

export default App