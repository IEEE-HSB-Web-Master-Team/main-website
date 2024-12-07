import AboutHero from "../AboutHero/AboutHero";
import ChairPersonsSlider from "../ChairPersonsSlider/ChairPersonsSlider";
import MembersOfMonth from "../MembersOfMonth/MembersOfMonth";
import OurChapters from "../OurChapters/OurChapters";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";

function Home() {
    return (
        <>
            <AboutHero/>
            <ChairPersonsSlider />
            <OurChapters />
            <WhyJoinUs/>
            <MembersOfMonth/>
        </>
    );
}

export default Home;
