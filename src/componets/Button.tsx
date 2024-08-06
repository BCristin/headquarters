import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export default function Button({
	size = 'medium',
	position = 'primary',
	color = 'primary',
	disabled,
	className,
	children,
	...props
}: ButtonProps): JSX.Element {
	console.log(position);
	return (
		<button
			tabIndex={disabled ? -1 : 0}
			className={cn(styles.button, className, {
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.large]: size == 'large',
				[styles['color-primary']]: color == 'primary',
				[styles['color-secondary']]: color == 'secondary',
				[styles['color-gray']]: color == 'gray',
				[styles['color-success']]: color == 'success',
				[styles['color-warning']]: color == 'warning',
				[styles['color-error']]: color == 'error',
				[styles.disabled]: disabled,
				// [styles['position-primary']]: position == 'primary',
				[styles['position-secondary']]: position == 'secondary',
				[styles.tertiary]: position == 'tertiary',
			})}
			{...props}>
			{children}
		</button>
	);
}
