const express = require('express');

const UserService = require('./UserService');
const router = express.Router();

router.post('/api/1.0/users', async (req, res) => {
  const userSaved = await UserService.save(req.body);

  if (userSaved.success) {
    return res.send({
      message: 'User created',
    });
  }

  return res.send({
    message: userSaved.message,
  });
});

module.exports = router;
