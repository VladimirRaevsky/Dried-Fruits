import { type FC } from "react";
import { useLocation } from "react-router-dom";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { AppLink } from "shared/ui/AppLink";
import { Navigation_Paths } from "../const";

import cls from "./Navigation.module.scss";

interface NavProps {
	className?: string;
}

export const Navigation: FC<NavProps> = (props) => {
	const { className = "" } = props;

	const { pathname } = useLocation();

	const isActive = (path: string): boolean => path === pathname;

	return (
		<nav className={ClassNames(cls.nav, {}, [className])}>
			<ul className={cls.navList}>
				{Navigation_Paths.map((el) => (
					<li
						className={ClassNames(cls.navItem, {}, [
							isActive(el.path) ? cls.active : "",
						])}
					>
						<AppLink key={el.text} path={el.path}>
							{el.text}
						</AppLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
