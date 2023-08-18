import React from "react";
import image1 from "../assets/iphone.png";
import image2 from "../assets/iphonepro.png";

const Orders = () => {
  const data = [
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
      img: image1,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
      img: image2,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
      img: image1,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
      img: image2,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
      img: image2,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
      img: image2,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
      img: image1,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
      img: image1,
    },
    {
      name: "iPhone 13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
      img: image1,
    },
  ];

  return (
    <div className="bg-white rounded-[12px] p-4">
      <h4 className="text-[16px]">Recent Orders</h4>
      <div className="flex space-y-2 flex-col mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex border-b-[1px] justify-between w-full py-2"
          >
            <img src={item.img} alt={item.name} />
            <div className="flex w-[90%] justify-between items-center">
              <div className="flex flex-col">
                <p className="text-[#45464E] text-[14px]">{item.name}</p>
                <p className="text-[14px] text-[#33343a] font-[500]">
                  {item.price}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#A6A8B1] text-[12px] ">{item.date}</p>
                <p
                  className={`text-[12px] rounded-[8px] p-2 ${
                    item.status === "Completed"
                      ? "bg-[rgba(50,147,111,0.12)] text-[#519c66]"
                      : "bg-[rgba(245,126,119,0.12)] text-[#CC5F5F]"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
