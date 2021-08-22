import React from "react" ;
import TableItem from "./TableItem";

class MainTable extends React.Component {

    render () {
        return (
            <div className="wrapper">
                <h2>User list</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.props.tableitems.length) ?
                                this.props.tableitems.map(
                                    item =>
                                    <TableItem 
                                        key={item.id}
                                        item={item}
                                        deleteTableItem={this.props.deleteTableItem}
                                        editTableItem={this.props.editTableItem}
                                    />
                                )
                            :
                            <tr><td colSpan="4" className="noinfo">No Users</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MainTable;