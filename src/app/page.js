"use client";
import React, { useState } from "react";
import { Select } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { Card, Layout, Typography, theme } from "antd";
const { Header, Content, Footer } = Layout;
import style from "./page.module.css";
import { Rate } from "antd";

const Home = () => {
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            marginTop: 16,
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="heading">
            <Typography.Title level={2}>Leave a Review</Typography.Title>
          </div>
          <div className={style.cardbox}>
            <Card title="Saftey" bordered={false} style={{ width: "100%" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, nesciunt?
              </p>
              <div className={style.rating}>
                <Rate allowHalf defaultValue={2.5} />
              </div>
            </Card>
          </div>
          <div className={style.cardbox}>
            <Card
              title="Recommendation"
              bordered={false}
              style={{ width: "100%" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
                laboriosam.
              </p>
              <div className={style.rating}>
                <Rate allowHalf defaultValue={2.5} />
              </div>
            </Card>
          </div>
          <div className={style.cardbox}>
            <Card
              title="Would you like Tarusti?"
              bordered={false}
              style={{ width: "100%" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quasi.
              </p>
              <div className={style.rating}>
                <LikeOutlined size={"large"} /> 0{" "}
                <DislikeOutlined size={"large"} /> 0
              </div>
            </Card>
          </div>
          <div className={style.cardbox}>
            <Card title="Praise" bordered={false} style={{ width: "100%" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quasi.
              </p>
              <div className={style.rating}>
                <Select
                  mode="multiple"
                  placeholder="Inserted are removed"
                  value={selectedItems}
                  onChange={setSelectedItems}
                  style={{
                    width: "100%",
                  }}
                  options={filteredOptions.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                />
              </div>
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default Home;
