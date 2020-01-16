
// for selectin motor port
function select_motor(motor){
	var part_code;
	switch(motor) {
  case 'A':
    part_code='Motor.A';
    break;
  case 'B':
     part_code='Motor.B';
    break;
  case 'C':
    part_code='Motor.C';
}
 return part_code;
}

function sensor_mode(sensor){
	var mode;
	switch(sensor) {
  case '1':
    mode='0x20';
    break;
  case '2':
    mode='0xA0';
    break;
	 case '3':
     mode='0x20';
    break;
  case '4':
    mode='0xE0';
	}
	return mode;
}
// for configarting sensor and reading value

function senssor_set(port,type,mode){
	var port_str='Sensor.'+port+'.';
	var set_sensor=port_str+'setTypeAndMode('+type+','+mode+');\n';
	var active_sensor=port_str+'activate();\n';
	return set_sensor + active_sensor;
}

// sensors listemer
function senssor_even_listener(port,code){
	var pre_code = 'Sensor.'+port+'.'+'addSensorListener (new SensorListener() {\n'+
					' public void stateChanged (Sensor src, int oldValue, int newValue) {\n';
	var post_code='}\n});\n';
	return pre_code+code+post_code;
}

