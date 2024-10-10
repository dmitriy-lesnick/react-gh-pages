import { useState } from "react"
import TaskCard from "../components/TaskCard"
import FormCreateTask from "../components/FormCreateTask"

const ToDo = () => {
    let [toDoItems, setToDoItems] = useState([
        { id: randomId(), title: 'title-1', max: 4, current: 0 },
        { id: randomId(), title: 'title-2', max: 5, current: 0 },
        { id: randomId(), title: 'title-3', max: 2, current: 0 },
    ])

    let allDone = toDoItems.every(item => item.current == item.max)


    function randomId() {
        return Math.random() + ':' + Date.now()
    }

    function setCurrent(id) {
        setToDoItems(toDoItems.map(item => item.id == id ? { ...item, current: item.current + 1 } : item))
    }

    function createNewTask(result) {
        setToDoItems([...toDoItems, { id: randomId(), title: result.title, max: result.max, current: 0 }])
    }

    function removeTask(id) {
        setToDoItems(toDoItems.filter(item => item.id != id))
    }

    return (
        <>
            <FormCreateTask create={createNewTask} />
            {toDoItems.map(item => <div key={item.id}><TaskCard item={item} remove={() => removeTask(item.id)} change={() => { setCurrent(item.id) }} /></div>)}
            {allDone && toDoItems.length != 0 && < div className="alert alert-success m-4 p-10">All Done!!!</div >}
        </>
    )
}

export default ToDo;