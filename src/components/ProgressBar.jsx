const ProgressBar = ({ percent }) => {
    let width = { width: percent }
    return (<>
        <div style={{ height: '10px' }} className="border border-white rounded-pill">
            <div className="bg-primary h-100  rounded-pill" style={width}></div>
        </div>
    </>);
}

export default ProgressBar;