import React from "react";

class TableItem extends React.Component {

    render () {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.phone}</td>
                <td className="td-buttons">
                    <button 
                        className="Edit"
                        onClick={() => this.props.editTableItem(this.props.item.id)}
                        >Edit</button>
                    <button 
                        className="Delete" 
                        onClick={() => this.props.deleteTableItem(this.props.item.id)}
                    >Del</button>
                </td>
            </tr>
        )
    }
}

export default TableItem;