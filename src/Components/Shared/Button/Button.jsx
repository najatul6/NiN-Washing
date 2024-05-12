

const Button = ({btnText}) => {
    return (
        <>
            <button className="text-lg uppercase font-bold text-white bg-deep-blue px-2 py-1">
                {btnText}
            </button>
        </>
    );
};

export default Button;