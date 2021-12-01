const Notification = (props) => {
  //  Write your code here.
  const { iconURL, backgroundColor, notificationContent } = props;

  return (
    <div className={`notification ${backgroundColor} `}>
      <img className="icon" src={`${iconURL}`} alt="logo" />
      <p className="content">{notificationContent}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <Notification
        iconURL="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        backgroundColor="background-color-1"
        notificationContent="Information Message"
      />
      <Notification
        iconURL="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        backgroundColor="background-color-2"
        notificationContent="Success Message"
      />
      <Notification
        iconURL="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        backgroundColor="background-color-3"
        notificationContent="Warning Message"
      />
      <Notification
        iconURL="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        backgroundColor="background-color-4"
        notificationContent="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
