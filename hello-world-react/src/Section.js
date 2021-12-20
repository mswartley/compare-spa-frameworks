const Section = ({show = true, children}) => {
    if (!show) {
        return null;
    }
    return (
        <div className="mt-2 border border-gray-300 shadow rounded-md p-2">{children}</div>
    );
};

export default Section;
