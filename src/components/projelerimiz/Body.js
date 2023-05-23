import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className=" gap-3 bg-[url('https://akarebilisim.com.tr/images/bg.png')] pt-5 pb-10 flex flex-col hakkimizda">
      <div className="container flex flex-col gap-6 px-6 justify-center mx-auto">
        <div
          id="aKareISG"
          className="text font-normal text-gray-500 flex justify-center gap-10 hakkimizda2"
        >
          <div className="w-[20%] hizmetImg">
            <img
              className=""
              src="https://akarebilisim.com.tr/images/1.png"
              alt=""
            />
          </div>
          <div className="w-[60%] hizmetP  text font-normal colorGray flex flex-col gap-2">
            <h2 className="mt-5 my-2.5">
              <span className="colorOrange text-3xl">aKare</span>
              <span className="colorBlue text-3xl">ISG</span>
            </h2>
            <p className="mb-2.5">
              aKareISG İş Sağlığı ve Güvenliği yazılımı; ister bir OSGB firması
              olun ister bir KOBİ, işletmenizdeki ISG kanunlarını uygulama
              konusundaki bütün ihtiyaçlarınızı karşılayacak şekilde
              hazırlanmıştır.
            </p>
            <p className="mb-2.5">
              Programda bir çok yapı hazır şablon olarak gelmekte ve yeni çıkan
              kanun ya da mevzuatlar sisteme hızla entegre edilmektedir.
            </p>
            <p className="mb-2.5">
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
        <div className=" grid place-items-center">
          <hr className="my-5 border-t w-[80%]" />
        </div>
        <div
          id="aKareTASK"
          className="text font-normal colorGray flex justify-center gap-2 hakkimizda2"
        >
          <div className="flex flex-col gap-2 w-[60%] hizmetP">
            <h2 className="mt-5 my-2.5">
              <span className="colorOrange text-3xl">aKare</span>
              <span className="colorBlue text-3xl">TASK</span>
            </h2>
            <p className="mb-2.5">
              OSGB firmalarının ya da Bireysel İSG uzman veya işyeri
              hekimlerinin, İSG faaliyetlerini yürüterek izleyebileceği bir
              yazılımdır
            </p>
            <p className="mb-2.5">
              Takvim ve görev mantığı ile çalışan web tabanlı yazılım aynı
              zamanda mobil arayüzü ile de kullanıcının her şekilde takip etmesi
              gereken işleri yönetmesine ve planlamasına olanak sağlamaktadır.
            </p>
            <Link to="/akaretask">
              <span className="text-blue-500 hover:underline">
                Detaylı bilgi..
              </span>
            </Link>
          </div>
          <div className="w-[20%] hizmetImg">
            <img
              className=""
              src="https://akarebilisim.com.tr/images/1.png"
              alt=""
            />
          </div>
        </div>
        <div className=" grid place-items-center">
          <hr className="my-5 border-t w-[80%]" />
        </div>
        <div
          id="aKareEDU"
          className="text font-normal colorGray flex justify-center gap-10 hakkimizda2 "
        >
          <div className="w-[20%] hizmetImg ">
            <img
              className=""
              src="https://akarebilisim.com.tr/images/1.png"
              alt=""
            />
          </div>
          <div className="w-[60%] hizmetP pl pt-2.5 text font-normal colorGray flex flex-col gap-2">
            <h2 className="mt-5 my-2.5">
              <span className="colorOrange text-3xl">aKare</span>
              <span className="colorBlue text-3xl">EDU</span>
            </h2>
            <p className="mb-2.5">
              İş Sağlığı ve Güvenliği kapsamındaki İSG uzman eğitimi veren
              dershanelerin online eğitim düzenleme ve takip yazılımıdır.
            </p>
            <p className="mb-2.5">
              Bakanlığın yönergelerine uygun olarak hazırlanan bu yazılım ile,
              yönetmeliğe uygun eğitim düzenleyebilirsiniz.
            </p>
            <p className="mb-2.5">
              Öğrenciler sisteme girip açılan tarihlerdeki eğitimlere girer
              öncesinde ve sonrasında soruları cevaplar.
            </p>
            <p className="mb-2.5">
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
    </div>
  );
};

export default Body;
