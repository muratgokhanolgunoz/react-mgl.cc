import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import Titles from "../layouts/SectionTitles"
import ScheduleServices from "../../../services/ScheduleServices"
import { showToast } from "../../../core/functions"
import { ToastContainer } from 'react-toastify'
import { Container, Row, Table } from "react-bootstrap"
import ScheduleRow from "./ScheduleRow"

class Schedule extends Component {
  state = {
    scheduleList: [],
  }

  componentDidMount() {
    let scheduleServices = new ScheduleServices()
    scheduleServices.getSchedule()
      .then((schedule) => this.setState({ scheduleList: schedule.data.ships }))
      .catch(() => console.log("A problem was encountered when obtaining the ship schedule list"))
  }

  copyOfShipInformations = (shipInfo) => {
    let copyText = ""
    let input

    copyText += this.props.t('schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_DESTINATION') + shipInfo.destination_name.toUpperCase() + "\n"
    copyText += this.props.t('schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_SHIP_NAME') + shipInfo.ship_name.toUpperCase() + "\n"
    copyText += this.props.t('schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_LOAD_PLACE') + shipInfo.load_place.toUpperCase() + "\n"
    copyText += this.props.t('schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_LOAD_ACCEPTANCE_RANGE') + shipInfo.loading_date.toUpperCase() + " / " + shipInfo.cut_off_date.toUpperCase() + "\n"
    copyText += this.props.t('schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_ESTIMATED_SHIP_ARRIVAL') + shipInfo.eta_date.toUpperCase() + "\n"
    copyText += this.props.t('schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_DESTINATION_AGENCY') + shipInfo.lan_name.toUpperCase() + "\n"
    copyText += this.props.t('schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_LAST_UPDATE') + shipInfo.last_updated.toUpperCase()

    document.getElementById("clipboard-area").value = copyText
    input = document.querySelector('#clipboard-area')
    input.select()
    input.setSelectionRange(0, 99999)
    document.execCommand("copy")

    showToast("bottom-center", this.props.t('schedule.body.clipboard.SCHEDULE_SECTION_CLIPBOARD_MESSAGE'), "dark")
  }

  render() {
    return (
      <div id="schedule" className="schedule section-padding" style={{ backgroundImage: `url("./assets/uploads/schedule/schedule.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed" }}>
        <Container className="main" fluid>
          <Row>
            <Titles
              title={this.props.t('schedule.header.SCHEDULE_SECTION_TITLE')}
              subtitle={this.props.t('schedule.header.SCHEDULE_SECTION_SUBTITLE')}
              description={this.props.t('schedule.header.SCHEDULE_SECTION_DESCRIPTION')}
              color="text-light"
              lineStatus={true}
            />
          </Row>
          <Row>
            <textarea type="hidden" id="clipboard-area" />
            <Table className="table-schedule" hover responsive>
              <thead>
                <tr>
                  <th><span className="table-schedule-row-span">{this.props.t('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_DESTINATION')}</span></th>
                  <th><span className="table-schedule-row-span">{this.props.t('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_SHIP_NAME')}</span></th>
                  <th><span className="table-schedule-row-span">{this.props.t('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_ESTIMATED_TIME_OF_ARRIVAL')}</span></th>
                  <th><span className="table-schedule-row-span">{this.props.t('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_DECLARATION_CLOSING')}</span></th>
                  <th><span className="table-schedule-row-span">{this.props.t('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_LOAD_PLACE')}</span></th>
                  <th><span className="table-schedule-row-span">{this.props.t('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_AGENCY')}</span></th>
                  <th><span className="table-schedule-row-span">{this.props.t('schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_CONSOLE_CUTOFF')}</span></th>
                </tr>
              </thead>
              <tbody>
                {this.state.scheduleList.length
                  ?
                  this.state.scheduleList.map((schedule, index) => (
                    <ScheduleRow key={index} scheduleRowItem={schedule} funcCopyOfShipInformations={this.copyOfShipInformations} />
                  ))
                  :
                  <tr>
                    <td colSpan="6">
                      <p className="schedule-null-message">{this.props.t('schedule.body.SCHEDULE_SECTION_EMPTY_MESSAGE')}</p>
                    </td>
                  </tr>
                }
              </tbody>
            </Table>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    )
  }
}
export default withTranslation('translation')(Schedule)
