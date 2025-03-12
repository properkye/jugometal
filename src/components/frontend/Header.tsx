import React from "react";

const data = [
    {
        id: 1,
        question: 'Telefon:',
        answer:'035/312-391',
        href: 'tel:035312391',
        showOnMobile: true
    },
    {
        id: 2,
        question: 'Email:',
        answer:'info@jugometal.co.rs',
        href: 'mailto:info@jugometal.co.rs',
        showOnMobile: false
    },
    {
        id: 3,
        question: 'Adresa:',
        answer:'Kneza Miloša 51, 35210 Svilajnac',
        href: 'https://www.google.com/maps/place/JUGOMETAL+d.o.o.+Svilajnac/data=!4m2!3m1!1s0x0:0xf407f690f9310426?sa=X&ved=1t:2428&ictx=111',
        showOnMobile:false
    }
]

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#161616] text-white py-6">
      {/* Add your content here */}
      <div className="wrapper md:flex md:justify-between md:items-center">
        {data.map((item) => (
            <a key={item.id} href={item.href}
                className={`${item.showOnMobile ? 'block' : 'hidden'} md:block md:text-[.8rem] xl:text-[.9rem] `}
                target="_blank" rel="noreferrer"
            >
                <span className="font-light">{item.question}</span>
                {' '}
                <span className="font-bold">{item.answer}</span>
            </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
