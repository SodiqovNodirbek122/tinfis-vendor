import "./style.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { Divider, Row, Col, Form, Input, DatePicker, Select,Button } from "antd";
import {PlusOutlined} from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;

export function Main() {
  const { t } = useTranslation();

  return (
    <div className="main">
      <Form layout="vertical">
        <Divider>{t("passport.data")}</Divider>

        <Row style={{ margin: "0 -10px" }}>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="photo" label={t("photo")}>
              <div style={{ width: "100%", height: 134 }}>
                <img src={imgUrl} width="100%" height="100%" />
              </div>
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="firstname" label={t("first.name")}>
              <Input size="large" />
            </Form.Item>
            <Form.Item name="middle_name" label={t("middle.name")}>
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="firstname" label={t("last.name")}>
              <Input size="large" />
            </Form.Item>
            <Form.Item name="middle_name" label={t("birth.date")}>
              <DatePicker
                style={{ width: "100%" }}
                size="large"
                format="DD.MM.YYYY"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ margin: "0 -10px" }}>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="date" label={t("passport.expiration.date")}>
              <DatePicker
                style={{ width: "100%" }}
                size="large"
                format="DD.MM.YYYY"
              />
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="birth.place" label={t("birth.place")}>
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="issue.place" label={t("issue.place")}>
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>

        <Divider>{t("personal.data")}</Divider>

        <Row style={{ margin: "0 -10px" }}>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item
              name="accommodation.address"
              label={t("accommodation.address")}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="metro" label={t("metro")}>
              <Select size="large">
                <Option>Option 1</Option>
                <Option>Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="family.status" label={t("family.status")}>
              <Select size="large">
                <Option>Option 1</Option>
                <Option>Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="children" label={t("children")}>
              <Select size="large">
                <Option>Option 1</Option>
                <Option>Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        
        <Divider>{t("education")}</Divider>
        
        <Row style={{ margin: "0 -10px" }}>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="period" label={t("period")}>
              <RangePicker size="large" picker="year" />
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="uroven" label={t("uroven")}>
              <Select size="large">
                <Option>Option 1</Option>
                <Option>Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="name" label={t("name")}>
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span="24" style={{ padding: "0 10px" }}>
            <Button size="large" block><PlusOutlined /> {t('add')+' '+t('education')}</Button>
          </Col>          
        </Row>
        
        <Divider>{t("work.experience")}</Divider>
        <Row style={{ margin: "0 -10px" }}>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="period" label={t("period")}>
              <RangePicker size="large" picker="year" />
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="name" label={t("name")}>
            <Input size="large" />
            </Form.Item>
          </Col>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="position" label={t("position")}>
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span="24" style={{ padding: "0 10px" }}>
            <Button size="large" block><PlusOutlined />{t('add')+' '+t('education')}</Button>
          </Col>          
        </Row>
        
        <Divider>{t("contact")}</Divider>
        
        <Row style={{ margin: "0 -10px" }}>
          <Col span="8" style={{ padding: "0 10px" }}>
            <Form.Item name="period" label={t("period")}>
              <RangePicker size="large" picker="year" />
            </Form.Item>
          </Col>
          </Row> 
      </Form>
    </div>
  );
}

const imgUrl =
  "data:image/jpeg;base64,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";
