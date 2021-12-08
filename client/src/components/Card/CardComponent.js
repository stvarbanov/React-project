
import './Card.css'
const CardComponent = ({
    note
}) => {

    return (


        <div className="card">

            <div id='container'><h4 id="card-title">{note.title}</h4>
                <button className="card-button state">Set in progress</button>
                <button className="card-button-delete" >Delete</button> </div>

        </div>


    );
}

export default CardComponent;