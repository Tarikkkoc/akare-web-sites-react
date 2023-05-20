import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="pr-20 gap-3 pl-20 pt-5 pb-10 flex flex-col hakkimizda">
      <div id="aKareISG" className="flex gap-3 justify-between hakkimizda2">
        <div className="pt-5">
          <img
            className="h-52"
            src="https://akarebilisim.com.tr/images/1.png"
            alt=""
          />
        </div>
        <div className="w-9/12 pl pt-2.5 text font-normal text-gray-500 flex flex-col gap-2">
          <h2>
            <span className="text-orange-500 text-3xl">aKare</span>
            <span className="text-blue-500 text-3xl">ISG</span>
          </h2>
          <p>
            aKareISG İş Sağlığı ve Güvenliği yazılımı; ister bir OSGB firması
            olun ister bir KOBİ, işletmenizdeki ISG kanunlarını uygulama
            konusundaki bütün ihtiyaçlarınızı karşılayacak şekilde
            hazırlanmıştır.
          </p>
          <p>
            Programda bir çok yapı hazır şablon olarak gelmekte ve yeni çıkan
            kanun ya da mevzuatlar sisteme hızla entegre edilmektedir.
          </p>
          <p>
            Program bulut teknolojisi ile online çalışmaktadır. Dilerseniz
            farklı bir lisanslama ile firmanıza da kurulum yapılmaktadır.
          </p>
          <Link to="/akareisg">
            <span className="text-blue-500 hover:underline">
              Detaylı bilgi..
            </span>
          </Link>
        </div>
      </div>
      <div id="aKareTASK" className="flex gap-2 hakkimizda2 justify-between">
        <div className="w-9/12 pr-5 pt-2.5 text font-normal text-gray-500 flex flex-col gap-2">
          <h2>
            <span className="text-orange-500 text-3xl">aKare</span>
            <span className="text-blue-500 text-3xl">TASK</span>
          </h2>
          <p>
            OSGB firmalarının ya da Bireysel İSG uzman veya işyeri hekimlerinin,
            İSG faaliyetlerini yürüterek izleyebileceği bir yazılımdır
          </p>
          <p>
            Takvim ve görev mantığı ile çalışan web tabanlı yazılım aynı zamanda
            mobil arayüzü ile de kullanıcının her şekilde takip etmesi gereken
            işleri yönetmesine ve planlamasına olanak sağlamaktadır.
          </p>
          <Link to="/akaretask">
            <span className="text-blue-500 hover:underline">
              Detaylı bilgi..
            </span>
          </Link>
        </div>
        <div className="pt-5 pl-10">
          <img
            className=" h-52"
            src="https://akarebilisim.com.tr/images/1.png"
            alt=""
          />
        </div>
      </div>
      <div id="aKareEDU" className="flex gap-3 justify-between hakkimizda2 ">
        <div className="pt-5 ">
          <img
            className="h-52"
            src="https://akarebilisim.com.tr/images/1.png"
            alt=""
          />
        </div>
        <div className="w-9/12 pl pt-2.5 text font-normal text-gray-600 flex flex-col gap-2">
          <h2>
            <span className="text-orange-500 text-3xl">aKare</span>
            <span className="text-blue-500 text-3xl">EDU</span>
          </h2>
          <p>
            İş Sağlığı ve Güvenliği kapsamındaki İSG uzman eğitimi veren
            dershanelerin online eğitim düzenleme ve takip yazılımıdır.
          </p>
          <p>
            Bakanlığın yönergelerine uygun olarak hazırlanan bu yazılım ile,
            yönetmeliğe uygun eğitim düzenleyebilirsiniz.
          </p>
          <p>
            Öğrenciler sisteme girip açılan tarihlerdeki eğitimlere girer
            öncesinde ve sonrasında soruları cevaplar.
          </p>
          <p>
            Görüntülü olarak aynı anda bütün sınıfa uzaktan eğitim
            verebilirsiniz.
          </p>
          <Link to="/akareedu">
            <span className="text-blue-500 hover:underline">
              Detaylı bilgi..
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
