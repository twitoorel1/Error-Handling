class CodeError {
  constructor(statusCode, MessageFun) {
    this.statusCode = statusCode;
    this.MessageFun = MessageFun || null;
  }
}

module.exports = CodeError;
