import 'antd/dist/antd.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

const t = <Table dataSource={dataSource} columns={columns} />;

ReactDOM.render(
  <div>
    <h1>Test</h1>
    {t}
  </div>,
  document.getElementById("root")
);
