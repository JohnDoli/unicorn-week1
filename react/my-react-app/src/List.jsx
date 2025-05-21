
function List(props) {
    const fruits = [
        {id: 1, name: "Apple"},
        {id: 2, name: "Banana"},
        {id: 3, name: "Pineapple"},
    ]

    const itemList = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}
    </li>);

    return(<ul>{itemList}</ul>)
}

export default List