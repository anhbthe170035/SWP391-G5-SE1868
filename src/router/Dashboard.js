import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Menu from "../layout/components/Menu/Menu";


function Dashboard() {
  const items = [
    { name: "Account Manage", path: "/account_manage" },
    { name: "Product Manage", path: "/product_manage" },
    { name: "Transaction", path: "/transaction" },
    { name: "Content", path: "/content" },
    { name: "Finance", path: "/finance" },
    { name: "Data Analysis", path: "/data_analysis" },
    { name: "Support", path: "/support" },
  ];

  const imgs = [
    { name: "Account Manage", src: "/AccountManage.png" },
    { name: "Product Manage", src: "/ProductManager.png" },
    { name: "Transaction", src: "/Transaction.png" },
    { name: "Content", src: "/Content.png" },
    { name: "Finance", src: "/Finance.png" },
    { name: "Data Analysis", src: "/DataAnalysis.png" },
    { name: "Support", src: "/Support.png" },
  ];

  let navigate = useNavigate();

  const handleClick = (item) => {
    navigate(item.path);
  };

  let [display, setDisplay] = useState(false);
  const handleClickDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      {display && <Menu handleClickDisplay={handleClickDisplay} />}
      <div className={styles.wrapper}>
        <img
          onClick={() => handleClickDisplay()}
          className={styles.img_menu}
          src="/Menu.png"
          alt="Menu_img"
        />
        <div className={styles.dashboard_content}>Dashboard</div>
        <div className={styles.g5_content}>Make By Group 5</div>
        <div className={styles.block_menu}>
          {items.map((item) => {
            let img = imgs.find((img) => img.name === item.name);
            return (
              <div
                onClick={() => handleClick(item)}
                key={item.path}
                className={styles.items_menu}
              >
                <div className={styles.item_content}>
                  <img
                    src={img?.src}
                    alt={img.name}
                    className={styles.items_img_menu}
                  />
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
