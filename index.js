//
exports.handler = (events, context, cb) => {

  console.log('I m in hello handler !!!')

  const response_success = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'ok'
    }),
  };//https://github.com/serverless/examples/blob/master/aws-node-rest-api-with-dynamodb/todos/update.js
  return cb(undefined,response_success);
}
