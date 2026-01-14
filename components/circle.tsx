type CircleComponentProps = {
    position: number,
    actualPosition: number;
}

export default function CircleComponent({position, actualPosition}: CircleComponentProps) {
    return(
        <>
            {(position===actualPosition)?(<div className="h-1 w-1 bg-white rounded-full"/>):(<div className="h-1 w-1 bg-gray-600 rounded-full"/>)}        
        </>
    )
}