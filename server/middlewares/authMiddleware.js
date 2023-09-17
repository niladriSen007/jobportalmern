import JWT from "jsonwebtoken";
const JWT_SECRET_KEY = "niladriwillbeagooddeveloperatanyhow"

const userAuth = async (req, res, next) => {
    // console.log(req.headers.authorization)
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    next("Auth Failed");
  }
  const token = authHeader.split(" ")[1];
//   console.log(token)
  try {
    const payload = JWT.verify(token,JWT_SECRET_KEY);
    // console.log(payload)
    req.user = { userId: payload.id };
    // console.log(req.user)
    next();
  } catch (error) {
    next("Auth Failed");
  }
};

export default userAuth;