import "./index.css";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ContactPage,
  JobApplication,
  JobDetailsPage,
  ServicesPage,
  CareerPage,
  Gallery,
  Resources,
} from "./Pages";






function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/ourservices" element={<ServicesPage />} />
              <Route path="/careerspage" element={<CareerPage />} />
              <Route path="/contactpage" element={<ContactPage />} />
              <Route path="/jobdetails" element={<JobDetailsPage />} />
              <Route path="/jobapplication" element={<JobApplication />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/resources" element={<Resources />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
