import { useSearchParams } from "react-router-dom";

const PaginationComponent = () => {
    const[query, setQuery] = useSearchParams({skip:'0'})
    return (
        <div className="flex flex-row gap-x-8 justify-center m-7 ">
            <button className="w-28 h-10 bg-slate-300 rounded-xl font-semibold shadow-md" onClick={() => {
                const skip = query.get('skip');
                if (skip && +skip>29) {
                    let currentSkip = +skip;
                    setQuery({skip: (currentSkip-30).toString()})
                }
            }}>prev
            </button>
            <button className="w-28 h-10 bg-slate-300 rounded-xl font-semibold shadow-md" onClick={() => {
                const skip = query.get('skip');
                if (skip && +skip<180) {
                    let currentSkip = +skip;
                    setQuery({skip: (currentSkip+30).toString()})
                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;