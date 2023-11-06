"use server";
import User from "@/database/user.model";
import { connectToDB } from "../mongodb.config";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "../schema/schema";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDB();
    const { userId } = params;
    const user = await User.findOne({
      clerkId: userId,
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(params: CreateUserParams) {
  try {
    connectToDB();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    connectToDB();
    const { clerkId, updateData, path } = userData;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // const questionId = await Question.find({ author: user._id });

    await Question.deleteMany({ author: user._id });

    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
