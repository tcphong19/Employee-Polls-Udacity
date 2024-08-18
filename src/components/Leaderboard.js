import { Avatar, Layout, Table, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { connect } from "react-redux";
import "./Leaderboard.scss";

const Leaderboard = ({ scoreboard }) => {
  const columns = [
    {
      title: "Users",
      dataIndex: "user",
      key: "user",
      render: (text, record) => (
        <div className="user-column">
          <Avatar src={record.avatarURL} />
          <div className="user-info">
            <div className="user-name">{record.user}</div>
            <div className="user-id">{record.id}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Answered",
      dataIndex: "answered",
      key: "answered",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
  ];

  const data = scoreboard.map((user) => ({
    key: user.id,
    user: user.name,
    avatarURL: user.avatarURL,
    id: user.id, // Ensure ID is included in the data
    answered: Object.keys(user.answers).length,
    created: user.questions.length,
  }));

  return (
    <Layout className="my-5">
      <Content className="d-flex flex-column align-items-center">
        <Typography.Title level={3} style={{ color: "black" }}>
          Leaderboard
        </Typography.Title>{" "}
        <Table columns={columns} dataSource={data} pagination={false} />
      </Content>
    </Layout>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    scoreboard: Object.values(users)
      .sort((a, b) => {
        const la = Object.keys(a.answers).length;
        const lb = Object.keys(b.answers).length;
        return lb - la;
      })
      .sort((a, b) => {
        const la = Object.keys(a.questions).length;
        const lb = Object.keys(b.questions).length;
        return lb - la;
      }),
  };
};

export default connect(mapStateToProps)(Leaderboard);
