import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface AppLinkProps extends Omit<LinkProps, "to"> {
	className?: string;
	path: string;
	children: ReactNode;
}
