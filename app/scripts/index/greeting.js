//before returning its module definition.
define(function () {
    //Do setup work here
    function sendAlert(msg){
        alert(msg);
    };
    return {
        sendAlert: sendAlert
    }
});