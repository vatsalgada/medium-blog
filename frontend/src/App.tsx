import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Blog } from './pages/Blog';
import { BlogPage } from './pages/BlogPage';
import { Publish } from './pages/Publish';


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/signup" element={<Signup />} />
     <Route path='/signin' element={ <Signin />}></Route>
     <Route path="/blog" element={<Blog />} />
     <Route path="/blog/:id" element={<BlogPage />} />
     <Route path="/publish" element={<Publish />} />
      </Routes></BrowserRouter>
    </>
  )
}

export default App
