import React, {FC} from 'react';

export enum ButtonVariant {
    primary = 'primary',
    alternate = 'alternate',
}


interface CustomButtonProps {
    width?: string;
    height: string;
    children: React.ReactNode;
    variant: ButtonVariant;
    onClick?: () => void;

}

const CustomButton: FC<CustomButtonProps> = ({width, height, children, variant, onClick}) => {
    return (
        <button
            style={{height: height, width: width}}
            onClick={onClick}
            type={"button"}
            className={'button ' + ('button' + (variant === 'primary' ? '__primary' : variant === 'alternate' ? '__alternate' : ''))}
        >
            {children}
        </button>
    );
};

export default CustomButton;