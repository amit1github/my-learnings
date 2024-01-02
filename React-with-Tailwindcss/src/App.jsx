import SlickImageSlider from "./components/ImageSlider/SlickImageSlider";
import FramerSliderComponent from "./components/ImageSlider/FramerSliderComponent";
import SwiperImageSlider from "./components/ImageSlider/SwiperImageSlider";
import "./App.css";

function App() {
  return (
    <div className=" bg-gray-300 h-screen w-screen">
      <SlickImageSlider />
      <br />
      <FramerSliderComponent />
      <br/>
      <SwiperImageSlider/>
    </div>
  );
}

export default App;
