interface DatumProps {
    value: string;
    caption: string;
}

const Datum: React.FC<DatumProps> = ({value, caption}) => {
    return (
        <div className="w-fit flex flex-col items-center">
            <span className="font-display text-h1 mb-2">{value}</span>
            <p>{caption}</p>
        </div>
    )
}

export default Datum;