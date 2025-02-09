import { BrowserRouter, Route, Routes } from "react-router";

import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProfileScreen from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
