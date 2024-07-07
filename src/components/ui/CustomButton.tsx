import React, {FC} from 'react';

export enum ButtonVariant {
    primary = 'primary',
    alternate = 'alternate',
}


interface CustomButtonProps {
    children: React.ReactNode;
    variant: ButtonVariant;
    onClick?: () => void;

}

const CustomButton: FC<CustomButtonProps> = ({children, variant, onClick}) => {
    return (
        <button
            onClick={onClick}
            type={"button"}
            className={'button ' + ('button' + (variant === 'primary' ? '__primary' : variant === 'alternate' ? '__alternate' : ''))}
        >
            {children}
        </button>
    );
};

export default CustomButton;