
const ProductCard: React.FC = () => {
    return (
        <div className='px-10 md:px-0'>
        <div className='w-[100%] h-[400px] bg-gray-200'></div>
  
        <div className=''>
          <h3 className='mt-6 mb-3 text-[1.5rem] font-semibold'>Solis 60</h3>
          <span>22.5 - 35.2 KS</span>
          <p className='my-3 text-[.8rem] text-[#575757]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil,
            eveniet sunt quam ea similique.
          </p>
          <p className='text-[.8rem] text-[#575757]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            placeat aspernatur repellendus eveniet, assumenda ullam!
          </p>
        </div>
      </div>
    );
};

export default ProductCard;