import classNames from "classnames/bind";
import styles from "./Transaction.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//Use "/bind" will easierier
//Create cx to use CSS classclass
const cx = classNames.bind(styles);

function Transaction() {
  const items = [
    { name: "Theo dõi đơn hàng", path: "/TheoDoiDonHang" },
    { name: "Giải quyết vấn đề đơn hàng", path: "/GiaiQuyetVanDeDonHang" },
    { name: "Xủ lí khiếu nại", path: "/XuLiKhieuNai" },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate(); // Hook để điều hướng

  const handleClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("tab_transaction_block")}>
        <div className={cx("tab_transaction_left")}>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={cx("item_user_left", { active: activeItem === item.name })}
            >
                {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );


}

export default Transaction;
