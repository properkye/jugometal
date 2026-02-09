import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { TractorAccordionProps } from "@/models/types";
  import Link from "next/link";
  
  interface AccordProps {
    data: TractorAccordionProps[];
  }
  
  const AccordionLinks: React.FC<AccordProps> = ({ data }) => {
    return (
      <section className="xl:mt-5">
        <Accordion type="single" collapsible className="w-full mb-14 xl:mb-0">
          {data.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-[28px] tracking-tight">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#626262] text-[14px] mb-8">{item.subtitle}</p>
                <div>
                  {item.items.map((node, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="text-[20px] tracking-tight mb-4">{node.name}</h3>
                      <ul>
                        {node.list.map((nodeItem, i) => (
                          <li key={i} className="list-disc list-inside my-2">
                            <Link
                              href={nodeItem.itemHref}
                              className="text-[19px] text-[#838383] hover:text-black transition-colors duration-300"
                              target={
                                nodeItem.itemHref.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                            >
                              {nodeItem.itemName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  };
  
  export default AccordionLinks;
  