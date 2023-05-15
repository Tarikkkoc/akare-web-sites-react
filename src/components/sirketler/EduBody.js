import React from "react";

const EduBody = () => {
  return (
    <div className="flex pr-20 pt-10 pb-10 pl-20 gap-2 hakkimizda">
      <div className="w-1/2 flex flex-col text-sm font-light text-gray-600 gap-2">
        <h3 className="text-2xl font-normal text-orange-500">
          <span className="text-orange-500 text-2xl">AKARE</span>
          <span className="text-blue-500 text-2xl">EDU</span>
        </h3>
        <p>
          İş Sağlığı ve Güvenliği kapsamındaki İSG uzman eğitimi veren
          dershanelerin online eğitim düzenleme ve takip yazılımıdır.
        </p>
        <h3 className="text-2xl font-light text-orange-500">Online Eğitim</h3>
        <ul className="list-disc pl-5">
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
      <div>
        <img
          className="border-4 h-52 border-slate-200"
          src="https://akarebilisim.com.tr/images/edu.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default EduBody;
