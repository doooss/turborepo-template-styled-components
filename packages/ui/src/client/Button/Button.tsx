'use client';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
    children?: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return <ButtonStyle>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
    display: inline-flex;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
`;

export default Button;
