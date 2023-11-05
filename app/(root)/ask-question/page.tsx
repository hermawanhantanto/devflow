import Question from "@/components/form/Question";
import { getUserById } from "@/lib/action/user.action";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
  const userId = "12345";
  if (!userId) redirect("/sign-in");
  const user = await getUserById({ userId });
  console.log(user);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask Question</h1>
      <Question userId={JSON.stringify(user._id)} />
    </div>
  );
};

export default AskQuestion;
