import { AccordionProps } from "@/app/servis/page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface AccordProps {
    data: AccordionProps[];
  }
  
const AccordionSectionSecond: React.FC<AccordProps> = ({ data }) => {
    return (
      <section className="xl:mt-5">
      <Accordion type="single" collapsible className="w-full xl:mb-0">
        {data &&
          data.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-[28px] tracking-tight">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#626262] text-[16px]">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </section>
    )
  }

  export default AccordionSectionSecond