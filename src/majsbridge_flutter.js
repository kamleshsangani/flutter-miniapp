
export default function MAJSBridge (functionName, requestBody, callbackName) {
    var javaScriptMessage = JSON.stringify({
        functionName: functionName,
        body: requestBody,
        callbackName: callbackName
    });
    window.maJSBridge.postMessage(javaScriptMessage);
}
