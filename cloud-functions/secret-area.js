exports.handler = function(event, context, callback){
    callback(null, {
        statusCode: 200,
        body: "Welcome to the Super Secret Area"
    })
}