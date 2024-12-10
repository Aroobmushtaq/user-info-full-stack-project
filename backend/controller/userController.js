const User = require("../models/userSchema")
const mongoose=require("mongoose")
const createUser = async (req, res) => {
    try {
        const body = req.body
        const user = new User(body)
        await user.save()
        res.status(201).json({
            message: "user is created",
            user: user
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err: "failed to create user",
            detail: err.message
        })
    }

}
const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json({
            message: "user data",
            user: user
        })
    }
    catch (err) {
        res.status(500).json({
            message: "failed to get user ",
            detail: err.message
        })
    }
}
const deleteUsre = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        if (!user) {
            res.json("user not found")
        }
        res.json({
            message: "user is deleted",
            user: user
        })
    } catch (err) {
        res.json({
            message: "user is not deleted",
            detail: err.message
        })
    }
}
const updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const updates = req.body; // Contains only the fields to update
      const user = await User.findByIdAndUpdate(id, updates, { new: true });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.status(200).json({
        message: "User is updated",
        user: user,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Failed to update user",
        detail: err.message,
      });
    }
  };
  

module.exports = { createUser, getUser, deleteUsre, updateUser }