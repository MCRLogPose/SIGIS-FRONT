//src/components/details/DetailHeader.jsx

const DetailHeader = ({ title, description }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="flex-1 flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    )
}

export default DetailHeader