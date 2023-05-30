module.exports = (roles) => {
  return (req, res, next) => {
    console.log(req.body);
    const userRole = req.body.role;
    console.log(userRole, 'user');
    console.log(roles, 'roles');
    if (roles.includes(userRole)) {
      next();
    } else {
      return res.status(401).send('YOU CANT DO IT');
    }
  };
};
