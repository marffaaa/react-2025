import { useSearchParams } from "react-router-dom";

interface PaginationProps {
    total: number;
    limit: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({ total, limit }) => {
    const [query, setQuery] = useSearchParams({ skip: '0' });

    const currentSkip = Number(query.get('skip') || 0);

    // Обробка кнопки "Previous"
    const handlePrev = () => {
        if (currentSkip > 0) {
            setQuery({ skip: (currentSkip - limit).toString() });
        }
    };

    // Обробка кнопки "Next"
    const handleNext = () => {
        if (currentSkip + limit < total) {
            setQuery({ skip: (currentSkip + limit).toString() });
        }
    };

    return (
        <div className="flex flex-row gap-x-8 justify-center m-7">
            <button
                className="w-28 h-10 bg-slate-300 rounded-xl font-semibold shadow-md"
                onClick={handlePrev}
                disabled={currentSkip <= 0}
            >
                prev
            </button>
            <button
                className="w-28 h-10 bg-slate-300 rounded-xl font-semibold shadow-md"
                onClick={handleNext}
                disabled={currentSkip + limit >= total}
            >
                next
            </button>
        </div>
    );
};

export default PaginationComponent;
