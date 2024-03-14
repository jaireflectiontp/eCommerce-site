
const Pagination = (props) => {
    const { totalPages, currentPage, setCurrentPage } = props

    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return (
        <div className="flex items-center justify-center gap-2 p-3">
            {
                pages?.map((btn) => (
                    <div key={btn}>
                        <button onClick={() => setCurrentPage(btn)}
                            className={`border-[1px] rounded w-[35px] h-[35px] ${currentPage === btn ? 'bg-primary text-white' : 'bg-secondary text-dark'}`}>
                            {btn}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Pagination
