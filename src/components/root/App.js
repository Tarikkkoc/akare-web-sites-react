import { React } from "react";
import Navi from "./../common/Navi";
import Footer from "../common/Footer";
import { Routes, Route } from "react-router-dom";
import Anasayfa from "../anaSayfa/Anasayfa";
import Projelerimiz from "../projelerimiz/Projelerimiz";
import Hizmetlerimiz from "../hizmetlerimiz/Hizmetlerimiz";
import "../../App.css";
import Iletisim from "../iletisim/Iletisim";
import Kurumsal from "../kurumsal/Kurumsal";
import AKareCloud from "../sirketler/AKareCloud";
import AKarePentest from "../sirketler/AKarePentest";
import AKareIsg from "../sirketler/AKareIsg";
import AKareEdu from "../sirketler/AKareEdu";

function App() {
  const sirketler = [
    {
      img: "https://akarebilisim.com.tr/images/aKareCloudLogoIco.png",
      name: "aKare",
      link: "akarecloud",
      statu: "CLOUD",
      title: "AKARECLOUD",
      nick: "aKareCLOUD",
    },
    {
      img: "https://akarebilisim.com.tr/images/pentestLogo.png",
      name: "aKare",
      link: "akarepentest",
      statu: "PENTEST",
      title: "AKAREPENTEST",
      nick: "aKarePENTEST",
    },
    {
      img: "https://akarebilisim.com.tr/images/logoTek.png",
      name: "aKare",
      link: "akareisg",
      statu: "ISG",
      title: "AKAREISG",
      nick: "aKareISG",
    },
    {
      img: "https://akarebilisim.com.tr/images/aKareEDULogoIco.png",
      name: "aKare",
      link: "akareedu",
      statu: "EDU",
      title: "AKAREEDU",
      nick: "aKareEDU",
    },
  ];
  return (
    <div className="">
      <Navi />
      <div className="container mx-auto px-5">
        <Routes>
          <Route path="/" element={<Anasayfa sirketler={sirketler} />} />
          <Route path="/projelerimiz" element={<Projelerimiz />} />
          <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/akarecloud" element={<AKareCloud />} />
          <Route path="/akarepentest" element={<AKarePentest />} />
          <Route path="/akareisg" element={<AKareIsg />} />
          <Route path="/akareedu" element={<AKareEdu />} />
        </Routes>
      </div>

      <Footer sirketler={sirketler} />
    </div>
  );
}

export default App;
