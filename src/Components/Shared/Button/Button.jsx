

const Button = ({btnText,btnIcon,extraClass,afterIcn}) => {
    return (
        <>
            <button className={`${extraClass} flex justify-center items-center gap-2 text-lg uppercase font-bold`}>
                {afterIcn} {btnText} {btnIcon}
            </button>
        </>
    );
};

export default Button;