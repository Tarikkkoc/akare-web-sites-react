import React, { useState } from "react";

const api = {
  key: "WtXWdPZPJeeZIv7FQ9AKIs1RozpVrKN6",
};

const Unsplash = () => {
  const [term, setTerm] = useState("");
  const [gif, setGif] = useState({});
  const getData = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api.key}&q=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGif(data);
        console.log("gif" + gif);
      });
  };
  return (
    <div className="flex flex-col gap-2 hakkimizdaDesign justify-cnter items-center">
      <h1 className="colorOrange text-3xl">Gif Ara</h1>
      <div className="flex gap-2 hakkimizdaDesign justify-center items-center">
        <input
          className="p-2 iletisim1 border border-solid border-gray-300 rounded-md text focus:outline-none focus:ring-1 focus:ring-blue-500 focus:shadow-lg"
          type="text"
          placeholder="Gif ara.."
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          className="borderSubmit hover:bg-sky-200 p-0.5 rounded-md text cursor-pointer"
          onClick={getData}
        >
          Ara
        </button>
      </div>
      {gif.data && gif.data.length > 0
        ? gif.data.map((img) => (
            <div key={img.id}>
              <div>
                <a
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  href={img.url}
                >
                  {img.id}
                </a>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Unsplash;
