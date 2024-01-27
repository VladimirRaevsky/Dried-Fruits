import { type FC } from "react";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { ContainerProps } from "../types";
import cls from "./Container.module.scss";

export const Container: FC<ContainerProps> = (props) => {
	const { className = "", children } = props;

	return (
		<div className={ClassNames(cls.container, {}, [className])}>
			{children}
		</div>
	);
};
