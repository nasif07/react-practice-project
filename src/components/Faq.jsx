
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


const Faq = () => {

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);



    return (
        <div className="max-w-[1200px] mx-auto p-12">
            <div className="grid-cols-3 md:grid-flow-col lg:grid gap-8">
                <div className="col-span-1">
                    <p className="font-bold text-5xl md:pb-5">Frequently asked questions</p>
                </div>
                <div className="col-span-2 rounded-2xl">
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 1} icon={<Icon id={1} open={open} />}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader> */}

                        <div className="flex items-center justify-between px-3 py-2" onClick={() => handleOpen(1)}>
                            <h2 className="text-2xl font-semibold">Please give me</h2>
                            {open === 1 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 2} icon={<Icon id={2} open={open} />}>
                        {/* <AccordionHeader className="text-black">
                            How to use Material Tailwind?
                        </AccordionHeader> */}
                        <div className="flex items-center justify-between px-3 py-2 " onClick={() => handleOpen(2)}>
                            <h2 className="text-2xl font-semibold">Please give me</h2>
                            {open === 2 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 3} icon={<Icon id={3} open={open} />}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader> */}
                        <div open={open === 3} icon={<Icon id={3} open={open} />} className="flex items-center justify-between px-3 py-2" onClick={() => handleOpen(3)}>
                            <h2 className="text-2xl font-semibold">Please give me</h2>
                            {open === 3 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;