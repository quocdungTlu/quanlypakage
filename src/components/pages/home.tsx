"use client";

import { CheckOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Slider from "react-slick";
import OrderModal from "../modals/order-modal";
import { useState } from "react";

export default function Home({ message }: { message: string }) {
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [orderData, setOrderData] = useState<any>({});
  const [hoverItem, setHoverItem] = useState(-1);

  const pricingData = [
    {
      title: "GÓI MIỄN PHÍ",
      price: "MIỄN PHÍ",
      duration: "VNĐ/Năm",
      features: ["Gói 5 API", "Thời hạn 1 năm"],
      buttonText: "Mua ngay",
    },
    {
      title: "GÓI CƠ BẢN",
      price: "3.950.000",
      duration: "VNĐ/Năm",
      features: ["Gói 10 API", "Thời hạn 2 năm"],
      buttonText: "Mua ngay",
    },
    {
      title: "GÓI NÂNG CAO",
      price: "5.450.000",
      duration: "VNĐ/Năm",
      features: ["Gói 20 API", "Thời hạn 3 năm"],
      buttonText: "Mua ngay",
      buttonColor: "rgb(234 179 8)",
    },
    {
      title: "GÓI KHÔNG GIỚI HẠN",
      price: "6.450.000",
      duration: "VNĐ/Năm",
      features: ["Gói 30 API", "Thời hạn 5 năm"],
      buttonText: "Mua ngay",
    },
  ];

  return (
    <div className="pt-32">
      <OrderModal
        visible={openOrderModal}
        onClose={() => {
          setOpenOrderModal(false);
        }}
        data={orderData}
      />
      <div className="flex justify-center items-center space-x-6 p-6 bg-gray-100">
        {pricingData.map((packageData, index) => (
          <Card
            onMouseEnter={() => {
              setHoverItem(index);
            }}
            onMouseLeave={() => {
              setHoverItem(-1);
            }}
            hoverable
            key={index}
            className="w-64 shadow-lg rounded-lg transition-transform duration-300 ease-in-out"
            style={{
              borderRadius: "10px",
              height: "500px",
              transform: hoverItem === index ? "scale(1.10)" : "scale(1)",
              boxShadow: hoverItem === index ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
            }}
          >
            <h3 className="text-center text-lg font-bold mb-14">
              {packageData.title}
            </h3>
            <div className="text-center text-3xl font-bold text-black mb-2">
              {packageData.price}
            </div>
            <div className="text-center text-sm mb-6">
              {packageData.duration}
            </div>

            <div className="text-center mb-6">
              <Button
                type="primary"
                onClick={() => {
                  setOpenOrderModal(true);
                  setOrderData(packageData);
                }}
                style={{
                  backgroundColor: hoverItem === index ? "rgb(234 179 8)" : "#2989DF",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="text-white py-2 px-4 rounded"
              >
                {packageData.buttonText}
              </Button>
            </div>

            <ul className="text-sm text-left mb-6">
              {packageData.features.map((feature, i) => (
                <li key={i} className="flex items-left justify-center mb-2">
                  <span>
                    <CheckOutlined
                      style={{
                        color: hoverItem === index ? "rgb(234 179 8)" : "#2989DF",
                        transition: "color 0.3s ease-in-out",
                      }}
                    />{" "}
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
