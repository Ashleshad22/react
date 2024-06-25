import { useState } from "react";

function Profile() {
  const [loggedIn, setLogIn] = useState(1);
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>User 1</h1>
      ) : loggedIn == 2 ? (
        <h1>User 2</h1>
      ) : (
        <h1>User 3</h1>
      )}
    </div>
  );
}

export default Profile;
