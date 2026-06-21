import { ApiResponse } from "../../utils/ApiResponse.js";
import { BadRequestError, NotFoundError } from "../../utils/AppError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import * as userService from "./user.service.js";


export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);

  if (!user) {
    throw new BadRequestError('Failed to create user');
  }

  res.status(201).json(
    new ApiResponse({
      status: 201,
      message: 'User created successfully',
      data: user,
    })
  );
});



export const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers();

  if (!users || users.length === 0) {
    throw new NotFoundError('No users found');
  }

  res.status(200).json(
    new ApiResponse({
      message: 'Users fetched successfully',
      data: users,
    })
  );
});


export const getUser = asyncHandler(async (req, res) => {

 
  const user = await  userService.getUserById(req.params.id);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  

  res.json(

     new ApiResponse({
      message: "User fetched successfully",
      data: user,
    })
  );
});
