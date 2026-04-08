"use client";

import { useMutation, useQuery } from "convex/react";

import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

const Home = () => {

  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col justify-center items-center min-h-svh">

      <Button onClick={() => addUser()}>Add</Button>

      <div>
        {JSON.stringify(users, null, 4)}
      </div>
    </div>
  )
}

export default Home;