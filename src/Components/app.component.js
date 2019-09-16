import react {component} from "react";
import s from "./app.component.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TodoList: [{value: "сделать домашку по js"}, {value: "Разобраться с реактом"}, {value: "не сойти с ума от всего этого"}],
        }
    }

    render() {
        const {TodoList} = this.state;

        return (
            <div>
                <List data = {TodoList}, title = "Сделать за сегодняшний вечер" />;
    </div>
    )
    }
}