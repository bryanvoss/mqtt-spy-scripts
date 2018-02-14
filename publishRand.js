// Generate random-sized messages, up to 65535 characters.

function publishRand()
{
	var Thread = Java.type("java.lang.Thread");

	while (true)
	{
		mqttspy.publish("tp1111", randString(Math.random() * 65535), 0, false);
		mqttspy.publish("tp1112", randString(Math.random() * 65535), 0, false);
		mqttspy.publish("tp1113", randString(Math.random() * 65535), 0, false);

		// Rate in milliseconds.
		try 
		{
			Thread.sleep(10);				
		}
		catch(err) 
		{
			return false;				
		}
		
		// Keep mqtt-spy informed the script is still running
		mqttspy.touch();
	}

	return true;
}

function randString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

publishRand();
