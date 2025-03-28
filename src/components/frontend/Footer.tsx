import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="wrapper">
      <footer className="border-t border-gray-300">
        <div className="py-10">
          <div className="my-6">
            <a
              href="mailto:info@jugometal.co.rs"
              className="text-[2rem] tracking-tighter font-semibold text-[#e01d1d] hover:underline"
            >
              info@jugometal.co.rs
            </a>
          </div>

          <div className="xl:grid grid-cols-3 xl:pb-10">
            <div>
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8">
                Telefon
              </span>

              <li className="list-none text-[#656565] mb-4">
                Svilajnac:{" "}
                <a href="tel:035312391" className="hover:underline">
                  035/312-391
                </a>
              </li>
              <li className="list-none text-[#656565]">
                Temerin:{" "}
                <a href="tel:021840038" className="hover:underline">
                  021/840-038
                </a>
              </li>
            </div>

            <div>
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8">
                Adresa
              </span>

              <li className="list-none text-[#656565] mb-4">
                Svilajnac:{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kneza+Miloša+51,+35210+Svilajnac"
                  target="_blank"
                  className="hover:underline"
                >
                  Kneza Miloša 51, 35210
                </a>
              </li>
              <li className="list-none text-[#656565]">
                Temerin:{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Novosadska+634,+21235+Temerin"
                  target="_blank"
                  className="hover:underline"
                >
                  Novosadska 634, 21235
                </a>
              </li>
            </div>

            <div>
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8">
                Mreže
              </span>

              <li className="list-none text-[#656565] flex gap-4 flex-col">
                <a
                  href="https://www.facebook.com/jugometal"
                  target="_blank"
                  className="flex gap-4 items-center hover:underline"
                >
                  <FaFacebookSquare size={26} color="black" />
                  <span>Facebook/jugometal</span>
                </a>

                <a
                  href="https://www.instagram.com/jugometal"
                  target="_blank"
                  className="flex gap-4 items-center hover:underline"
                >
                  <FaInstagramSquare size={26} color="black" />
                  <span>Instagram/jugometal</span>
                </a>
              </li>
            </div>
          </div>

          <div className="xl:grid grid-cols-3">
            <div>
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8">
                O nama
              </span>

              <li className="list-none text-[#656565]">
                <Link href="/o-nama" className="hover:underline">
                  Jugometal Svilajnac
                </Link>
              </li>
            </div>

            <div>
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8">
                Finansiranje i Subvencije
              </span>

              <li className="list-none text-[#656565]">
                <Link href="/subvencije" className="hover:underline">
                  Upoznajte se više sa našim modelom finansiranja
                </Link>
              </li>
            </div>

            <div>
              <span className="text-[1.2rem] font-semibold block mb-3 mt-8">
                Servis
              </span>

              <li className="list-none text-[#656565]">
                <Link href="/servis" className="hover:underline">
                  Tim servisera
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 py-4 flex justify-between gap-3 md:flex-row md:justify-between text-[.7rem]">
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
