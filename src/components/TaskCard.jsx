import ProgressBar from "./ProgressBar";

const TaskCard = ({ item, change, remove }) => {
    let percent = item.current / item.max * 100 + '%'

    let color = parseInt(percent) <= 33.33 ? 'alert-danger' : parseInt(percent) > 33.33 && parseInt(percent) < 80 ? 'alert-warning' : 'alert-success'

    return (<>
        <div className={`alert ${color} m-3 p-5`}>
            <h1>
                {item.title}
            </h1>
            <ProgressBar percent={percent} />
            <span>{item.current}/{item.max}</span>
            <button type="button" className="btn btn-success mx-2" onClick={change} disabled={item.current == item.max}>Make Step</button>
            <button type="button" onClick={remove} className="btn btn-danger">X</button>
        </div>
    </>);
}

export default TaskCard;