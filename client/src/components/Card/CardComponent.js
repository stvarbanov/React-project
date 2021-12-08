import './Card.css'
const CardComponent = ({
    note, userId
}) => {

    let color = note.color;
    const styleRules = { background: color };


    return (
        <div className="card">
            {userId ? (
                <div id='container' style={styleRules}>
                    <h4 id="card-title">{note.title}</h4>
                    <button className="card-button state">Move state</button>
                    <button className="card-button-delete" >Delete</button>
                    <button className="card-button-details">...</button>
                </div>
            ) : (
                <div id='container' style={styleRules}>
                    <h4 id="card-title">{note.title}</h4>
                </div>
            )}
        </div >


    );
}

export default CardComponent;