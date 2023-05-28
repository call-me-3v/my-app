import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const TenantTable = () => {
  const [tenant, setTenant] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/tenants")
      .then((res) => res.json())
      .then((data) => setTenant(data.tenants));
  }, []);
  return (
    <div className="bootstrap-iso">
      <Table responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>National ID</th>
            <th>Telephone Number</th>
            <th>Email</th>
            <th>Entry Date</th>
            <th>Exit Date</th>
            <th>Status</th>
            <th>House</th>
            <th>Apartment Number</th>
            <th>Tenancy Agreement</th>
            <th>Rent Due Days</th>
            <th>Amount Paid</th>
            <th>Amount Owing</th>
            <th>Room Features</th>
            <th>Number of Keys</th>
            <th>Meter Number</th>
            gender, nationalId, telephone, email, entryDate, exitDate, Status,
            house, apartNumber, agreementDocument, rentDueDays, amountPaid,
            amountOwing, roomFeatures, numberOfKey, meterNmber,
          </tr>
        </thead>
        <tbody>
          {tenant.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>

              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.nationalId}</td>
              <td>{item.telephone}</td>
              <td>{item.email}</td>
              <td>{item.entryDate}</td>
              <td>{item.exitDate}</td>
              <td>{item.status}</td>
              <td>{item.house}</td>
              <td>{item.apartment}</td>
              <td>{item.agreementDocument}</td>
              <td>{item.rentDueDays}</td>
              <td>{item.amountPaid}</td>
              <td>{item.amountOwing}</td>
              <td>{item.roomFeatures}</td>
              <td>{item.numberOfKey}</td>
              <td>{item.meterNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TenantTable;
