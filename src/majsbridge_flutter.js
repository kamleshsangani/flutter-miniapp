
export default function MAJSBridge (functionName, requestBody, callbackName) {
    var javaScriptMessage = JSON.stringify({
        function: functionName,
        data: requestBody,
        functionCallback: callbackName
    });
    window.maJSBridge.postMessage(javaScriptMessage);
}
