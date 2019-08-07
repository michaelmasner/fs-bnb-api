const express = require("express");

const app = express();
const cors = require("cors");
// Allows us to access from device
app.use(cors());

//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// jwt
//app.use(jwtAuth);

app.use("/api/user", require("./src/api/user-routes"));
app.use("/api/provider", require("./src/api/provider-routes"));
app.use("/api/userauth", require("./src/api/user-auth-routes"));
app.use("/api/providerauth", require("./src/api/provider-auth-routes"));
app.use("/api/property", require("./src/api/property-routes"));
app.use("/api/booking", require("./src/api/booking-routes"));
app.use("/api/admin", require("./src/api/admin-routes"));

// Custom Middleware
app.use((req, res, next) => {
  console.log("This is a middleware function printing body");
  console.log(req.body);
  next();
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, "localhost", () =>
  console.log(`Server running on port ${PORT}`)
);
