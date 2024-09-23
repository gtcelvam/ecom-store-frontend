import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

const ShippingInformation = () => {
  //state values
  const { userData } = useSelector((state: RootState) => state.user);

  //constants
  const commonStyles = "flex items-center justify-evenly m-6";

  return (
    <div>
      {/* Section */}
      <div className={commonStyles}>
        <p>Name : </p>
        <p>{userData.name}</p>
      </div>
      {/* Section Ends Here */}
      {/* Section */}
      <div className={commonStyles}>
        <p>Email : </p>
        <p>{userData.email}</p>
      </div>
      {/* Section Ends Here */}
      {/* Section */}
      <div className={commonStyles}>
        <p>Mobile : </p>
        <p>{userData.mobile}</p>
      </div>
      {/* Section Ends Here */}
      {/* Section */}
      <div className={commonStyles}>
        <p>Address : </p>
        <p>Dummy Address</p>
      </div>
      {/* Section Ends Here */}
    </div>
  );
};

export default ShippingInformation;
