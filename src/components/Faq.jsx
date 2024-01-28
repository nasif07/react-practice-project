
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


// function Icon({ id, open }) {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//         >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//         </svg>
//     );
// }


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
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 1}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader> */}

                        <div className="flex items-center justify-between px-3 py-2 cursor-pointer" onClick={() => handleOpen(1)}>
                            <a className="text-lg font-semibold text-[#272932]">What sets North Summit Payments apart from other payment processors?</a>
                            {open === 1 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                        "North Summit Payments stands out with the lowest processing fees in the industry, rapid 24/hr POS payouts, personalized account management, robust chargeback protection, and stable, reliable merchant accounts."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 2}>
                        {/* <AccordionHeader className="text-black">
                            How to use Material Tailwind?
                        </AccordionHeader> */}
                        <div className="flex items-center justify-between px-3 py-2 cursor-pointer" onClick={() => handleOpen(2)}>
                            <h2 className="text-lg font-semibold">How quickly can I get approved with North Summit Payments?</h2>
                            {open === 2 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                        "We offer a swift 3-day approval process, ensuring you can start processing transactions with minimal delay."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 3}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader> */}
                        <div open={open === 3} className="flex items-center justify-between px-3 py-2 cursor-pointer" onClick={() => handleOpen(3)}>
                            <h2 className="text-lg font-semibold">Will I get a dedicated representative for my account?</h2>
                            {open === 3 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                        "Absolutely! Each client is paired with a personal account representative for tailored, responsive service."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 4}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader> */}
                        <div open={open === 4} className="flex items-center justify-between px-3 py-2 cursor-pointer" onClick={() => handleOpen(4)}>
                            <h2 className="text-lg font-semibold">Can North Summit Payments help with chargebacks?</h2>
                            {open === 4 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                        "Yes, we provide comprehensive chargeback protection to minimize disputes and assist efficiently when they occur."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 5}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader> */}
                        <div open={open === 5} className="flex items-center justify-between px-3 py-2 cursor-pointer" onClick={() => handleOpen(5)}>
                            <h2 className="text-lg font-semibold">Are the lower processing fees accompanied by hidden charges?</h2>
                            {open === 5 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                        "No, we pride ourselves on transparency. Our low fees are straightforward, with no hidden costs."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 6}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader> */}
                        <div open={open === 6} className="flex items-center justify-between px-3 py-2 cursor-pointer" onClick={() => handleOpen(6)}>
                            <h2 className="text-lg font-semibold">How reliable are your merchant accounts?</h2>
                            {open === 6 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                        "Our accounts are known for their stability, avoiding the common issues of freezes and shutdowns associated with many processors."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-lg mb-3" open={open === 7}>
                        {/* <AccordionHeader className="text-black" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader> */}
                        <div open={open === 7} className="flex items-center justify-between px-3 py-2 cursor-pointer" onClick={() => handleOpen(7)}>
                            <h2 className="text-lg font-semibold">How do I start with North Summit Payments?
</h2>
                            {open === 7 ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <AccordionBody className="px-3">
                        "Starting is easy! Just click 'Apply Now' to book a call with our team and begin the process."
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;

// icon={<Icon id={1} open={open} />}
// icon={<Icon id={2} open={open} />}
// icon={<Icon id={3} open={open} />}