const Code100 = require("../ErrorCode/Code100");
const Code200 = require("../ErrorCode/Code200");
const Code300 = require("../ErrorCode/Code300");
const Code400 = require("../ErrorCode/Code400");
const Code500 = require("../ErrorCode/Code500");

const ErrorCodes = Code100.concat(Code200, Code300, Code400, Code500);

module.exports = async (error, req, res, next) => {
  const ErrorCode = await ErrorCodes.find((e) => e.code === error.statusCode);

  const { code, message } = ErrorCode;
  if (code) {
    res.status(code);
  }
  if (message) {
    res.json({
      Code: code,
      Message: `${message.toUpperCase()} | ${error.MessageFun}`,
    });
  }

  if (ErrorCode === undefined) return res.json("An unknown error occurred.");
};
