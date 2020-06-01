import React from "react";

import UsersContainer from "../../components/Users/UsersContainer";

export const COMPONENT_NAME = "UsersPage";

export const UsersPage = () => {
  return (
    <div className={COMPONENT_NAME}>
      <UsersContainer />
    </div>
  );
};

UsersPage.displayName = COMPONENT_NAME;
