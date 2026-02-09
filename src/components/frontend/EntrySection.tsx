import { EntrySectionProps } from "@/models/types";

const EntrySection: React.FC<EntrySectionProps> = ({
  title,
  subtitle,
  text,
  wrapper
}) => {
  return (
    <section className="my-10">
      <div className={`${wrapper ? 'wrapper' : ''}`}>
        <div className="md:w-[70%]">
          <h2 className="text-[1.5rem] font-semibold tracking-tight xl:text-[2rem]">
            {title}
          </h2>
          <h3 className="text-[1.2rem] font-light mb-4 text-[#5e5e5e]">
            {subtitle}
          </h3>
          <p className="">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default EntrySection;
