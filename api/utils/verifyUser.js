export const verifyToken = (req, res, next) => {
  const token = req.cookie.access_token;
  if (!token) {
    return res.status(401).json("You Are not Authenticated");
  }
};
