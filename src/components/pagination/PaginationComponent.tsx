import { useSearchParams } from "react-router-dom";

interface PaginationProps {
    total: number;
    limit: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({ total, limit }) => {
    const [query, setQuery] = useSearchParams({ skip: '0' });

    const currentSkip = Number(query.get('skip') || 0);

    const handlePrev = () => {
        if (currentSkip > 0) {
            setQuery({ skip: (currentSkip - limit).toString() });
        }
    };

    const handleNext = () => {
        if (currentSkip + limit < total) {
            setQuery({ skip: (currentSkip + limit).toString() });
        }
    };

    return (
        <div className="pagination-container flex justify-center">
            <div className="pagination-buttons m-5 flex gap-6">
                <button
                    className="w-28 h-10 rounded-xl font-bold text-lg shadow-md bg-red-900 text-orange-50"
                    onClick={handlePrev}
                    disabled={currentSkip <= 0}
                >
                    Prev
                </button>
                <button
                    className="w-28 h-10 rounded-xl text-lg font-bold shadow-md bg-red-900 text-orange-50"
                    onClick={handleNext}
                    disabled={currentSkip + limit >= total}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;
