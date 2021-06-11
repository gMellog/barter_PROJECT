// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../db/user");
const Vonage = require("@vonage/server-sdk");
const bcrypt = require("bcrypt");
const config = require("../config.json");
const jwt = require("jsonwebtoken");
const ChatHistory = require("../db/chatHistoryModel");
const Deal = require("../db/dealModel");
const Tag = require("../db/tagModel");
const Product = require("../db/productModel");
const vonage = new Vonage({
  apiKey: "db1ab976",
  apiSecret: "iWmhmn3Jq2VyNUlr",
});
function checkNumber(number) {
  const numberRegex = /\+7\(?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}/;
  return numberRegex.exec(number) !== null;
}
function getOnlyNumbers(number) {
  return number
    .split("")
    .filter((ch) => !isNaN(Number(ch)))
    .join("");
}

router.post("/description", async (req, res) => {
  console.log(req.body);
  const user = await User.findById(req.body.id);
  user.description = req.body.value;
  await user.save();
  res.json(user);
});
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  const tags = await Tag.find();
  const deals = await Deal.find().elemMatch("participants", {
    userID: user._id,
  });
  const products = await Product.find();
  res.json({ user, tags, deals, products });
});
router.post("/reg", async (req, res) => {
  const { number, password, name } = req.body;
  if (number && !password) {
    if (checkNumber(number)) {
      const onlyNumbers = getOnlyNumbers(number);
      const user = await User.findOne({ phone: onlyNumbers });
      if (user && user.hash !== undefined) {
        console.log("THERE IS USER WITH THIS NUMBER");
        res.status(409).json();
      } else {
        let newUser;
        if (!user) {
          newUser = await User.create({ phone: onlyNumbers });
        } else {
          newUser = user;
        }
        vonage.verify.request(
          {
            number: onlyNumbers,
            brand: "CHANGER",
          },
          async (err, result) => {
            if (err) {
              console.error(err);
              res.status(500).json();
            } else {
              newUser.verifyID = result.request_id;
              await newUser.save();
              res.json(newUser._id);
            }
          }
        );
      }
    } else {
      res.status(400).json();
    }
  } else if (number && password) {
    const onlyNumbers = getOnlyNumbers(number);
    const user = await User.findOne({ phone: onlyNumbers });
    if (user) {
      try {
        const hash = await bcrypt.hash(password, config.saltRounds);
        user.name = name;
        user.hash = hash;
        const chatHistory = new ChatHistory();
        await chatHistory.save();
        user.chatHistory = chatHistory._id;
        await user.save();
        res.json();
      } catch (e) {
        res.status(500).json();
      }
    } else {
      res.status(400).json();
    }
  } else {
    res.status(409).json();
  }
});
router.post("/code", async (req, res) => {
  const { number, code } = req.body;
  if (number && code) {
    const user = await User.findOne({ phone: getOnlyNumbers(number) });
    if (!user) {
      res.status(401);
      return;
    }
    console.log(user);
    console.log(code);
    vonage.verify.check(
      {
        request_id: user.verifyID,
        code: code,
      },
      async (err, result) => {
        if (err) {
          console.error(err);
          console.log("wrong pin!");
          res.status(500).json("wrong pin");
        } else {
          console.log("everything is good!");
          user.verifyID = null;
          await user.save();
          res.json();
        }
      }
    );
  } else {
    res.status(400).json("no data");
  }
});
router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  if (login && password) {
    let user;
    if (checkNumber(login)) {
      user = await User.findOne({ phone: getOnlyNumbers(login) });
    } else {
      user = await User.findOne({ email: login });
    }
    if (user) {
      const verifiedPass = await bcrypt.compare(password, user.hash);
      if (verifiedPass) {
        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: "1d",
        });
        console.log(token.id);
        const tags = await Tag.find();
        console.log("tags are ", tags);
        const deals = await Deal.find().elemMatch("participants", {
          userID: user._id,
        });
        const products = await Product.find();
        res.json({ user, token, tags, deals, products });
      } else {
        res.status(401).json();
      }
    } else {
      res.status(401).json();
    }
  } else {
    res.status(400).json();
  }
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
});
router.get("/deals", async (req, res) => {
  try {
    const userDeals = await Deal.find().elemMatch("participants", {
      userID: req.user.id,
    });
    res.json(userDeals);
  } catch (e) {
    res.status(400).json({ errorMessage: e.message });
  }
});
module.exports = router;
