import React from 'react';

class BadgeForm extends React.Component {
    //se incia el estado vacio o con lo valores que uno quiera pero indicando el NAME del input
    //state={};
    //metodo que realiza eventos, para el input
    // handleChange = (e) => {
    //     // console.log({
    //     //     value: e.target.value,
    //     //     name: e.target.name
    //     // });
    //     //permite guardar el value de los input en el state de la clase. Con e.target.name permite guardar
    //     //el value de cada input de acuerdo a su atributo name del elemento input. 
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })        
    // }
    //metodo que realiza eventos, para el button
    handleClick = (e) => {
        console.log(this.state);

    }
    //previene el onSubmit por default del form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("entro mk")
    }
    

    //metodo render
    render() {
        return <div>
            <h1>Registrate</h1>            
            <form onSubmit={this.handleSubmit}> 
                <div className="form-group">
                    <label>Primer Nombre</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="PrimerNombre" value={this.props.formValues.PrimerNombre} />    
                </div>                

                <div className="form-group">
                    <label>Apellido</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="Apellido" value={this.props.formValues.Apellido} />             
                </div>                

                <div className="form-group">
                    <label>Correo</label>
                    <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />                    
                </div>                

                <div className="form-group">
                    <label>Dirección</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="Insta" value={this.props.formValues.Insta} />                    
                </div>                

                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
            </form>
        </div>
        //EL HECHO QUE EL BUTTON ESTE DENTRO DE UN FORMULARIO, YA DA POR HECHO QUE EL TIPO DE BUTTON E SUMBIT, ES DECI
        //POR DEFAULT EL BUTTON AL UNDIR, ENVIA EL FORMULARIO (INPUT)

    }
}
export default BadgeForm