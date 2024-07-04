import {createRoot} from "react-dom/client";

import {appStarted} from "@/shared/config/init";
import App from "./App.tsx";

const root = createRoot(document.querySelector("#root") as HTMLElement);

appStarted();

root.render(<App/>);