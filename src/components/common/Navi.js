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
    <div className="border-b-4">
      <div className="bg-slate-100 navbar flex gap-40">
        <div className="pl-6 sm:pl-24 pt-1.5 pb-1.5 w-1/4 navImg max-w-5xl">
          <Link to="/">
            <img
              className="align-middle w-full object-contain "
              src="https://akarebilisim.com.tr/images/logoNew3.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex nav">
          <ul className="flex nav items-center font-sans text-gray-500 shrink-1">
            <Link to="/">
              <li className="pr-4 hover:text-white hover:cursor-pointer grid place-items-center hover:bg-gray-400 h-14 cursor-pointer">
                <p className="text-xs ml-4">ANA SAYFA</p>
              </li>
            </Link>
            <Link to="/projelerimiz">
              <li className="pr-4 hover:text-white hover:cursor-pointer grid place-items-center hover:bg-gray-400 h-14 cursor-pointer">
                <p className="text-xs ml-4">PROJELERIMIZ</p>
              </li>
            </Link>
            <Link to="/hizmetlerimiz">
              <li className="pr-4 hover:text-white hover:cursor-pointer grid place-items-center hover:bg-gray-400 h-14 cursor-pointer">
                <p className="text-xs ml-4">HIZMETLERIMIZ</p>
              </li>{" "}
            </Link>
            <Link to="kurumsal">
              <li className="pr-4 hover:text-white hover:cursor-pointer grid place-items-center hover:bg-gray-400 h-14 cursor-pointer">
                <p className="text-xs ml-4">KURUMSAL</p>
              </li>{" "}
            </Link>
            <Link to="/iletisim">
              <li className="pr-4 hover:text-white hover:cursor-pointer grid place-items-center hover:bg-gray-400 h-14 cursor-pointer">
                <p className="text-xs ml-4">ILETISIM</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="toggle float-right hidden" ref={container}>
          <button type="button" class="button" onClick={handleButtonClick}>
            ☰
          </button>
          {open && (
            <div className="dropdown">
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
