import React from "react";

const IsgBody = () => {
  return (
    <div className="bg-[url('https://akarebilisim.com.tr/images/bg.png')] pt-10 pb-10">
      <div className="container mx-auto p-4 gap-2 hakkimizda flex justify-center">
        <div className="w-1/2 iletisim1 text font-light colorGray">
          <div className="w-full">
            <h3 className="mt-5 my-2.5">
              <span className="text-4xl font-normal colorOrange">AKARE</span>
              <span className="text-4xl font-normal colorBlue">ISG</span>
            </h3>
            <p className="mb-2.5">
              aKareISG İş Sağlığı ve Güvenliği yazılımı; ister bir OSGB firması
              olun ister bir KOBİ, işletmenizdeki ISG kanunlarını uygulama
              konusundaki bütün ihtiyaçlarınızı karşılayacak şekilde
              hazırlanmıştır.
            </p>
            <p className="mb-2.5">
              Programda bir çok yapı hazır şablon olarak gelmekte ve yeni çıkan
              kanun yada mevzuatlar sisteme hızla entegre edilmektedir.
            </p>
            <p className="mb-2.5">
              Program bulut teknolojisi ile online çalışmaktadır. Dilerseniz
              farklı bir lisanslama ile firmanıza da kurulum yapılmaktadır.
            </p>
          </div>
          <div className="flex iletisimInput gap-32">
            <div id="riskAnalizi">
              <h3 className="text-3xl font-normal mt-5 my-2.5 colorOrange">
                Risk Analizi
              </h3>
              <ul className="list-disc ml-10 mb-2.5">
                <li>Matris</li>
                <li>Fine Kinney</li>
                <li>3T</li>
                <li>Hazard Rating</li>
                <li>Checklist</li>
              </ul>
            </div>
            <div id="egitim">
              <h3 className="text-3xl font-normal mt-5 my-2.5 colorOrange">
                Eğitim
              </h3>
              <ul className="list-disc ml-10 mb-2.5">
                <li>Konulara Göre Eğitim</li>
                <li>Sertifika Basma</li>
                <li>Toplu Eğitim Düzenleme</li>
                <li>Sınav Sonuçları Takip</li>
                <li>Eğitim Oturum Düzenleyebilme</li>
              </ul>
            </div>
          </div>
          <div className="flex iletisimInput gap-32">
            <div id="isgFormlari ">
              <h3 className="text-3xl font-normal mt-5 my-2.5 colorOrange">
                İSG Formları
              </h3>
              <ul className="list-disc ml-10 mb-2.5">
                <li>Ramak Kala Formu</li>
                <li>Tehlike Analiz Formu</li>
                <li>Tespit Öneri Defteri</li>
                <li>İş Kazası</li>
                <li>DÖF</li>
              </ul>
            </div>
            <div id="isyeriHekimi">
              <h3 className="text-3xl font-normal mt-5 my-2.5 colorOrange">
                İşyeri Hekimi Otomasyonu
              </h3>
              <ul className="list-disc ml-10 mb-2.5">
                <li>Periyodik Muayene</li>
                <li>ilk, son işten çıkış Muayeneleri</li>
                <li>Reçete Düzenleyebilme</li>
                <li>Tetkik Takip</li>
                <li>Aşı, Pansuman, Gebe-Emzikli, Diyabet Takibi</li>
                <li>Ecza Deposu</li>
              </ul>
            </div>
          </div>
          <div className="flex iletisimInput gap-32">
            <div id="yapilanmalar">
              <h3 className="text-3xl font-normal mt-5 my-2.5 colorOrange">
                Yapılanmalar
              </h3>
              <ul className="list-disc ml-10 mb-2.5">
                <li>Yıllık Çalışma Planı</li>
                <li>Yıllık Eğitim Planı</li>
                <li>Acil Eylem Ekibi</li>
                <li>Kurul Toplantıları</li>
                <li>İç Yönetmelik</li>
                <li>Çalışan İSG Kitabı</li>
              </ul>
            </div>
            <div id="uygulamalar">
              <h3 className="text-3xl font-normal mt-5 my-2.5 colorOrange">
                Uygulamalar
              </h3>
              <ul className="list-disc ml-10 mb-2.5">
                <li>Yasal Uygunluk</li>
                <li>Kişisel Koruyucu Takip</li>
                <li>Ekipman Takip</li>
                <li>Disiplin Cezaları</li>
                <li>Altişveren Takip</li>
                <li>Maruziyet</li>
              </ul>
            </div>
          </div>
          <a href="" className="text-blue-500 hover:underline">
            Detaylı Bilgi..
          </a>
        </div>
        <div className="w-[25%] p-4 sirketImg">
          <img
            className="border-4 size-full h-52 border-slate-200"
            src="https://akarebilisim.com.tr/images/isg.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IsgBody;
