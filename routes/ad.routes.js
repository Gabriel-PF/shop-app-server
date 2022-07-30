const express = require('express')
const Ad = require('../models/Ad.model')
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
/**
 * All routes are prefixed with /api/ad
 */
router.get('/', async(req, res) => {
    try {
        const ad = await Ad.find()
        res.status(200).json(ad)
    } catch(error) {
        next(error)
    }
}); 

router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const ad = await Ad.findById(id);
      return res.status(200).json(ad);
    } catch (error) {
      next(error);
    }
  });

  router.post("/", isAuthenticated, async (req, res, next) => {
    console.log(req.body);
    try {
      const { writer, title , description, price, images, city, views } = req.body;
    //  if (!owner) {
     //   return res.status(400).json({ message: "Username is required" });
     // }
      const ad = await Ad.create({
        writer, 
        title , 
        description,
        price, 
        images, city, 
        views
      });
      return res.status(200).json(ad);
    } catch (error) {
      next(error);
    }
  });

  router.put("/:id", isAuthenticated, async (req, res, next) => {
    try {
      const { id } = req.params;
      const travel = await Ad.findOneAndUpdate(
        { _id: id, writer: req.payload._id },
        req.body,
        { new: true }
      );
      return res.status(200).json(ad);
    } catch (error) {
      next(error);
    }

    router.delete("/:id", isAuthenticated, async (req, res, next) => {
        try {
          const { id } = req.params;
          await Ad.findOneAndDelete(
            { _id: id, writer: req.payload._id },
            req.body
           
          );
          return res.status(200).json({ message: `Ad ${id} deleted` });
        } catch (error) {
          next(error);
        }
      });

  });




module.exports = router; 