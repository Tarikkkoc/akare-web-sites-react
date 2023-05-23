import React from "react";

const CloudBody = () => {
  return (
    <div className="bg-[url('https://akarebilisim.com.tr/images/bg.png')] pt-10 pb-10">
      <div className="container mx-auto p-4 gap-2 hakkimizda flex justify-center">
        <div className="w-1/2 flex flex-col text font-light colorGray hakkimizda2">
          <h1 className="text-4xl font-normal mt-5 my-2.5">
            <span className="colorOrange">AKARE</span>
            <span className="colorBlue">CLOUD</span>
          </h1>
          <p className="mb-2.5">
            2000 yılından beri kendi sunucuları ile Türkiye'de hizmet veren
            firmamız, VPS ve dedicated sunucuları ve yüksek kapasiteli altyapısı
            ile hizmet vermektedir.
          </p>
          <p className="mb-2.5">
            7/24 sunucuları izleyen CEH (Certifikated Ethical Hacker)
            sertifikalı ekibimiz, sistemin güvenli ve stabil çalışmasını
            sağlamaktadır.
          </p>
          <p className="mb-2.5">
            Microsoft SPLA partneri olan firmamız Microsoft ürün ve uygulamaları
            konusunda da lisans ve destek sağlamaktadır.
          </p>
          <p className="mb-2.5">
            Sunucu barındırma, bir veya birden fazla web sitesini barındırmak,
            e-posta veya USS (Uygulama Servis Sağlayıcısı) hizmetleri sağlamak
            ve sunucu üzerinde çeşitli internet uygulamaları çalıştırmak isteyen
            şirketler için ideal bir çözümdür. A Kare Bilişim’ın sunduğu sunucu
            barındırma hizmeti, şirketlerin A Bilgisayar DataCenter’ın
            faydalanmalarına imkan tanır. İçerik sağlayıcılar, USS’ler (Uygulama
            Servis Sağlayıcısı) veya şirketler bu sayede enerji veya data
            kesintilerini, ya da bant genişliği, kapasite sorunlarını tamamıyla
            unutarak kendi kullanıcılarına veya müşterilerine yüksek kalitede
            hizmet sağlayabilirler. Şirketler, 365 gün 24 saat boyunca
            kesintisiz olarak Internet erişimine açık bir ortamda bulunan
            sunucularına uzaktan erişim protokolleri aracılığı ile bulundukları
            yerden istedikleri anda erişebilir ve diledikleri güncellemeleri
            yapabilirler.
          </p>
          <h3 className="text-3xl font-normal colorOrange mt-5 my-2.5">
            Süreklilik
          </h3>
          <p className="mb-2.5">
            aKare yıl içinde min. %99.9 süreklilik ile çalışmaktadır. Hatlarda
            olan aksaklıktan en az düzeyde etkilenilmekte, kullanılan BGP4
            standardı sayesinde bağlı olunan internet omurgasında kesinti olması
            durumunda trafik, otomatik olarak çalışır durumda olan diğer
            internet omurgasına yönlendirilebilmektedir. A Bilgisayar Datacenter
            , UPS ve jeneratör desteği ile sunucularımıza kesintisiz enerji
            sağlamaktadır.
          </p>
          <h3 className="text-3xl font-normal colorOrange mt-5 my-2.5">Hız</h3>
          <p className="mb-2.5">
            aKare, TTNet omurgasına yüksek hızlarla bağlanmaktadır. Hat
            yoğunluğu sürekli denetlenmekte ve ortalama trafiğin %80 doluluğa
            ulaşması durumunda hat kapasitesi artırılmaktadır.
          </p>
          <h3 className="text-3xl font-normal colorOrange mt-5 my-2.5">
            Müşteri Desteği
          </h3>
          <p className="mb-2.5">
            aKare, müşterilerine 365 gün 24 saat telefonla destek hizmeti
            sunmaktadır.
          </p>
          <h3 className="text-3xl font-normal colorOrange mt-5 my-2.5">
            Sunucu Odası
          </h3>
          <p className="mb-2.5">
            aKare tarafında barındırılan sunucularının en yüksek performansta
            kesintisiz çalışmalarını sağlamak amacı ile bu cihazlar, UPS ve
            jeneratör ile desteklenen; nem, ısı ve yangın kontrollü odalarda
            korunmaktadır.
          </p>
          <h3 className="text-3xl font-normal colorOrange mt-5 my-2.5">
            Güvenlik
          </h3>
          <p className="mb-2.5">
            Sunucular firewall güvenlik sisteminden sonra hatta bağlanmaktadır.
            İstenirse ek prtokollerle daha yüksek güvenlikli sistemi sağlanır.
          </p>
          <a href="" className="text-blue-500 hover:underline">
            Detaylı Bilgi..
          </a>
        </div>
        <div className="w-[25%] p-4 sirketImg">
          <img
            className="border-4 h-52 border-slate-200"
            src="https://akarebilisim.com.tr/images/cloud.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CloudBody;
