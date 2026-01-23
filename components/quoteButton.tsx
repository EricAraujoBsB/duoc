"use client";

export default function QuoteButton() {
    
    function handleClick(id:string) {
        document.querySelector(`#${id}`)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return(
            <button onClick={()=>handleClick("contact")} className="bg-[#DAA520] font-bold text-[13px] md:text-[21px] py-1 px-1.5 md:px-8 md:transition md:hover:scale-105">
                SOLICITAR ORÇAMENTO
            </button>
    );
}