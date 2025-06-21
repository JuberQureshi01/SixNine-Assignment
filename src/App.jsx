import Hero from "./components/Hero";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ProductSlider from "./components/ProductSlider";
import Loader from "./components/Loader";
import ShowcaseSection from "./components/ShowcaseSection";
import FAQSection from "./components/FAQsection";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Loader/>
      <Hero />
      <WhyChooseUsSection/>
      <ProductSlider/>
      <ShowcaseSection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}

export default App;
