import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Use "/bind" will easierier
//Create cx to use CSS classclass
const cx = classNames.bind(styles);

function Header() {

  const tabs = [
    { name: "User", path: "/user" },
    { name: "Product", path: "/product" },
    { name: "Transaction", path: "/transaction" },
    { name: "Content", path: "/content" },
    { name: "Customer", path: "/customer" },
    { name: "Finance", path: "/finance" },
    { name: "Data Analysis", path: "/data-analysis" },
  ];

  const[activeTab, setActiveTab] = useState(null)
  const navigate = useNavigate(); // Hook để điều hướng

  const handleClick = (tab) => {
    setActiveTab(tab.name)
    navigate(tab.path)
  }

  return (
    <header className={cx("wrapper")}>
      <div className={cx("header_tabs")}>
        {tabs.map((tab, index) => (
          <div
           key={index} className={cx("tabs", {active: activeTab === tab.name})}
            onClick = {() => handleClick(tab)}
           >
            {tab.name}
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
