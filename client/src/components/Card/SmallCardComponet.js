
import './Card.css'

const SmallCardComponet = ({
    note
}) => {

    return (

        <div className="team-note" >
            <h3> Edit your note: </h3>
            <h3>Title: {note.title}</h3>
            <h3>State: {note.state}</h3>
            <h3>Color: {note.color}</h3>
            <h3>Created: {note.createdAt}</h3>
        </div>
    );
}

export default SmallCardComponet;