"use strict";

require("dotenv").config();

const rootCas = require("ssl-root-cas/latest").create();
require("https").globalAgent.options.ca = rootCas;

const fetch = require("node-fetch");
const superagent = require("superagent");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const express = require("express");
const app = express();
const db = pgp({
  host: "localhost",
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

const port = process.env.PORT || 8080;

app.post("/parcelmonkey", (req, res) => {
  //Parcelmonkey using an older standard of SSL that is no longer accepted (because it can be attacked easily)
  //so I need to disable SSL validation:
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  // console.log(req.body);

  const url = "https://api.parcelmonkey.co.uk/GetQuote";

  fetch(url, {
    method: "post",
    headers: {
      apiversion: process.env.PARCELMONKEY_APIVERSION,
      userid: process.env.PARCELMONKEY_USERID,
      token: process.env.PARCELMONKEY_TOKEN
    },
    body: JSON.stringify(req.body)
  })
    .then(response => response.json())
    .then(body => {
      if (body) {
        res.json(body);
      } else {
        res.json({ error: "no body after respond" });
      }
    })
    .catch(error => {
      res.json(error);
      console.log("Server failed to return data: " + error);
    });

  // superagent
  //   .get(url)
  //   .query()
  //   .end(function(err, response) {
  //     if (err) {
  //       res.json(err);
  //     }
  //     return res.json(response);
  //   });

  //
});

// app.post("/api/order", (req, res) => {
//   //this will be additional informations to order like name, phone number or how to enter to bulding
//   const detailsOfOrder = req.body.details_of_order;
//   const deliveryPrice = 1;
//   console.log(req.body);

//   // 1. insert into "order" table
//   db.one(
//     "INSERT INTO orders (id, details_of_order, delivery_price) VALUES (DEFAULT, $1, $2) RETURNING id",
//     [detailsOfOrder, deliveryPrice]
//   )
//     .then(result => {
//       const orderId = result.id;
//       const { items } = req.body;
//       // 2. insert into "order_item" table for each item
//       return Promise.all(
//         items.map(item => {
//           return db.none(
//             "INSERT INTO order_details (order_id, item_id, quantity) VALUES ($1, $2, $3)",
//             [orderId, item.item_id, item.quantity]
//           );
//         })
//       ).then(() => orderId);
//     })
//     .then(orderId => res.json({ orderId: orderId }))
//     .catch(error => res.json({ error: error.message }));
// });

// app.get("/api/menu", function(req, res) {
//   db.any("SELECT * FROM menu")
//     .then(data => {
//       res.json(data);
//     })
//     .catch(() => {
//       res.json({ error: error.message });
//     });
// });

// app.get("/api/order/:orderId", function(req, res) {
//   const orderId = req.params.orderId;
//   db.any(
//     "SELECT menu.id, menu.name, menu.type, order_details.quantity, orders.delivery_price, orders.details_of_order FROM menu, order_details, orders WHERE order_details.order_id = $1 AND order_details.item_id = menu.id AND orders.id = $1",
//     [orderId]
//   )
//     .then(data => {
//       res.json(data);
//     })
//     .catch(() => {
//       res.json({ error: error.message });
//     });
// });

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
