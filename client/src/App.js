import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Main from "./pages/Main";



function App() {
  return (<>
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
  </>
  );
}

export default App;
