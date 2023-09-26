import styles from './department.module.scss';
import clsx from 'clsx';

export default function department() {
	return (
		<section className={clsx(styles.department)}>
			<figure></figure>
			<div className={clsx(styles.content)}>
				<h1>department</h1>
			</div>
		</section>
	);
}
