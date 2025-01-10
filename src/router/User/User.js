import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./layout/components/Header";


//Use "/bind" will easierier
//Create cx to use CSS classclass
const cx = classNames.bind(styles);

function User() {
  const items = [
    { name: "Duyệt Tài Khoản", path: "/path-1" },
    { name: "Quản lí tài khoản người bán", path: "/path-2" },
    { name: "Quản lí tài khoản người mua", path: "/path-3" },
    { name: "Các tài khoản vi phạm", path: "/path-4" }
  ];

  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate(); // Hook để điều hướng

  const handleClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  return (
    <div className={cx("wrapper")}>
       <Header/>
      <div className={cx("tab_user_block")}>
        <div className={cx("tab_user_left")}>
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

export default User;
