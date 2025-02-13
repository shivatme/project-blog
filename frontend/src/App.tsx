import { BrowserRouter, Route, Routes } from "react-router";

import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProfileScreen from "./pages/Profile";
import Landing from "./pages/Landing";
import AuthProvider from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route element={<PrivateRoute />}>
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/publish" element={<Publish />} />

            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
