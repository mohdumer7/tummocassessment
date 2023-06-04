import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (<GoogleOAuthProvider clientId="968153154109-uupr0jln1k0v7c36sfbno5bk2ar4nl3j.apps.googleusercontent.com">
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/posts" element={<Layout />}>
        <Route
          path=""
          element={<Main />}
          />
      </Route>
        
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
  );
}

export default App;
