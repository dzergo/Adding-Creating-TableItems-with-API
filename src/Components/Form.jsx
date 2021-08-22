import React from "react" ;

class Form extends React.Component {
    

    render () {
        return (
            <div className="wrapper small">
                <h2>{this.props.isEditing ? 'Edit' : 'Add'}</h2>
                <form className="Form" onSubmit={(e) => this.props.onSubmit(e)}>
                    <label htmlFor="name">
                        Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Andrew"
                            value={this.props.valueName}
                            onChange={(e) => (this.props.onChange({valueName: e.target.value}))}
                        />
                    
                    <label htmlFor="email">Mail:</label>
                        <input 
                            type='text' 
                            name="email" 
                            id="email" 
                            placeholder="flex@gmail.com"
                            value={this.props.valueMail}
                            onChange={(e) => this.props.onChange({valueMail: e.target.value})}
                        />
                
                    <label htmlFor="number">Number:</label>
                        <input 
                            type="text" 
                            // pattern="[0-9]*" 
                            name="number" 
                            id="number" 
                            placeholder="+1 848 39 29 48"
                            value={this.props.valueNumber}
                            onChange={(e) => this.props.onChange({valueNumber: e.target.value})}
                        />
                    
                    <div className="controls">
                    <button className="save" type="submit">Save</button>
                    <button className="cancel" type="reset" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;