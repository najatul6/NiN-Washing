import { Link } from "react-router-dom";


const Button = ({btnText,btnIcon,extraClass,afterIcn,url,target}) => {
    return (
        <>
            <Link target={target} to={url} className={`${extraClass} flex justify-center items-center gap-2 text-lg uppercase font-bold`}>
                {afterIcn} {btnText} {btnIcon}
            </Link>
        </>
    );
};

export default Button;