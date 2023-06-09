import React from "react";
import { Link } from "react-router-dom";

const Hakkimizda = ({
  onceGuvenlikImg,
  onceGuvenlikTitle,
  akilliCozumlerImg,
  akilliCozumlerTitle,
}) => {
  return (
    <div className="lg:pl-32 lg:pr-32 pt-5 pb-5 hakkimizda bg-[url('https://akarebilisim.com.tr/images/bg.png')]">
      <div className="flex size-full hakkimizdaDesign justify-center container mx-auto px-6 gap-8 hakkimizda2">
        <div
          id="onceGuvenlik"
          className="border-2 w-[50%] safety lg:w-[50%] p-5"
        >
          <div>
            <img
              className="min-h-[100px] h-[100px]"
              src={onceGuvenlikImg}
              alt=""
            />
          </div>
          <div>
            <h2 className="colorOrange text-3xl font-normal mt-5 mb-2.5">
              {onceGuvenlikTitle}
            </h2>
          </div>
          <div className="text leading-6 colorGray flex flex-col gap-2">
            <p className=" mb-2.5">
              Günümüzde bilgi toplumu olarak bize düşen bilgiyi korumak ve
              güvenli bir şekilde erişilmesini sağlamaktır.
            </p>
            <p className=" mb-2.5">
              Artık mükemmel bir yazılım yapmak ya da sistem kurmak yeterli bir
              unsur değil. Veriyi okurken ya da yazarken uyguladığınız güvenlik
              protokolleri ve bunların zaafiyetleri çok önem arzetmetedir.
            </p>
            <p className=" mb-2.5">
              Kurumumuzun projelerde esas aldığı ve önceliği; yazılımdan
              başlayarak sistem kaynaklarına kadar devamlı ve sürdürülebilir bir
              yapıda denetlemektir.
            </p>
            <p className=" mb-2.5">
              Bilginin güç olduğuna inan firmamız bünyesinde ISO27001 Baş
              denetçisi ve CEH sertifikalı güvenlik uzmanları barındırmaktadır.
            </p>
            <Link to="/akarepentest">
              <span className="text-blue-500 hover:underline">Devamı...</span>
            </Link>
          </div>
        </div>
        <div
          id="akilliCozumler"
          className="border-2 safety lg:w-[50%] w-[50%] p-5"
        >
          <div className="flex justify-end">
            <img
              className="min-h-[100px] h-[100px]"
              src={akilliCozumlerImg}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-right colorOrange text-3xl font-normal mt-5 mb-2.5">
              {akilliCozumlerTitle}
            </h2>
          </div>
          <div className="flex flex-col leading-6 gap-2 text colorGray">
            <p className="text-right mb-2.5">
              Teknolojinin artık her yerde olduğu bu dönemde, veriye gerek mobil
              platformlardan gerek masaüstü uygulamalardan hızlıca erişmek artık
              gereklilik olmuştur.
            </p>
            <p className="text-right mb-2.5">
              Bunula beraber veri girişi sadece kullanıcıların bir giriş yapması
              ile değil sahadan IOT cihazlar ve sensörler yardımıyla da
              yapılmaktadır.
            </p>
            <p className="text-right mb-2.5">
              Toplanan veriyi analiz etmek işletmenizi en uygun şekilde
              yönetmenizi sağlamak için gerekli ARGE faaliyetlerini TEKNOKENT'te
              yürütmekteyiz.
            </p>
            <p className="text-right mb-2.5">
              Endüstri 4.0 kapsamında geleceğe ve teknolojinin faydalı şekilde
              kullanılmasına inanmaktayız.
            </p>
            <Link to="/projelerimiz">
              <span className="text-blue-500 hover:underline float-right">
                Devamı...
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;
