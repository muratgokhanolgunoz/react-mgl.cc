import React, { Component, Fragment } from "react";
import Titles from "./titles/Titles";
import ScheduleServices from "../../services/ScheduleServices";

import { Container, Row, Table } from "react-bootstrap";
import scheduleBackground from "../../assets/images/schedule/schedule.jpg";

class Schedule extends Component {
  state = {
    scheduleList: [],
  };

  componentDidMount() {
    let scheduleServices = new ScheduleServices();
    scheduleServices.getSchedule()
      .then((schedule) => this.setState({ scheduleList: schedule.data.ships }))
      .catch(() => console.log("A problem was encountered when obtaining the ship schedule list"));
  }

  copyOfShipInformations = (shipInfo) => {
    let copyText = "",
      input

    copyText += "Destination : " + shipInfo.destination_name.toUpperCase() + "\n"
    copyText += "Ship Name : " + shipInfo.ship_name.toUpperCase() + "\n"
    copyText += "Load Place : " + shipInfo.load_place.toUpperCase() + "\n"
    copyText += "Load Date : " + shipInfo.loading_date.toUpperCase() + "\n"
    copyText += "Console Cutoff : " + shipInfo.cut_off_date.toUpperCase() + "\n"
    copyText += "Estimated Ship Arrival : " + shipInfo.eta_date.toUpperCase() + "\n"
    copyText += "Agency : " + shipInfo.lan_name.toUpperCase() + "\n"
    copyText += "Last Update : " + shipInfo.last_updated.toUpperCase()

    document.getElementById("clipboard-area").value = copyText
    input = document.querySelector('#clipboard-area')
    input.select()
    input.setSelectionRange(0, 99999)
    document.execCommand("copy")

    alert("Ship informations copied to clipboard")
  }

  render() {
    const scheduleStyles = {
      backgroundImage: `url("${scheduleBackground}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
    };
    return (
      <Fragment>
        <div id="schedule" className="schedule section-padding" style={scheduleStyles}>
          <Container className="main" fluid>
            <Row>
              <Titles
                title={this.props.language('schedule.header.SCHEDULE_SECTION_TITLE')}
                subtitle={this.props.language('schedule.header.SCHEDULE_SECTION_SUBTITLE')}
                description={this.props.language('schedule.header.SCHEDULE_SECTION_DESCRIPTION')}
                textAlign="text-center"
                color="text-light"
                fontSize="section-title-description-font-size"
              />
            </Row>
            <Row>
              <textarea type="hidden" id="clipboard-area" />
              <Table className="table-schedule" hover responsive>
                <thead>
                  <tr>
                    <th><span className="table-schedule-row-span">{this.props.language('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_DESTINATION')}</span></th>
                    <th><span className="table-schedule-row-span">{this.props.language('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_SHIP_NAME')}</span></th>
                    <th><span className="table-schedule-row-span">{this.props.language('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_ESTIMATED_TIME_OF_ARRIVAL')}</span></th>
                    <th><span className="table-schedule-row-span">{this.props.language('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_DECLARATION_CLOSING')}</span></th>
                    <th><span className="table-schedule-row-span">{this.props.language('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_LOAD_PLACE')}</span></th>
                    <th><span className="table-schedule-row-span">{this.props.language('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_CCONSOLE_CUTOFF')}</span></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.scheduleList.length
                    ?
                    this.state.scheduleList.map((schedule, index) => (
                      <tr className="cursor-pointer" key={index} onClick={() => this.copyOfShipInformations(schedule)}>
                        <td><span className="table-schedule-row-span"><b>{schedule.destination_name}</b></span></td>
                        <td><span className="table-schedule-row-span">{schedule.ship_name}</span></td>
                        <td><span className="table-schedule-row-span">{schedule.eta_date}</span></td>
                        <td><span className="table-schedule-row-span">{schedule.cut_off_date}</span></td>
                        <td><span className="table-schedule-row-span">{schedule.load_place}</span></td>
                        <td><span className="table-schedule-row-span">{schedule.cutoff_date}</span></td>
                      </tr>
                    ))
                    :
                    <tr data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                      <td colSpan="6">
                        <p className="schedule-null-message">{this.props.language('schedule.body.SCHEDULE_SECTION_EMPTY_MESSAGE')}</p>
                      </td>
                    </tr>
                  }
                </tbody>
              </Table>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
export default Schedule;
