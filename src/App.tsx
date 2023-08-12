import ButtonComponents from "./components/buttonComponent/ButtonComponents";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import ShapeComponent from "./components/shapeComponent/ShapeComponent";

function App() {
  return (
    <>
      <HeaderComponent heading="This Is Colorify" />
      <ShapeComponent radius="50%" />
      <ButtonComponents btn1="Tomato" btn2="Violet" btn3="Lime" />
    </>
  );
}

export default App;
