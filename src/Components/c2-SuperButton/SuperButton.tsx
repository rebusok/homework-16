import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}
interface ClassStyle {
    [key: string]: string;
}
const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const style:ClassStyle = s


    const finalClassName:string = `${red ? s.red : s.default} ${className ?  className ? style[className]  : {} : ''}`;

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default SuperButton;
