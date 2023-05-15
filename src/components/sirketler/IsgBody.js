import React from "react";

const IsgBody = () => {
  return (
    <div className="flex pr-20 pt-10 pb-10 pl-20 gap-2 hakkimizda">
      <div className="w-1/2 flex flex-col text-sm font-light text-gray-600 gap-2">
        <div>
          <h3>
            <span className="text-2xl font-normal text-orange-500">AKARE</span>
            <span className="text-2xl font-normal text-blue-500">ISG</span>
          </h3>
          <p>
            aKareISG İş Sağlığı ve Güvenliği yazılımı; ister bir OSGB firması
            olun ister bir KOBİ, işletmenizdeki ISG kanunlarını uygulama
            konusundaki bütün ihtiyaçlarınızı karşılayacak şekilde
            hazırlanmıştır.
          </p>
          <p>
            Programda bir çok yapı hazır şablon olarak gelmekte ve yeni çıkan
            kanun yada mevzuatlar sisteme hızla entegre edilmektedir.
          </p>
          <p>
            Program bulut teknolojisi ile online çalışmaktadır. Dilerseniz
            farklı bir lisanslama ile firmanıza da kurulum yapılmaktadır.
          </p>
        </div>
        <div className="flex gap-20 pr-2 pl-2">
          <div id="riskAnalizi">
            <h3 className="text-2xl font-normal text-orange-500">
              Risk Analizi
            </h3>
            <ul className="list-disc pl-10 pt-2.5">
              <li>Matris</li>
              <li>Fine Kinney</li>
              <li>3T</li>
              <li>Hazard Rating</li>
              <li>Checklist</li>
            </ul>
          </div>
          <div id="egitim">
            <h3 className="text-2xl font-normal text-orange-500">Eğitim</h3>
            <ul className="list-disc pl-10 pt-2.5">
              <li>Konulara Göre Eğitim</li>
              <li>Sertifika Basma</li>
              <li>Toplu Eğitim Düzenleme</li>
              <li>Sınav Sonuçları Takip</li>
              <li>Eğitim Oturum Düzenleyebilme</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-12 pr- pl-">
          <div id="isgFormlari">
            <h3 className="text-2xl font-normal text-orange-500">
              İSG Formları
            </h3>
            <ul className="list-disc pl-10 pt-2.5">
              <li>Ramak Kala Formu</li>
              <li>Tehlike Analiz Formu</li>
              <li>Tespit Öneri Defteri</li>
              <li>İş Kazası</li>
              <li>DÖF</li>
            </ul>
          </div>
          <div id="isyeriHekimi">
            <h3 className="text-2xl font-normal text-orange-500">
              İşyeri Hekimi Otomasyonu
            </h3>
            <ul className="list-disc pl-10 pt-2.5">
              <li>Periyodik Muayene</li>
              <li>ilk, son işten çıkış Muayeneleri</li>
              <li>Reçete Düzenleyebilme</li>
              <li>Tetkik Takip</li>
              <li>Aşı, Pansuman, Gebe-Emzikli, Diyabet Takibi</li>
              <li>Ecza Deposu</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-12 pr-2 pl-2">
          <div id="yapilanmalar">
            <h3 className="text-2xl font-normal text-orange-500">
              Yapılanmalar
            </h3>
            <ul className="list-disc pl-10 pt-2.5">
              <li>Yıllık Çalışma Planı</li>
              <li>Yıllık Eğitim Planı</li>
              <li>Acil Eylem Ekibi</li>
              <li>Kurul Toplantıları</li>
              <li>İç Yönetmelik</li>
              <li>Çalışan İSG Kitabı</li>
            </ul>
          </div>
          <div id="uygulamalar">
            <h3 className="text-2xl font-normal text-orange-500">
              Uygulamalar
            </h3>
            <ul className="list-disc pl-10 pt-2.5">
              <li>Yasal Uygunluk</li>
              <li>Kişisel Koruyucu Takip</li>
              <li>Ekipman Takip</li>
              <li>Disiplin Cezaları</li>
              <li>Altişveren Takip</li>
              <li>Maruziyet</li>
            </ul>
          </div>
        </div>
        <a href="" className="text-blue-500 hover:underline pt-5 pl-2">
          Detaylı Bilgi..
        </a>
      </div>
      <div className="w-1/2">
        <img
          className="border-4 h-52 border-slate-200"
          src="https://akarebilisim.com.tr/images/isg.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default IsgBody;
