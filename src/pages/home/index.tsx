import Hero from "../../components/hero";
import Features from "../../components/features";
import Roadmap from "../../components/roadmap";
import WorkWithUs from "../../components/workWithUs";
import Community from "../../components/community";
import BuyTokens from "../../components/buyTokens";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Roadmap />
      <WorkWithUs />
      <BuyTokens />
      <Community />
    </div>
  );
};

export default Home;
