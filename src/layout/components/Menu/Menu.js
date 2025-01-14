import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState,useRef } from "react";
import gsap from 'gsap'

function Menu({ handleClickDisplay }) {
  const conntainerRef = useRef(null);
  const menuItems = [
    {
      name: "Account Manage",
      path: "/account_manage",
      subItems: [
        {
          name: "Manage Account",
          path: "/account_manage/manage_users",
        },
        {
          name: "Registration Requests",
          path: "/account_manage/approve_requests",
        },
        {
          name: "Warn or Suspend",
          path: "/account_manage/account_violations",
        },
      ],
    },
    {
      name: "Product Manage",
      path: "/product_manage",
      subItems: [
        {
          name: "Products Requests",
          path: "/product_manage/approve_products",
        },
        {
          name: "Remove Products",
          path: "/product_manage/remove_products",
        },
      ],
    },
    {
      name: "Transaction",
      path: "/transaction",
      subItems: [
        {
          name: "Order Issue",
          path: "/transaction/orders_Issue",
        },
        {
          name: "Transaction dispute",
          path: "/transaction/Transaction_disputes",
        },
      ],
    },
    {
      name: "Content",
      path: "/content",
      subItems: [
        {
          name: "Banners and Promotions",
          path: "/content/banners_Promotions",
        },
      ],
    },
    {
      name: "Finance",
      path: "/finance",
      subItems: [
        {
          name: "Verify and Reconcile Payments",
          path: "/finance/Verify_and_Reconcile_payments",
        },
        { name: "Support Order Refunds", path: "/finance/refund_support" },
      ],
    },
    {
      name: "Data Analysis",
      path: "/data_analysis",
      subItems: [
        {
          name: "Platform Performance",
          path: "/data_analysis/platform_performance",
        },
        {
          name: "Sales Data and User Behavior",
          path: "/data_analysis/Sales_Data_and_User_behavior",
        },
      ],
    },
    {
      name: "Support",
      path: "/support",
      subItems: [
        {
          name: "Customer Inquiries",
          path: "/support/customer_support",
        },
        {
          name: "Technical Support",
          path: "/support/technical_support",
        },
      ],
    },
  ];

  // navigate dùng để chuyển trang
  let navigate = useNavigate();

  const handleClick = (item) => {
    navigate(item.path);
  };

  //Xử lí HandleClickDisplay đc truyền từ Dashboard sang Menu
  const handleClickDisplayMenu = async() => {
    await gsap.to(conntainerRef.current, {duration: 0.5, width:0})
    handleClickDisplay();
  };

  //Arrow là mũi tên trong menu
  const [arrowDisplay, setArrowDisplay] = useState(false);
  const handleClickArrow = (menuItem) => {
    setArrowDisplay((prevState) => ({
      ...prevState,
      [menuItem.path]: !prevState[menuItem.path],
    }));
  };

  const handleClickMenuItem2 = (menuItem2) => {
    navigate(menuItem2.path);
  }

  return (
    <div ref={conntainerRef} className={styles.container}>
    <div className={styles.wrapper}>

    <div
      style={{
        width: "100%",
        height: "5vh",
        display: "flex",
        justifyContent: "space-between", /* Căn đều hai bên */
        alignItems: "center", /* Căn giữa theo trục dọc */
      }}
    >
  {/* Home icon */}
      <img
        onClick={() => handleClickDisplayMenu()}
        className={styles.img_sidebar_home}
        alt="img_sidebar_home"
        src="/Home.png"
      />

  {/* Menu icon */}
      <img
        onClick={() => handleClickDisplayMenu()}
        className={styles.img_sidebar_menu}
        alt="img_sidebar_menu"
        src="/MenuIn.png"
      />
    </div>



      <div className={styles.sidebar_menu}>
        {menuItems.map((menuItem) => (
          <div key={menuItem.path} className={styles.items_sidebar_menu}>
            <div className={styles.ul_block_menu}>
              {/* Hiện ra những chức năng chính và mũi tên  */}
              <div>
                <ul className={styles.ul}>
                  <li
                    className={styles.li}
                    onClick={() => handleClick(menuItem)}
                    key={menuItem.path}
                  >
                    {menuItem.name}
                  </li>
                  <FontAwesomeIcon
                    //Arrow là mũi tên trong menu
                    onClick={() => handleClickArrow(menuItem)}
                    className={styles.arrow_in_menu}
                    icon={faCaretUp}
                    flip={
                      arrowDisplay[menuItem.path] ? "vertical" : "horizontal"
                    }
                  />
                </ul>
              </div>

              {/* khi click mũi tên, nó sẽ hiện nội dung này ở bên dưới
              nội dung này là những lựa chọn nhỏ của Chức năng chính */}
              <div className={styles.items_subItems_menu}>
                {arrowDisplay[menuItem.path] && (
                  <div className={styles.subItems_menu}>
                    {menuItem.subItems.map((menuItem2) => (
                      <div
                        onClick={() => handleClickMenuItem2(menuItem2)}
                        key={menuItem2.path}
                        className={styles.menu_item2}
                      >
                        {menuItem2.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.content_sidebar_G5}>Make by Group 5</div>
    </div>
    </div>
  );
}

export default Menu;
