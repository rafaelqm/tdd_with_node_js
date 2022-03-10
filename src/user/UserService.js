const User = require('./User');
const bcrypt = require('bcrypt');

const save = async (body) => {
  const hash = await bcrypt.hash(body.password, 10);
  const user = { ...body, password: hash };

  try {
    await User.create(user);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

module.exports = { save };
