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
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const paths = users.map((user) => ({
    params: { userId: user.id.toString() },
  }));

  // const paths = users.map((user) => {
  //     return {
  //       params: { userId: user.id.toString() },
  //     };
  //   });

  return {
    paths,
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
    //this is this page props
    props: {
      user,
    },
  };
}
