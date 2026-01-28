import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingSocialLinks from './components/FloatingSocialLinks'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './sections/Home';
import Layout from './sections/Layout';
import BiasharaLinkPortal from './components/BiasharaLink';
import ScrollToTop from './sections/ScrollToTop';
import ExploreEcosystem from './sections/ExploreEcosystem';
import DealHousePortal from './components/DealHouse';
import PolicyTrackerPortal from './components/PolicyTracker';
import AsiliMarketsPortal from './components/AsiliMarkets';
import HowItWorks from './sections/HowItWorks';
import Solutions from './sections/Solutions';
import InquiryCardExpanded from './sections/Inquiry';
import Ind from './sections/ind';
import Businessesentrepreneurs from './Businessesentrepreneurs';
import Governmentsembassies from './sections/Governmentsembassies';
import Banksdfis from './sections/Banksdfis';
import Contact from './sections/Contact';
import Partners from './sections/Partners';
import Investorsponsors from './sections/Investorsponsors';
import RegistrationTabs from './components/RegistrationTabs';
import Newss from './sections/News';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* Floating Social Links - appears on all pages */}
      <FloatingSocialLinks />
      
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          
          <Route path="/ExploreEcosystem" element={<ExploreEcosystem/>} />
          <Route path="/BiasharaLink_Portal" element={<BiasharaLinkPortal />} />
          <Route path="/DealHouse" element={<DealHousePortal/>} />
          <Route path="/Policy_Tracker" element={<PolicyTrackerPortal />} />
          <Route path="/Asili_Markets" element={<AsiliMarketsPortal />} />
          <Route path="/Trade_Pods" element={<BiasharaLinkPortal />} />
          <Route path="/HowItWorks" element={<HowItWorks/>} />
          <Route path="/Solutions" element={<Solutions/>} />
          <Route path="/Inquiry" element={<Ind/>} />
          <Route path="/Updates" element={<Newss/> } />
           
          <Route path="/Getstart" element={<RegistrationTabs/>} />
          <Route path="/Businessesentrepreneurs" element={<Ind/>} />
          <Route path="/Governmentsembassies" element={<Partners/>} />
          <Route path="/Banksdfis" element={<Partners/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Partners" element={<Partners/>}/>
          <Route path="/Investorsponsors" element={<Investorsponsors/>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App