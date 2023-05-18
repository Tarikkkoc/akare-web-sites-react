import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navi = () => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleButtonClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="shadow-lg bg-slate-100 border-t-2 border-red-500">
      <div className="flex justify-between px-8 items-center container mx-auto">
        <div className="flex-none  ">
          <Link to="/">
            <img
              className="align-middle min-h-[50px] h-6  "
              src="https://akarebilisim.com.tr/images/logoNew3.png"
              alt=""
            />
          </Link>
        </div>
        <ul className="flex font-dosis font-medium text-xs menu-item mb-3 px-1 nav mr-3 items-ce text-gray-500 shrink-1">
          <Link to="/">
            <li className="hover:text-white px-2 font-medium hover:cursor-pointer py-3  hover:bg-gray-400 h-10 cursor-pointer">
              ANA SAYFA
            </li>
          </Link>
          <Link to="/projelerimiz">
            <li className="hover:text-white px-2 font-medium hover:cursor-pointer py-3 hover:bg-gray-400 h-10 cursor-pointer">
              PROJELERIMIZ
            </li>
          </Link>
          <Link to="/hizmetlerimiz">
            <li className=" hover:text-white px-2 hover:cursor-pointer grid place-items-center hover:bg-gray-400 py-3 h-10 cursor-pointer">
              <p className="text-xs ">HIZMETLERIMIZ</p>
            </li>{" "}
          </Link>
          <Link to="kurumsal">
            <li className=" hover:text-white px-2 hover:cursor-pointer grid place-items-center hover:bg-gray-400 h-10 py-3 cursor-pointer">
              <p className="text-xs ">KURUMSAL</p>
            </li>{" "}
          </Link>
          <Link to="/iletisim">
            <li className="hover:text-white px-2 hover:cursor-pointer grid place-items-center hover:bg-gray-400 h-10 py-3 cursor-pointer">
              <p className="text-xs ">ILETISIM</p>
            </li>
          </Link>
        </ul>

        <div className="toggle justify-end hidden" ref={container}>
          <button type="button" class="button" onClick={handleButtonClick}>
            ☰
          </button>
          {open && (
            <div className="dropdown bg-slate-100">
              <ul>
                <Link to="/">
                  <li className="border-2">ANA SAYFA</li>
                </Link>
                <Link to="/projelerimiz">
                  <li className="border-2">PROJELERİMİZ</li>
                </Link>
                <Link to="/hizmetlerimiz">
                  <li className="border-2">HİZMETLERİMİZ</li>
                </Link>
                <Link to="/kurumsal">
                  <li className="border-2">KURUMSAL</li>
                </Link>
                <Link to="/iletisim">
                  <li className="border-2">İLETİŞİM</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navi;
