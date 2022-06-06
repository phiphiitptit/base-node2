export const Authentication = async (req, res, next) => {
  try {
    let user = req.body.username;
    let passwd = req.body.password;
    // console.log(req.body);
    if (user === "hawaco" && passwd === "123qwe@") {
      res.status(200).json({
        status: "Login Success",
        token: "hawaco2021",
      });
    } else {
      res.status(400).json({
        status: "Login Faild",
      });
    }
    next();
  } catch (e) {
    res.status(400).json({
      status: "Hawaco Bad request",
      data: e.message,
    });
  }
};
