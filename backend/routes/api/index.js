// backend/routes/api/index.js
const router = require('express').Router();
const { restoreUser } = require("../../utils/auth.js");
router.use(restoreUser);


router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});
//test code authenticate me (phase 3):setTokenCookie
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     }
//   });
//   setTokenCookie(res, user);
//   return res.json({ user: user });
// });

//test code authenticate me (phase 3)  : restoreUser
// const { restoreUser } = require('../../utils/auth.js');
// router.use(restoreUser);
// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

//test code authenticate me (phase 3):requireAuth
// router.use(restoreUser);
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );








module.exports = router;
