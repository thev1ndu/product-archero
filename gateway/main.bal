import ballerina/http;

// Gateway listens on port 8080
listener http:Listener gatewayListener = new(8080);

// Backend API is hosted at port 50001
final string BACKEND_BASE_URL = "http://localhost:50001";
final http:Client backendClient = check new (BACKEND_BASE_URL);

// Utility to build path string from segments
function pathToString(string[] path) returns string {
    string result = "";
    foreach string segment in path {
        result = result + "/" + segment;
    }
    return result;
}

service / on gatewayListener {
    resource function 'default [string... path](http:Caller caller, http:Request req) returns error? {
        string fullPath = pathToString(path);
        http:Response backendRes = check backendClient->forward(fullPath, req);
        check caller->respond(backendRes);
    }
}