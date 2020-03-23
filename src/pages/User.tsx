import React from "react";
import GlobalInformation from "./components/globalInformation";

const User = (props: any) => {
    const { name } = props.match.params

  return (
    <div>
      <GlobalInformation name={name}/>
    </div>
  );
};

export default User;