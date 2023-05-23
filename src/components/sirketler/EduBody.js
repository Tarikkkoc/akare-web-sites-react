import React from "react";

const EduBody = () => {
  return (
    <div className="bg-[url('https://akarebilisim.com.tr/images/bg.png')] pt-10 pb-10 ">
      <div className="container mx-auto p-4 gap-2 hakkimizda flex justify-center">
        <div className="w-1/2 flex flex-col text font-light colorGray">
          <h3 className="text-4xl font-normal">
            <span className="colorOrange text-4xl">AKARE</span>
            <span className="colorBlue text-4xl">EDU</span>
          </h3>
          <p className="mb-2.5">
            İş Sağlığı ve Güvenliği kapsamındaki İSG uzman eğitimi veren
            dershanelerin online eğitim düzenleme ve takip yazılımıdır.
          </p>
          <h3 className="text-3xl font-light colorOrange mt-5 my-2.5">
            Online Eğitim
          </h3>
          <ul className="list-disc ml-5 mb-2.5">
            <li>Görüntülü online eğitim verebilme</li>
            <li>Derseten önce ve sonra test</li>
            <li>Hazır soru havuzundan kendini test imkanı</li>
            <li>Bakanlığın kurallarına uygun</li>
            <li>Ders slaytlarını süre içinde izleyebilme</li>
            <li>Dersler ile ilgili Video ve döküman</li>
            <li>Web ve mobil üzerinden dersi izleyebilme</li>
          </ul>
          <a href="" className="text-blue-500 hover:underline">
            Detaylı Bilgi..
          </a>
        </div>
        <div className="w-[25%] p-4 sirketImg">
          <img
            className="border-4 h-52 size-full border-slate-200"
            src="https://akarebilisim.com.tr/images/edu.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EduBody;
