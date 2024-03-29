import React from "react";
import { CCard, CCardHeader, CCardBody, CDataTable, CBadge, CCollapse, CButton} from "@coreui/react";
import {Link} from 'react-router-dom';

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      newDetails : []
    };
  }
  usersData = [
    {id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
    {id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 23, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending'},
    {id: 42, name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!'}
  ]

  fields = [
    { key: "name", _style: { width: "40%" } },
    "registered",
    { key: "role", _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  toggleDetails = (index) => {
    console.log(index,"index")
    const position = this.state.details.indexOf(index);
    console.log("position",position,this.state.details.slice())
    this.setState({newDetails :this.state.details.slice()})
    console.log("newDetails",this.state.newDetails)
    if (position !== -1) {
      this.setState({newDetails : this.state.newDetails.splice(position, 1)})
      console.log("inif",this.state.newDetails.splice(position, 1))
    } else {
      let a = [ ...this.state.details ,index ]
      console.log("a",a)
      this.setState({
        newDetails : a
      })

       console.log("else",this.state.newDetails, index)
    }
    this.setState({ details: this.state.newDetails})
  }

  componentDidMount(){
    const {fetchitems} = this.props;
    fetchitems();
  }

  render(){
    return(
      <div className="animated fadeIn">
      <CCard>
        <CCardHeader>
          <i className="icon-note"></i>
          <strong>User List</strong>
          <div className="card-header-actions">
            <Link to="/adduser"><CButton block color="primary">Add User</CButton></Link>
          </div>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={this.usersData}
            fields={this.fields}
            columnFilter
            tableFilter
            footer
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            scopedSlots={{
              status: (item) => (
                <td>
                  <CBadge color={this.getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),
              show_details: (item, index) => {
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        this.toggleDetails(index);
                      }}
                    >
                      {this.state.details.includes(index) ? 'Hide' : 'Show'}
                    </CButton>
                  </td>
                );
              },
              details: (item, index) => {
                return (
                  <CCollapse show={this.state.details.includes(index)}>
                    <CCardBody>
                      <h4>{item.username}</h4>
                      <p className="text-muted">
                        User since: {item.registered}
                      </p>
                      <CButton size="sm" color="info">
                        User Settings
                      </CButton>
                      <CButton size="sm" color="danger" className="ml-1">
                        Delete
                      </CButton>
                    </CCardBody>
                  </CCollapse>
                );
              },
            }}
          />
        </CCardBody>
      </CCard>
    </div>
    )
  }

}
export default DataTable;
