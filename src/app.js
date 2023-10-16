import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'
import Subscribers from "./pages/admin/Subscribers";
import Login from "./pages/admin/login";
import Admin from "./pages/admin";
const HomeOne = lazy(() => import("./home/HomeOne"));
const HomeTwo = lazy(() => import("./home/HomeTwo"));
const HomeThree = lazy(() => import("./home/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./service/Services"));
const Assays = lazy(() => import("./assays/ServiceDetailsRightSidebar"));
const ServiceDetailsLeftSidebar = lazy(() => import("./service/ServiceDetailsLeftSidebar"));
const ServiceDetailsRightSidebar = lazy(() => import("./service/ServiceDetailsRightSidebar"));
const Projects = lazy(() => import("./project/ProjectDetails"));
const ProjectDetails = lazy(() => import("./project/ProjectDetails"));
const BlogLeftSidebar = lazy(() => import("./blog/BlogLeftSidebar"));
const BlogRightSidebar = lazy(() => import("./blog/BlogRightSidebar"));
const BlogDetailsLeftSidebar = lazy(() => import("./blog/BlogDetailsLeftSidebar"));
const BlogDetailsRightSidebar = lazy(() => import("./blog/BlogDetailsRightSidebar"));
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Provider store={store}>

      <Router>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<HomeOne />} />
            <Route path="/home-one" element={<HomeOne />} />
            <Route path="/home-two" element={<HomeTwo />} />
            <Route path="/home-three" element={<HomeThree />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/assay" element={<Assays />} />
            <Route path="/service-details-left-sidebar" element={<ServiceDetailsLeftSidebar />} />
            <Route path="/service-details-right-sidebar" element={<ServiceDetailsRightSidebar />} />
            <Route path="/admin/subscribers" element={<Subscribers />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/refinery" element={<Projects />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
            <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
            <Route path="/blog-details-left-sidebar" element={<BlogDetailsLeftSidebar />} />
            <Route path="/blog-details-right-sidebar" element={<BlogDetailsRightSidebar />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="*" element={<NoMAtch />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App