import React from 'react';

class BadgeForm extends React.Component {
    render() {
        return <div>
            <h1>Registrate</h1>
            <form>
                <div className="form-group">
                    <label>Primer Nombre</label>
                    <input className="form-control" type="text" name="PrimerNombre"/>
                </div>
                <button className="btn btn-primary">Guardar</button>
            </form>
        </div>

    }
}
export default BadgeForm