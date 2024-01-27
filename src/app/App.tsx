import { FC } from "react";
import { AppRouter } from "app/providers/router";
import { Header } from "widgets/ui/Header";

import "./styles/index.scss";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { useTheme } from "./providers/ThemeProviders";
import { Container } from "shared/ui/Container/ui/Container";

export const App: FC = () => {
	const { theme, handleThemeToggle } = useTheme();

	return (
		<div className={ClassNames("app", {}, [theme])}>
			<Header />
			<Container>
				<AppRouter />
			</Container>
			<button onClick={handleThemeToggle}>switch</button>
		</div>
	);
};
