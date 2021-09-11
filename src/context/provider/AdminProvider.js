import React, { Component } from "react"
import AdminContext from "../AdminContext"

class AdminProvider extends Component {
    state = {
        careerPopupStatus: false
    };

    render() {
        return (
            <AdminContext.Provider value={{
                state: this.state,
                setCareerPopupStatus: (_show) => {
                    this.setState({ careerPopupStatus: _show })
                }
            }}>
                {this.props.children}
            </AdminContext.Provider>
        )
    }
}
export default AdminProvider

