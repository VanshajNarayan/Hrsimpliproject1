import './App.css';
import Category from './Components/CategoryFolder/Category';
import Connect from './Components/ConnectWithTalentFolder/Connect';
import Engage from './Components/EngagePeople/Engage';
import Footer from './Components/FooterFolder/Footer';
import Header from './Components/HeaderFolder/Header';
import JobSeekers from './Components/JobSeekersFolder/JobSeekers';
import LatestJob from './Components/LatestJobFolder/LatestJob';
import SearchLocation from './Components/SearchLocationFolder/SearchLocation';

function App() {
  return (
    <>
      <Header/>
      <SearchLocation/>
      <Category/>
      <Connect/>
      <JobSeekers/>
      <Engage/>
      <LatestJob/>
      <Footer/>
    </>
  );
}

export default App;
