const bcrypt = require("bcryptjs");

const inputPassword = "admin123"; // Your entered password
const hashedPassword = "$2a$12$yvR1eHdu8wPhQpD20VJx.Fp6eWmIv1C9QL3jNg671WiGvFaEwIzj"; // The hashed password from MongoDB

bcrypt.compare(inputPassword, hashedPassword, (err, isMatch) => {
    if (err) throw err;
    console.log("Password Match:", isMatch);
});
