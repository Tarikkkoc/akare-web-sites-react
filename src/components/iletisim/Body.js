import React from "react";

const Body = () => {
  return (
    <div className="flex gap-4 pt-10 pb-10 px-20 hakkimizda">
      <div
        className="text font-normal text-gray-500 flex flex-col gap-2"
        id="address w-1/2"
      >
        <p>İstanbul Üniversitesi Avcılar Kampüsü, TEKNOKENT Z-15</p>
        <div className="flex gap-2">
          <div className="grid place-items-center">
            <img
              className="w-4 h-4 "
              src="https://www.pngfind.com/pngs/m/57-576089_location-icon-comments-map-icon-svg-hd-png.png"
            />
          </div>
          <p>Avcılar / İstanbul</p>
        </div>
        <div className="flex gap-2">
          <div className="grid place-items-center">
            <img
              className="w-4 h-4"
              src="https://www.svgrepo.com/show/164980/cell-phone.svg"
            />
          </div>
          <p>(212) 210 63 13 pbx / (212) 210 57 65</p>
        </div>
        <div className="flex gap-2">
          <div className="grid place-items-center">
            <img
              className="w-4 h-4 "
              src="https://www.svgrepo.com/show/90903/email-envelope.svg"
            />
          </div>
          <p> info@akareisg.com</p>{" "}
        </div>
      </div>
      <div className="px-5 w-1/2 flex items-centr flex-col hakkimizda2">
        <form>
          <div className="flex w-full gap-2">
            <input
              className="px-2 w-1/2 border border-solid border-gray-300 rounded-md text"
              type="text"
              id="name"
              name="name"
              placeholder="İsminiz"
              required
            />{" "}
            <input
              className="p-2 w-1/2 border border-solid border-gray-300 rounded-md text"
              type="email"
              id="email"
              name="email"
              placeholder="E-posta adresiniz"
              required
            />
          </div>
          <div className="pt-5 w-full">
            <textarea
              className="p-2 w-full border border-solid border-gray-300 rounded-md text"
              id="message"
              name="message"
              placeholder="Mesajınız"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="">
            <button
              className="bg-sky-200 float-right hover:bg-sky-400 border-none py-2 px-4 rounded-md text cursor-pointer"
              type="submit"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
