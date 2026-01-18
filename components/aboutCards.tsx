type HistoryCardProps = {
    title: string,
    text: string;
}

export function HistoryCard({title, text}: HistoryCardProps) {
    return(
        <article className="p-2.5 ring-[0.15px] ring-[#D8D8D8] bg-[#0E1011] w-[142px] rounded-sm">
            <h1 className="font-bold text-[9px] text-[#DAA520]">{title}</h1>
            <h2 className="text-[9px] text-[#D8D8D8] mt-1">{text}</h2>
        </article>
    );
}

type ValueCardProps = {
    title: string,
    text: string,
    imgSrc: string,
    imgAlt: string,
    imgWidth: number,
    imgHeight: number;
}

export function ValueCard({title, text, imgSrc, imgAlt, imgWidth, imgHeight}: ValueCardProps) {
    return(
        <article className="p-2.5 ring-[0.15px] ring-[#D8D8D8] bg-[#0E1011] rounded-sm w-[142px] h-[100px]">
            <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} loading="eager" decoding="async" fetchPriority="low" />
            <h1 className="font-bold text-[7px] text-[#D8D8D8] mt-2">{title}</h1>    
            <h2 className="text-[6px] text-[#D8D8D8] mt-2">{text}</h2>
        </article>
    );

}