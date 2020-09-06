import express from "express";
import path from "path";
import axios from "axios";
import template from "./src/template";
import ssr from "./src/server";

const app = express();

// Serving static files
app.use("/assets", express.static(path.resolve(__dirname, "assets")));
app.use("/media", express.static(path.resolve(__dirname, "media")));

// hide powered by express
app.disable("x-powered-by");
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false,
  data: [],
  error: "",
  query: "",
};

// server rendered home page
app.get("/", (req, res) => {
  const limit = req.query.limit;
  const launchSuccess = req.query.launch_success;
  const landerSuccess = req.query.lander_success;
  const launchYear = req.query.launch_year;
  let params = "?limit=100";

  if (limit) params = `?limit=${limit}`;
  if (launchSuccess) params += `&launch_success=${launchSuccess}`;
  if (landerSuccess) params += `&lander_success=${landerSuccess}`;
  if (launchYear) params += `&launch_year=${launchYear}`;

  console.log("PARAMS", params);
  axios
    .get(`https://api.spacexdata.com/v3/launches${params}`)
    .then((response) => response.data)
    .then((json) => {
      initialState = { ...initialState, query: params, data: json };
      const { preloadedState, content } = ssr(initialState);

      const response = template(
        "Sapient Test",
        preloadedState,
        content
      );
      res.setHeader("Cache-Control", "assets, max-age=604800");
      res.send(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// Pure client side rendered page
app.get("/client", (req, res) => {
  let response = template("Client Side Rendered page");
  res.setHeader("Cache-Control", "assets, max-age=604800");
  res.send(response);
});
