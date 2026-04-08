"use client";

import { useQuery } from "convex/react";

import { api } from "@workspace/backend/_generated/api";

const Home = () => {

  const users = useQuery(api.users.getMany);

  return (
    <div className="flex justify-center items-center min-h-svh">
      {JSON.stringify(users, null, 4)}
    </div>
  )
}

export default Home;