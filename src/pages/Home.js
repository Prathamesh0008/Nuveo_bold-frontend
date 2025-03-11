import React from "react";
import HeroSection from "../components/HeroSection";
import MensFirstChoice from "../components/MensFirstChoice";
import OrderNowSection from "../components/OrderNowSection";
import MarriedLifeTips from "../components/MarriedLifeTips";
import ImageTabs from "../components/ImageTabs";
import VideoTab from "../components/VideoTab";
import Testimonial from "../components/Testimonial";
import HorsepowerDesires from "../components/HorsepowerDesires";
import ProductShowcase from "../components/ProductShowcase";
import CustomerReviews from "../components/CustomerReviews";
import StackedImages from "../components/StackedImages";
import ImageComparisonSlider from "../components/ImageComparisonSlider";



const Home = () => {
  return (
    <div>
      <HeroSection />
      <MensFirstChoice/>
      
      <OrderNowSection/>
      <StackedImages/>
      <MarriedLifeTips/>
      
      <ImageTabs/>
      <VideoTab/>
      <Testimonial/>
      <ImageComparisonSlider/>
   
      <HorsepowerDesires/>
      <ProductShowcase/>
      {/* <StickerWall/> */}
      <CustomerReviews/>
    </div>
  );
};

export default Home;
