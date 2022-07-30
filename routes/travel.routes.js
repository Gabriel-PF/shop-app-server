const express = require('express')
const Travel = require('../models/Travel.model')
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
/**
 * All routes are prefixed with /api/ad
 */
router.get('/', async(req, res) => {
    try {
        const travel = await Travel.find()
        res.status(200).json(travel)
    } catch(error) {
        next(error)
    }
}); 

router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const travel = await Travel.findById(id);
      return res.status(200).json(travel);
    } catch (error) {
      next(error);
    }
  });

  router.post("/", isAuthenticated, async (req, res, next) => {
    console.log(req.body);
    try {
      const { writer, title , description, images, city, views } = req.body;
    //  if (!owner) {
     //   return res.status(400).json({ message: "Username is required" });
     // }
      const travel = await Travel.create({
        writer, 
        title , 
        description, 
        images, 
        city, 
        views
      });
      return res.status(200).json(travel);
    } catch (error) {
      next(error);
    }
  });

  router.put("/:id", isAuthenticated, async (req, res, next) => {
    try {
      const { id } = req.params;
      const travel = await Travel.findOneAndUpdate(
        { _id: id, writer: req.payload._id },
        req.body,
        { new: true }
      );
      return res.status(200).json(travel);
    } catch (error) {
      next(error);
    }

    router.delete("/:id", isAuthenticated, async (req, res, next) => {
        try {
          const { id } = req.params;
          await Travel.findOneAndDelete(
            { _id: id, writer: req.payload._id },
            req.body
           
          );
          return res.status(200).json({ message: `Travel post ${id} deleted` });
        } catch (error) {
          next(error);
        }
      });

  });


module.exports = router; 