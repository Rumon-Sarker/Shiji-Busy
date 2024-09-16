const CategoryTitle = ({ title }) => {
    return (
        <div className="text-center sm:text-md md:text-2xl lg:text-3xl font-semibold uppercase text-blue-500 sm:my-3 md:my-4 lg:my-6">
            <h1>{title}</h1>
        </div>
    );
};

export default CategoryTitle;