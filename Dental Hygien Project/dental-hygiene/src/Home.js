import Accordion from "./Accordion";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./thirdSection";
import UserQuestion from "./UserQuestions";
import Videosection from "./videosection";
import Aboutus from './Aboutus';
export default function Home(){
    return(
        <>
            <HeroSection/>
            <Aboutus/>
            <SecondSection/>
            <Videosection/>
            <ThirdSection/>
            <UserQuestion/>
            <Accordion/>
            
        </>
    )
}