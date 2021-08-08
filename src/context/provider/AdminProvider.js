import React, { Component } from "react"
import AdminContext from "../AdminContext"

class AdminProvider extends Component {
    state = {
        sidebarOpen: false
    };

    render() {
        return (
            <AdminContext.Provider value={{
                state: this.state,
                setSidebarShowStatus: (_show) => {
                    this.setState({ sidebarOpen: _show })
                },
            }}>
                {this.props.children}
            </AdminContext.Provider>
        );
    }
}
export default AdminProvider

