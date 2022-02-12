import Hero from "../../components/hero";
import Features from "../../components/features";
import Produts from "../../components/products";
import Roadmap from "../../components/roadmap";
import WorkWithUs from "../../components/workWithUs";
import Community from "../../components/community";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Produts />
      <Roadmap />
      <WorkWithUs />
      <Community />
    </div>
  );
};

export default Home;
