import { Switch, Route } from "wouter";
import StartPage from "./StartPage";
import AboutPage from "./AboutPage";
import ToggleBoxContainer from "./components/Task_2/ToggleBoxContainer";

export default function App() {
    return (
        <Switch>
            <Route path="/" component={StartPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile/:name" component={ToggleBoxContainer} />
            <Route>404: Path not found!</Route>
        </Switch>
    );
}
