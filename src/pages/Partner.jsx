import React, { useState, useEffect } from 'react';

function Partner() {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      const fetchedPartners = [
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
      setPartners(fetchedPartners);
      setIsLoading(false);
    }, 1000); // Simulated delay
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-80 flex items-center"
        style={{
          backgroundImage:
            'url(https://synaxtech.com/wp-content/uploads/2022/09/Our-Partners.jpg)',
        }}
      >
        <div className="container mx-auto py-12 sm:px-6 lg:px-8 w-4/5 flex items-center justify-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white text-left">
            Our Partners
          </h1>
        </div>
      </div>
      <div className="w-4/5 items-center object-center mx-auto pt-10 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-4 pb-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            partners.map((item) => (
              <div
                className="w-auto group px-5 overflow-hidden flex flex-col justify-start items-center"
                key={item.id}
              >
                <div className="w-21 h-14">
                  <img
                    className="object-center object-fill w-full h-full"
                    src={item.logo}
                    alt="logo"
                  />
                </div>
                <p className="pt-5 text-poppins tracking-wider object-center text-justify leading-7">
                  {item.body}
                </p>
                <div className="pt-5">
                  <p className="font-poppins-400 tracking-wider object-center text-justify leading-7">
                    {/* <span className="text-mainColor font-poppins font-bold">
                      Key offerings:
                      {' '}
                    </span>
                    {item.key_offerings} */}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


export default Partner;
