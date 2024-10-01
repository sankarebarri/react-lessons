import memesData from "../memesData";
const Meme = () => {
  const randomId = () => {
    const memesLength = memesData.data.memes.length;
    const randomIndex = Math.floor(Math.random() * memesLength);
    const randomData = memesData.data.memes[randomIndex];
    console.log(randomData.id);
    console.log(randomData.width);
    console.log(randomData.height);
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--inputs" />
        <input type="text" placeholder="Bottom text" className="form--inputs" />
        <button onClick={randomId} className="form--button">
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export default Meme;
