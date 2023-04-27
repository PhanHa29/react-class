import React from 'react';

type ReupProps = {
  userData: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phone: string;
    role: "student" | "teacher";
    favorite: string[];
    address: "Bac Giang" | "Ha Noi" | "Nghe An" ;
    birthday: string;
    // image: File;
  };
};

function Reup(props: ReupProps) {
  const { userData } = props;

  return (
    <div id="reup">
      <p>First name: {userData.firstName}</p>
      <p>Last name: {userData.lastName}</p>
      <p>Password: {userData.password}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Input Object: {userData.role}</p>
      <p>Favorite: {userData.favorite.join(", ")}</p>
      <p>Address: {userData.address.toString()}</p>
      <p>Birthday: {userData.birthday}</p>
      {/* <p>Image: {userData.image.name}</p> */}
    </div>
  );
}

export default Reup;
