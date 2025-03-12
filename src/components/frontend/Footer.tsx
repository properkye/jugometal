import {  FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <div className="wrapper">
      <footer className="border-t border-gray-300 ">
        <div className="py-10">
          <div className=" my-6">
            <span className="text-[2rem] tracking-tighter font-semibold text-[#e01d1d]">
              info@jugometal.co.rs
            </span>
          </div>

          <div className="xl:grid grid-cols-3 xl:pb-10">
            <div className="">
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8 ">
                Telefon
              </span>

              <li className="list-none text-[#656565] mb-4">
                Svilajnac: <span>035/312-391</span>
              </li>
              <li className="list-none text-[#656565]">
                Temerin: <span>021/840-038</span>
              </li>
            </div>

            <div className="">
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8 ">
                Adresa
              </span>

              <li className="list-none text-[#656565] mb-4">
                Svilajnac: <span>Kneza Miloša 51, 35210</span>
              </li>
              <li className="list-none text-[#656565]">
                Temerin: <span>Novosadska 634, 21235</span>
              </li>
            </div>

            <div className="">
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8 ">
                Mreže
              </span>

              <li className="list-none text-[#656565] flex gap-4 flex-col">
                <div className="flex gap-4 align-center">
                    <FaFacebookSquare size={26} color="black"  />
                    <span>Facebook/jugometal</span>
                </div>

                <div className="flex gap-4 align-center">
                    <FaInstagramSquare size={26} color="black"  />
                    <span>Instagram/jugometal</span>
                </div>
              </li>
            </div>
          </div>

          <div className="xl:grid grid-cols-3">
            <div className="">
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8 ">
                O nama
              </span>

              <li className="list-none text-[#656565]">Jugometal Svilajnac</li>
            </div>

            <div className="">
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8 ">
                Finansiranje i Subvencije
              </span>

              <li className="list-none text-[#656565]">
                Upoznajte se vise sa nasim modelom finansiranja
              </li>
            </div>

            <div className="">
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8 ">
                Servis
              </span>

              <li className="list-none text-[#656565]">Tim servisera</li>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 py-4 flex justify-between gap-3  md:flex-row md:justify-between text-[.7rem]">
          <span>@ Jugometal 2025</span>
          <span>
            Design & Development <span className="font-bold">Scope.</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
