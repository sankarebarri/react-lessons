import React from "react";
import memesData from "../memesData";
const Meme = () => {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "boy.jpg",
  });

  const [allmemeImages, setAllmemeImages] = React.useState(memesData);

  /* LOG RANDOM DATA */
  // const randomId = () => {
  //   const memesLength = memesData.data.memes.length;
  //   const randomIndex = Math.floor(Math.random() * memesLength);
  //   const randomData = memesData.data.memes[randomIndex];
  //   console.log(randomData.id);
  //   console.log(randomData.width);
  //   console.log(randomData.height);
  // };

  /* UPDATE THINGS */
  // const things = ["Thing 1", "Thing 2"];
  // const thingsElements = things.map((thing) => {
  //   return <p key={thing}>{thing}</p>;
  // });

  // const addThing = () => {
  //   const newThing = `Thing ${things.length + 1}`;
  //   things.push(newThing);
  //   console.log(things);
  // };

  /* SET THINGS */
  // const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  // const thingsElements = things.map((thing) => {
  //   return <p>{thing}</p>;
  // });

  // const addThing = () => {
  //   const newThing = `Thing ${things.length + 1}`;
  //   setThings((prevState) => [...prevState, newThing]);
  // };

  /* using useState and prevState */
  // const [num, setNum] = React.useState(1);

  // const add = () => {
  //   setNum(num + 1);
  // };

  // const sub = () => {
  //   setNum(num - 1);
  // };

  // const add = () => {
  //   setNum((prevNum) => prevNum + 1);
  // };

  // const sub = () => {
  //   setNum((prevNum) => prevNum - 1);
  // };

  /* SET MEME IMAGE */
  // const [memeImage, setMemeImage] = React.useState("boy.jpg");
  // const updateImage = () => {
  //   const memesLength = memesData.data.memes.length;
  //   const randomIndex = Math.floor(Math.random() * memesLength);
  //   const randomData = memesData.data.memes[randomIndex];
  //   setMemeImage((memeImage) => {
  //     return (memeImage = randomData.folder);
  //   });
  // }

  console.log(memeImage);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemeImage((prevMemeImage) => {
      return {
        ...prevMemeImage,
        [name]: value,
      };
    });
  };

  const updateImage = () => {
    const memesLength = allmemeImages.data.memes.length;
    const randomIndex = Math.floor(Math.random() * memesLength);
    const randomData = memesData.data.memes[randomIndex];
    const folder = randomData.folder;
    setMemeImage((prevMemeImage) => ({
      ...prevMemeImage,
      randomImage: folder,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={memeImage.topText}
          placeholder="Top text"
          onChange={handleChange}
          className="form--inputs"
        />
        <input
          type="text"
          name="bottomText"
          value={memeImage.bottomText}
          placeholder="Bottom text"
          onChange={handleChange}
          className="form--inputs"
        />
        <button onClick={updateImage} className="form--button">
          Get a new meme image
        </button>
      </div>
      <div className="image--card">
        <img src={`images/${memeImage.randomImage}`} className="meme--image" />
        <p className="image--top-text">{memeImage.topText}</p>
        <p className="image--bottom-text">{memeImage.bottomText}</p>
      </div>
    </main>
  );
};

export default Meme;
