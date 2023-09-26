import clsx from 'clsx';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export default function header() {
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<ul>
				<li>
					<NavLink to='/department' activeClassName={styles.active}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={styles.active}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={styles.active}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/member' activeClassName={styles.active}>
						Member
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName={styles.active}>
						Contact
					</NavLink>
				</li>
			</ul>
		</header>
	);
}
