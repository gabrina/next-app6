import React from "react";

function userDetail({ user }) {
  //   console.log(user);
  return (
    <div>
      <p>
        {user.id}:{user.name}
      </p>
      <p>phone: {user.phone}</p>
      <p>email:{user.email}</p>
      <p>website: {user.website}</p>
    </div>
  );
}

export default userDetail;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
      { params: { userId: "4" } },
      { params: { userId: "5" } },
      { params: { userId: "6" } },
      { params: { userId: "7" } },
      { params: { userId: "8" } },
      { params: { userId: "9" } },
      { params: { userId: "10" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
