import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: 'small' | 'medium' | 'large';
	position?: 'primary' | 'secondary' | 'tertiary';
	status?: 'normal' | 'hover' | 'disable';
	color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';
	disabled?: boolean;
	className?: string;
	children: ReactNode;
}
