import React, { Component, Fragment } from "react";
import Titles from "./titles/Titles";
import ScheduleServices from "../../services/ScheduleServices";
import scheduleBackground from "../../assets/images/schedule/schedule.jpg";
import { Container, Row, Table } from "react-bootstrap";

class Schedule extends Component {
  state = {
    scheduleList: [],
  };

  componentDidMount() {
    let scheduleServices = new ScheduleServices();
    scheduleServices.getSchedule().then((schedule) => this.setState({ scheduleList: schedule.data.ships })).catch(console.log("A problem was encountered when obtaining the ship schedule list"));
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
              <Titles title="Gemi Programı" subtitle="" description="" textAlign="text-center" color="text-light" />
            </Row>
            <Row>
              <Table className="table-schedule" hover>
                <thead>
                  <tr>
                    <th>Varış Yeri</th>
                    <th>Gemi Adı</th>
                    <th>Tahmini Gemi Gelişi</th>
                    <th>Beyanname Kapanış</th>
                    <th>Yükleme Yeri</th>
                    <th>Konsol Kapanış</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.scheduleList.length
                    ?
                    this.state.scheduleList.map((schedule) => (
                      <tr className="cursor-pointer" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <td ><b>{schedule.destination_name}</b></td>
                        <td>{schedule.ship_name}</td>
                        <td>{schedule.eta_date}</td>
                        <td>{schedule.cut_off_date}</td>
                        <td>{schedule.load_place}</td>
                        <td>{schedule.cutoff_date}</td>
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
        </div>
      </Fragment>
    );
  }
}
export default Schedule;
