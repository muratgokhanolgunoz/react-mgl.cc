import React, { Component, Fragment } from "react";
import Context from "../../context/Context";
import Titles from "./titles/Titles";
import SchedulePopup from './popups/SchedulePopup'
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

  render() {
    const scheduleStyles = {
      backgroundImage: `url("${scheduleBackground}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
    };
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <Fragment>
              <div id="schedule" className="schedule section-padding" style={scheduleStyles}>
                <Container className="main" fluid>
                  <Row>
                    <Titles title="Gemi Programı" subtitle="" description="" textAlign="text-center" color="text-light" />
                  </Row>
                  <Row>
                    <Table className="table-schedule" hover responsive>
                      <thead>
                        <tr>
                          <th><span className="table-schedule-row">Varış Yeri</span></th>
                          <th><span className="table-schedule-row">Gemi Adı</span></th>
                          <th><span className="table-schedule-row">Tahmini Gemi Gelişi</span></th>
                          <th><span className="table-schedule-row">Beyanname Kapanış</span></th>
                          <th><span className="table-schedule-row">Yükleme Yeri</span></th>
                          <th><span className="table-schedule-row">Konsol Kapanış</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.scheduleList.length
                          ?
                          this.state.scheduleList.map((schedule, index) => (
                            <tr className="cursor-pointer" key={index} onClick={() => context.schedulePopupShowStatusToggle(true)} data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                              <td><span className="table-schedule-row"><b>{schedule.destination_name}</b></span></td>
                              <td><span className="table-schedule-row">{schedule.ship_name}</span></td>
                              <td><span className="table-schedule-row">{schedule.eta_date}</span></td>
                              <td><span className="table-schedule-row">{schedule.cut_off_date}</span></td>
                              <td><span className="table-schedule-row">{schedule.load_place}</span></td>
                              <td><span className="table-schedule-row">{schedule.cutoff_date}</span></td>
                            </tr>
                          ))
                          :
                          <tr data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <td colSpan="6">
                              <p className="schedule-null-message">We do not have an active ship program</p>
                            </td>
                          </tr>
                        }
                      </tbody>
                    </Table>
                  </Row>
                </Container>

                <SchedulePopup />
              </div>
            </Fragment>
          )
        }}
      </Context.Consumer>
    );
  }
}
export default Schedule;
