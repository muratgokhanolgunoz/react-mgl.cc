import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class ScheduleRow extends Component {
    render() {
        return (
            <Fragment>
                <tr className="cursor-pointer" onClick={() => this.props.funcCopyOfShipInformations(this.props.scheduleRowItem)}>
                    <td><span className="table-schedule-row-span"><b>{this.props.scheduleRowItem.destination_name}</b></span></td>
                    <td><span className="table-schedule-row-span">{this.props.scheduleRowItem.ship_name}</span></td>
                    <td><span className="table-schedule-row-span">{this.props.scheduleRowItem.eta_date}</span></td>
                    <td><span className="table-schedule-row-span">{this.props.scheduleRowItem.cut_off_date}</span></td>
                    <td><span className="table-schedule-row-span">{this.props.scheduleRowItem.load_place.substr(0, 25)}</span></td>
                    <td><span className="table-schedule-row-span">{this.props.scheduleRowItem.lan_name.substr(0, 25)}</span></td>
                    <td><span className="table-schedule-row-span">{this.props.scheduleRowItem.cutoff_date}</span></td>
                </tr>
            </Fragment>
        )
    }
}

ScheduleRow.propTypes = {
    scheduleRowItem: PropTypes.object.isRequired,
    funcCopyOfShipInformations: PropTypes.func.isRequired
}

export default ScheduleRow