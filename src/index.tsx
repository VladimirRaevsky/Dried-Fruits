import { App } from "app";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "app/providers/ThemeProviders";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root")!;
const app = createRoot(root);
app.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
);
