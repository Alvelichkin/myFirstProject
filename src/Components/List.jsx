import react {component} from "react";


class TodoList extends Component {
    render() {
        console.log(this.props);

        // const { data, title, valueField } = this.props;
        const { data, title } = this.props;

        return (
            <div>
                <h3>{title}</h3>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.value}</li>
                    ))}
                </ul>
            </div>
        )
    };
}

export default TodoList;