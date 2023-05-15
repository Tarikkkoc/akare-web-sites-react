import React from "react";

const CloudBody = () => {
  return (
    <div className="flex pr-20 pt-10 pb-10 pl-20 gap-2 hakkimizda">
      <div className="w-1/2 flex flex-col text-sm font-light text-gray-600 gap-2 hakkimizda2">
        <h2 className="text-2xl font-normal text-orange-500">
          <span className="text-orange-500 text-2xl">AKARE</span>
          <span className="text-blue-500 text-2xl">CLOUD</span>
        </h2>
        <p>
          2000 yılından beri kendi sunucuları ile Türkiye'de hizmet veren
          firmamız, VPS ve dedicated sunucuları ve yüksek kapasiteli altyapısı
          ile hizmet vermektedir.
        </p>
        <p>
          7/24 sunucuları izleyen CEH (Certifikated Ethical Hacker) sertifikalı
          ekibimiz, sistemin güvenli ve stabil çalışmasını sağlamaktadır.
        </p>
        <p>
          Microsoft SPLA partneri olan firmamız Microsoft ürün ve uygulamaları
          konusunda da lisans ve destek sağlamaktadır.
        </p>
        <p>
          Sunucu barındırma, bir veya birden fazla web sitesini barındırmak,
          e-posta veya USS (Uygulama Servis Sağlayıcısı) hizmetleri sağlamak ve
          sunucu üzerinde çeşitli internet uygulamaları çalıştırmak isteyen
          şirketler için ideal bir çözümdür. A Kare Bilişim’ın sunduğu sunucu
          barındırma hizmeti, şirketlerin A Bilgisayar DataCenter’ın
          faydalanmalarına imkan tanır. İçerik sağlayıcılar, USS’ler (Uygulama
          Servis Sağlayıcısı) veya şirketler bu sayede enerji veya data
          kesintilerini, ya da bant genişliği, kapasite sorunlarını tamamıyla
          unutarak kendi kullanıcılarına veya müşterilerine yüksek kalitede
          hizmet sağlayabilirler. Şirketler, 365 gün 24 saat boyunca kesintisiz
          olarak Internet erişimine açık bir ortamda bulunan sunucularına
          uzaktan erişim protokolleri aracılığı ile bulundukları yerden
          istedikleri anda erişebilir ve diledikleri güncellemeleri
          yapabilirler.
        </p>
        <h3 className="text-2xl font-normal text-orange-500">Süreklilik</h3>
        <p>
          aKare yıl içinde min. %99.9 süreklilik ile çalışmaktadır. Hatlarda
          olan aksaklıktan en az düzeyde etkilenilmekte, kullanılan BGP4
          standardı sayesinde bağlı olunan internet omurgasında kesinti olması
          durumunda trafik, otomatik olarak çalışır durumda olan diğer internet
          omurgasına yönlendirilebilmektedir. A Bilgisayar Datacenter , UPS ve
          jeneratör desteği ile sunucularımıza kesintisiz enerji sağlamaktadır.
        </p>
        <h3 className="text-2xl font-normal text-orange-500">Hız</h3>
        <p>
          aKare, TTNet omurgasına yüksek hızlarla bağlanmaktadır. Hat yoğunluğu
          sürekli denetlenmekte ve ortalama trafiğin %80 doluluğa ulaşması
          durumunda hat kapasitesi artırılmaktadır.
        </p>
        <h3 className="text-2xl font-normal text-orange-500">
          Müşteri Desteği
        </h3>
        <p>
          aKare, müşterilerine 365 gün 24 saat telefonla destek hizmeti
          sunmaktadır.
        </p>
        <h3 className="text-2xl font-normal text-orange-500">Sunucu Odası</h3>
        <p>
          aKare tarafında barındırılan sunucularının en yüksek performansta
          kesintisiz çalışmalarını sağlamak amacı ile bu cihazlar, UPS ve
          jeneratör ile desteklenen; nem, ısı ve yangın kontrollü odalarda
          korunmaktadır.
        </p>
        <h3 className="text-2xl font-normal text-orange-500">Güvenlik</h3>
        <p>
          Sunucular firewall güvenlik sisteminden sonra hatta bağlanmaktadır.
          İstenirse ek prtokollerle daha yüksek güvenlikli sistemi sağlanır.
        </p>
        <a href="" className="text-blue-500 hover:underline">
          Detaylı Bilgi..
        </a>
      </div>
      <div className="w-1/2">
        <img
          className="border-4 h-52 border-slate-200"
          src="https://akarebilisim.com.tr/images/cloud.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CloudBody;
