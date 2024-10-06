import FormsAssignment from "./components/FormsAssignment";
import Header from "./components/Header";
import Meme from "./components/Meme";
import data from "./memesData";

const App = () => {
  // console.log(data.data.memes[0]);

  return (
    <div>
      <Header />
      <Meme />
      <FormsAssignment />
    </div>
  );
};

export default App;
