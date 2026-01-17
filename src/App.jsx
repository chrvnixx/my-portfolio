import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <div className="fixed bottom-auto left-50 right-0 top-[-100px] h-[200px] w-[130px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[linear-gradient(300deg,red,orange,purple,yellow,green,blue,indigo,violet)] opacity-70 blur-[25px]"></div>
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
