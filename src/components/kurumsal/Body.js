import React, { useState } from "react";
import "../../Body.css";

const Body = () => {
  const [selected, setSelected] = useState("hakkimizda");

  const handleClick = (item) => {
    setSelected(item);
  };

  const getContent = () => {
    switch (selected) {
      case "hakkimizda":
        return (
          <div className="text font-dosis font-light text-gray-500 pt-5 gap-2 pb-10">
            <p>
              1989 yılından beri sektörde olan firmamız, yıllar içinde yazılımın
              bir çok dalında başarılı uygulamalar yaparak, her zaman en iyiyi
              ve müşteri memnuniyetini hedeflemiştir.
            </p>
            <p>
              2000 yılında kendi bilgi işlem merkezini kurarak yüksek hızlı
              fiber optik bağlantılar ile desteklediği Türkiye lokasyonlu sunucu
              ve hosting altyapısını oluşturmuştur. Yazılımların tamamını kendi
              sunucularında barındıran firmamız güvenlik, hız ve devamlılığı
              esas almıştır. Kurulan bu sistemin son 3 yıldır uptime oranını
              (yıl içinde kesintisiz hizmet verme oranı) %100 tutarak bu
              konudaki başarısını ispatlamıştır.
            </p>
            <p>
              Yıllar içinde gerek yazılım ekibini, gerek tecrübelerini
              arttırarak hem sektörü iyi bir şekilde analiz etmiş hemde bunu
              başarılı bir şekilde uygulamıştır.
            </p>
            <p>
              Firmamız yazılımcılığın sadece kod yazmaktan ibaret olmadığını
              düşünerek firma içinde sistem analisti barındırmış, firmalarla
              yapılan yazılımlardan önce sürecin en az % 40 'ını müşteriyi
              dinleme, anlama ve onun için en iyiyi hesaplamaya ayırmıştır.
              Sonrasına da yazılımın implementasyonu ve test süreçleri koyarak
              yazılan yazılımın en başarılı şekilde uygulanmasını sağlanmıştır.
            </p>
            <p>
              Sektörde olan gelişmeleri yakından takip eden firmamız;
              gelişmeleri takip ve uygulamada arge süreçleri için mesaisinin %10
              'unu ayırmıştır. Kadrosunun eğitimini, devamlı yapılan eğitim ve
              brifinglerle her zaman yüksek tutmuştur.
            </p>
            <p>
              Firmaların markalaşma ve kurumsallaşma süreçlerini en iyi şekilde
              geliştirmeyi ve desteklemeyi hedeflemiş ve bu alanda yazılımlar ve
              projeler geliştirmiş, uygulama süreçlerinde de bir çok firmaya
              danışmanlık hizmeti vermiştir.
            </p>
            <p>
              2012 yılından beri İstanbul Üniversitei TEKNOKENT 'te
              falliyetlerimize devam etmekteyiz.
            </p>
            <h2 className="text-2xl pt-2.5 font-light">Faaliyetlerimiz</h2>
            <ul className="pl-10 pt-2.5 list-disc">
              <li>
                1992 de McDonalds tüm İstanbul şubeleri ürün kontrol ve takip
                yazılımı
              </li>
              <li>
                1994 İnterbank tüm şubelerin analiz ve performans
                değerlendirmesi yazılımı
              </li>
              <li>
                2001 yılında kendi datacenter larımızda sunucu hizmeti vermeye
                başladık
              </li>
              <li>2005 Mikro ve Telsim ile çözüm ortaklığı</li>
              <li>2005 Saha içi sıcak satış mobil terminal yazılımı</li>
              <li>
                2006 Kasımpaşa Askeri hastanesi telefon ve intranet üzerinden
                hasta randevu yazılımı
              </li>
              <li>
                2012 Teknokentte aKareİSG yazılımını üretip bütün Türkiye’de
                binlerce kullanıcı ve kuruma hizmet vermeye başladık
              </li>
            </ul>
          </div>
        );
      case "vizyon":
        return (
          <div className="text font-light text-gray-500 gap-2 pt-5 pb-10">
            <p>Liderlik, Sorumluluk ve Vizyon İster</p>
            <ul className="pl-10 pt-2.5 list-disc">
              <li>Öncü,</li>
              <li>Müşteri odaklı,</li>
              <li>Dinamik,</li>
              <li>Dürüst,</li>
              <li>Sürdürülebilir,</li>
            </ul>
            <p className="pt-2.5">
              "aKare GÜVENCESİYLE" imzasını nesilden nesile taşımak için
              çalışıyoruz.
            </p>
          </div>
        );
      case "politika":
        return (
          <div className=" text font-light flex flex-col gap-2 text-gray-500 gap-2 pt-5 pb-10">
            <p>
              aKare olarak, Varlıklarımızın gizlilik, bütünlük ve
              erişilebilirlik özelliklerinin korunmasını ve risklerin kabul
              edilebilir seviyeye indirilmesinin sağlanmasını, İş sürekliliğimiz
              ve bilgi varlıklarımıza yönelik her türlü riski yönetmek amacıyla;
              “Bilgi Güvenliği Yönetim Sistemi’mizin” ISO/IEC 27001 standardının
              gereklerini yerine getirecek şekilde dokümante edilmesini,
              belgelendirilmesini ve sürekli iyileştirilmesini, bilgi
              varlıklarına yönelik risklerin sistematik olarak yönetilmesini,
              bilgi güvenliği farkındalığını artırmak amacıyla teknik ve
              davranışsal yetkinlikleri geliştirecek eğitimlerin
              gerçekleştirilmesi yönünde faaliyetlerimizi, uyguladığımız diğer
              yönetim sistemleri ile birlikte bütünleşik bir şekilde yönetmeyi,
              taahhüt ederiz.
            </p>
            <p>
              Şirketimiz bu politikanın uygulanması ile, yasal zorunluluklara
              uymayı, üçüncü taraflar (iş ortakları, müşteriler, tedarikçiler)
              ile yapılan sözleşmelerde yer alan hükümlere uymayı, temel ve
              destekleyici iş faaliyetlerinin en az kesinti ile devam etmesini
              sağlamayı, güvenlik olaylarından doğan her türlü gelir veya fırsat
              kaybını en aza indirmeyi, bilgi güvenliği gereksinimlerini
              karşılamayı, ilkeleri olarak benimsemiş ve ilgili taraflara
              sunmuştur.
            </p>
          </div>
        );
      case "arge":
        return (
          <div className="text font-light text-gray-500 pt-5  pb-10">
            <p>
              İstanbul Üniversitesi TEKNOKENT te faaliyetlerini yürüten
              firmamız, kurulduğu ilk günden beri AR-GE ye öncelik vermiş ve bu
              yönde çalışmalarını gerek akademik olarak gerek teknolojik olarak
              devam ettirmiştir.
            </p>
            <p className="pt-2.5">
              Faaliyetini yürütmekte olduğumuz AR-GE faaliyetlerinden bazıları ;
            </p>
            <ul className="pl-10 pt-2.5 list-disc">
              <li>IOT ile sahadan veri toplama</li>
              <li>Mekanik cihaz kontrolü ve robotik faaliyetler</li>
              <li>Yapay zeka çalışmaları</li>
              <li>Big data veri analiz metodolojileri</li>
            </ul>
          </div>
        );
      case "kurumsal":
        return (
          <div className="bg-[url('https://akarebilisim.com.tr/images/bg.png')] text font-light text-gray-500 pt-5 flex flex-col gap-2 pb-10">
            <div className="flex">
              <div className="col-sm-2 w-1/6">Ünvan</div>
              <div className="col-sm-10">
                :aKare Bilişim Hizmetleri Ticaret A.Ş.
              </div>
            </div>
            <div className="flex">
              <h3 className="col-sm-2 w-1/6">Vergi Dairesi / No</h3>
              <p className="col-sm-2">:Avcılar / 013 065 1491</p>
            </div>
            <div className="flex">
              <h3 className="col-sm-2 w-1/6">Ticaret Sicil No</h3>
              <p className="col-sm-2">:981915-0</p>
            </div>
            <div className="flex">
              <h3 className="col-sm-2 w-1/6">Banka</h3>
              <p className="col-sm-2">:Garanti Bankası E5 Avcılar Şubesi</p>
            </div>
            <div className="flex">
              <h3 className="col-sm-2 w-1/6">Banka Hesap No</h3>
              <p className="col-sm-2">:TR 85 0006 2001 5280 0006 2996 55</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="menu bg-[url('https://akarebilisim.com.tr/images/bg.png')] hakkimizda">
      <div className="container mx-auto justify-center min-w-[80%] w-[80%]">
        <ul className="flex mt-5 text-blue-500 font-light hakkimizda2 ">
          <li
            id={selected === "hakkimizda" ? "selected" : ""}
            className={` cursor-pointer ${
              selected === "hakkimizda"
                ? "rounded-t px-2.5 py-3.5 text-gray-700 text border-x-2 border-t-2"
                : " text colorKurumsal px-2.5 py-3.5 hover:bg-gray-200 border-b-2"
            }`}
            onClick={() => handleClick("hakkimizda")}
          >
            HAKKIMIZDA
          </li>
          <li
            id={selected === "vizyon" ? "selected" : ""}
            className={` cursor-pointer ${
              selected === "vizyon"
                ? " rounded-t px-2.5 py-3.5 text-gray-700 text border-x-2 border-t-2"
                : "text colorKurumsal px-2.5 py-3.5 hover:bg-gray-200 border-b-2"
            }`}
            onClick={() => handleClick("vizyon")}
          >
            VİZYON-MİSYON
          </li>
          <li
            id={selected === "politika" ? "selected" : ""}
            className={` cursor-pointer ${
              selected === "politika"
                ? "rounded-t px-2.5 py-3.5 text-gray-700 text border-x-2 border-t-2"
                : "text colorKurumsal px-2.5 py-3.5 hover:bg-gray-200 border-b-2"
            }`}
            onClick={() => handleClick("politika")}
          >
            BGYS POLİTİKAMIZ
          </li>
          <li
            id={selected === "arge" ? "selected" : ""}
            className={` cursor-pointer ${
              selected === "arge"
                ? "rounded-t px-2.5 py-3.5 text-gray-700 text border-x-2 border-t-2"
                : "text colorKurumsal px-2.5 py-3.5 hover:bg-gray-200"
            }`}
            onClick={() => handleClick("arge")}
          >
            ARGE ÇALIŞMALARIMIZ
          </li>
          <li
            id={selected === "kurumsal" ? "selected" : ""}
            className={` cursor-pointer ${
              selected === "kurumsal"
                ? "rounded-t px-2.5 py-3.5 text-gray-700 text border-x-2 border-t-2"
                : "text colorKurumsal px-2.5 py-3.5 hover:bg-gray-200"
            }`}
            onClick={() => handleClick("kurumsal")}
          >
            KURUMSAL BİLGİLERİMİZ
          </li>
        </ul>
        {/* <div className=" grid place-items-center">
          <hr className="mb-5 border-t w-[80%]" />
        </div> */}
        <div className="content">{getContent()}</div>
      </div>
    </div>
  );
};

export default Body;
