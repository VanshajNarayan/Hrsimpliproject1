import Category from '../CategoryFolder/Category';
import Connect from '../ConnectWithTalentFolder/Connect';
import Engage from '../EngagePeople/Engage';
import Footer from '../FooterFolder/Footer';
import JobSeekers from '../JobSeekersFolder/JobSeekers';
import LatestJob from '../LatestJobFolder/LatestJob';
import SearchLocation from '../SearchLocationFolder/SearchLocation';
import Header from "../HeaderFolder/Header";

function Home() {
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
  )
};

export default Home;