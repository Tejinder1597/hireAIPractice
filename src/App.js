
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import JobFeed from "./components/JobFeed/JobFeed";
import Layout from "./pages/layout/Layout";

import "./App.css";
import JobFeed from "./components/JobFeed/JobFeed";
import MyApplication from './components/MyApplication/MyApplication';
import JobDetails from "./components/JobDetails/JobDetails";
import NewJobPosting from "./components/NewJobPosting/NewJobPosting";
import Details from "./components/Details/Details";


// import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
//  <div>
//     <Header />
//     <div className="main">
//       <div>
//         <SideBar />
//       </div>
//       <div>
//         <JobFeed />
//       </div>
//     </div>
//   </div>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/JobFeed" element={<JobFeed />}></Route>
          <Route path="/MyApplication" element={<MyApplication />}></Route>
          <Route path="/JobDetails" element={<JobDetails />}></Route>
          <Route path="/NewJobPosting" element={<NewJobPosting />}></Route>
          <Route path="/Details" element={<Details />}></Route>
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
