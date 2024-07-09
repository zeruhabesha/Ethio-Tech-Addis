import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const mockPartners = [
  {
    id: '1',
    logo: 'https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg',
    body: 'Microsoft',
    key_offerings: 'Offering 1, Offering 2',
  },
  {
    id: '2',
    logo: 'https://tse1.mm.bing.net/th?id=OIP.XfndSpKQJgMhsl3LZHTu1gAAAA&pid=Api&P=0&h=220',
    body: 'Kaspersky',
    key_offerings: 'Offering 3, Offering 4',
  },
  {
    id: '3',
    logo: 'https://www.freepnglogos.com/uploads/cisco-png-logo/networking-and-cisco-packet-tracer-png-logo-17.png',
    body: 'CISCO',
    key_offerings: 'Offering 5, Offering 6',
  },
  {
    id: '4',
    logo: 'https://logos-download.com/wp-content/uploads/2022/01/Dell_EMC_Logo.png',
    body: 'Dell EMC',
    key_offerings: 'Offering 7, Offering 8',
  },
  {
    id: '5',
    logo: 'https://logolook.net/wp-content/uploads/2021/08/HP-Logo-2012-present-2048x1152.png',
    body: 'HP',
    key_offerings: 'Offering 9, Offering 10',
  },
  {
    id: '6',
    logo: 'https://www.solytic.com/wp-content/uploads/2020/11/2000px-Huawei-Logo.svg-1920x1945.png',
    body: 'Huawei',
    key_offerings: 'Offering 11, Offering 12',
  },
  {
    id: '7',
    logo: 'http://1.bp.blogspot.com/-jYihx5Pi74s/VVAyZUNG4aI/AAAAAAAACWU/MEgDpswLXVQ/s1600/Lenovo-logo-vector.png',
    body: 'Lenovo',
    key_offerings: 'Offering 13, Offering 14',
  },
  {
    id: '8',
    logo: 'https://tse4.mm.bing.net/th?id=OIP.53ekCVUWoLapSsQ6GW3eRQAAAA&pid=Api&P=0&h=220',
    body: 'LG',
    key_offerings: 'Offering 15, Offering 16',
  },
  {
    id: '9',
    logo: 'http://1000logos.net/wp-content/uploads/2017/12/Epson-symbol.jpg',
    body: 'Epson',
    key_offerings: 'Offering 17, Offering 18',
  },
  {
    id: '10',
    logo: 'https://tse3.mm.bing.net/th?id=OIP.7zJACvkr3BJZR01PgiEgiwAAAA&pid=Api&P=0&h=220',
    body: 'Rukus',
    key_offerings: 'Offering 19, Offering 20',
  },
  {
    id: '11',
    logo: 'https://logodownload.org/wp-content/uploads/2014/11/tp-link-logo-1.png',
    body: 'TPLINK',
    key_offerings: 'Offering 21, Offering 22',
  },
  {
    id: '12',
    logo: 'http://1000logos.net/wp-content/uploads/2017/02/IBM-Symbol-1946-2017.jpg',
    body: 'IBM',
    key_offerings: 'Offering 23, Offering 24',
  },
  {
    id: '13',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Emblem.jpg',
    body: 'Oracle',
    key_offerings: 'Offering 25, Offering 26',
  },
  {
    id: '14',
    logo: 'https://logosmarken.com/wp-content/uploads/2022/03/VMware-Emblem.png',
    body: 'Vmware',
    key_offerings: 'Offering 27, Offering 28',
  },
  {
    id: '15',
    logo: 'https://logodix.com/logo/1048287.png',
    body: 'Infosys',
    key_offerings: 'Offering 29, Offering 30',
  },
  {
    id: '16',
    logo: 'https://seekvectorlogo.com/wp-content/uploads/2017/12/sap-vector-logo.png',
    body: 'SAP',
    key_offerings: 'Offering 31, Offering 32',
  },
  {
    id: '17',
    logo: 'https://pngimg.com/uploads/fortnite/fortnite_PNG97.png',
    body: 'Fortninet',
    key_offerings: 'Offering 33, Offering 34',
  },
  {
    id: '18',
    logo: 'https://www.jcdgroup.ie/wp-content/uploads/2016/06/aruba-logo.png',
    body: 'Aruba',
    key_offerings: 'Offering 35, Offering 36',
  },
  {
    id: '19',
    logo: 'https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png',
    body: 'NVIDA',
    key_offerings: 'Offering 37, Offering 38',
  },
  {
    id: '20',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/Netgear-logo-2048x983.png',
    body: 'Netgear',
    key_offerings: 'Offering 39, Offering 40',
  },
  {
    id: '21',
    logo: 'https://s4.itho.me/sites/default/files/styles/picture_size_large/public/extreme_logo.png?itok=7fi3Q0AZ',
    body: 'Extreme Network',
    key_offerings: 'Offering 41, Offering 42',
  },
  {
    id: '22',
    logo: 'https://1000logos.net/wp-content/uploads/2018/09/ZTE-Logo-1985.png',
    body: 'ZTE',
    key_offerings: 'Offering 43, Offering 44',
  },
  {
    id: '23',
    logo: 'https://logos-world.net/wp-content/uploads/2020/08/Canon-Emblem.png',
    body: 'Canon',
    key_offerings: 'Offering 45, Offering 46',
  },
  {
    id: '24',
    logo: 'https://logodownload.org/wp-content/uploads/2014/09/msi-logo-1.png',
    body: 'MSI',
    key_offerings: 'Offering 47, Offering 48',
  },
  {
    id: '25',
    logo: 'https://logodownload.org/wp-content/uploads/2017/05/panasonic-logo-1-1.png',
    body: 'Panasonic',
    key_offerings: 'Offering 49, Offering 50',
  },
  {
    id: '26',
    logo: 'https://cdn.1min30.com/wp-content/uploads/2017/04/Symbole-Sony.jpg',
    body: 'Sony',
    key_offerings: 'Offering 51, Offering 52',
  },
  {
    id: '27',
    logo: 'https://logolook.net/wp-content/uploads/2021/06/Samsung-Logo-1993.png',
    body: 'Samsung',
    key_offerings: 'Offering 53, Offering 54',
  },
  {
    id: '28',
    logo: 'https://tse2.mm.bing.net/th?id=OIP._GPhmUx0ot3njLlQzi5PjwHaB0&pid=Api&P=0&h=220',
    body: 'Asus',
    key_offerings: 'Offering 55, Offering 56',
  },
  {
    id: '29',
    logo: 'https://logodix.com/logo/2055493.png',
    body: 'Checkpoint',
    key_offerings: 'Offering 57, Offering 58',
  },
  {
    id: '30',
    logo: 'https://www.ibtpolska.pl/images/Hikvision-logo.png',
    body: 'Hikvision',
    key_offerings: 'Offering 59, Offering 60',
  },
  {
    id: '31',
    logo: 'https://tse3.mm.bing.net/th?id=OIP.kx4O7eeVM-RrJspRSw6C5gEsCZ&pid=Api&P=0&h=220',
    body: 'Axis',
    key_offerings: 'Offering 61, Offering 62',
  },
];

export default function Partners() {
  const partners = mockPartners;

  return (
    <div className="relative bg-white flex flex-col justify-center items-center py-8 md:py-14 z-20">
      <h2 className="font-bold text-2xl md:text-[40px] text-dark font-raleway mb-6">
        Our Partners
      </h2>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 800 }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex justify-center items-center px-4">
                <img className="h-12 md:h-16 object-contain" src={partner.logo} alt="Partner Logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
