const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const secret = "notetaker";
const Note = require("../Models/Note");
const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.post('/note', async(req,res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err) => {
        if (err) throw err;
        const { title, description } = req.body;
        const noteDoc = await Note.create({
          title,
          description,
        });
        res.json(noteDoc);
      });
})