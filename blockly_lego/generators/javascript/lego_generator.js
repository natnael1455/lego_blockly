'use strict';

goog.provide('Blockly.JavaScript.texts');

goog.require('Blockly.JavaScript');
// to select which port the motor is using


Blockly.JavaScript['text_print_on_lcd'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\"\"';
	 msg =msg.replace(/\'/g, "\"");
  return 'TextLCD.print(' + msg + ');\n';
};
Blockly.JavaScript['motor_start'] = function(block) {
  var dropdown_port = block.getFieldValue('Port');
  var dropdown_direction = block.getFieldValue('Direction');
  var last_code;
  // TODO: Assemble JavaScript into code variable.
  // to select the direction of the motor
  	switch(dropdown_direction) {
		case 'Forword':
		last_code='.forward()';
		break;
		case 'Backword':
		last_code='.backward()';
	}
  var code = select_motor(dropdown_port)+last_code+';\n';
  return code;
};

Blockly.JavaScript['stop_motor'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  // TODO: Assemble JavaScript into code variable.
  var code = select_motor(dropdown_port)+'.stop();\n';
  return code;
};

Blockly.JavaScript['motor_power'] = function(block) {
  var dropdown_port = block.getFieldValue('Port');
  var dropdown_power = block.getFieldValue('Power');
  var code = select_motor(dropdown_port)+'.setPower('+ dropdown_power + ');\n';
  return code;
};
Blockly.JavaScript['main'] = function(block) {
  var statements_main_input = Blockly.JavaScript.statementToCode(block, 'main_input');
  // TODO: Assemble Java into code variable.
  
  var code =  statements_main_input ;
  return code;
};



Blockly.JavaScript['event'] = function(block) {
  var dropdown_sensors = block.getFieldValue('sensors');
  var dropdown_port = block.getFieldValue('port');
  var statements_event_statement = Blockly.JavaScript.statementToCode(block, 'event_statement');
  // TODO: Assemble JavaScript into code variable.
  var mode_num=sensor_mode(dropdown_sensors);
  var set_code=senssor_set(dropdown_port,dropdown_sensors,mode_num);
  var set_event=senssor_even_listener(dropdown_port,statements_event_statement);
  var code = set_code+set_event;
  return code;
};

Blockly.JavaScript['sensor_value'] = function(block) {
  var dropdown_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch(dropdown_value) {
  case 'new':
    code='newValue';
    break;
  case 'old':
   code='oldValue';
	}
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['lego_controls_repeat_ext'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'int ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (int ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.JavaScript['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
 
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.JavaScript.valueToCode(block, 'BY',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code;
 
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
	
      startVar = Blockly.JavaScript.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'int ' + startVar + ' = ' + argument0 + ';\n';
	  
    var endVar = argument1;
    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
         variable0 + '_end', Blockly.Variables.NAME_TYPE);
		 
      code += 'int ' + endVar + ' = ' + argument1 + ';\n';
    
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.JavaScript.variableDB_.getDistinctName(
        variable0 + '_inc', Blockly.Variables.NAME_TYPE);
		
	 var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (' + startVar + ' = ; ' +
        startVar + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        startVar;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    
  
  return code;
};

Blockly.JavaScript['sound'] = function(block) {
  var dropdown_sound_types = block.getFieldValue('sound_types');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Sound.'+dropdown_sound_types+';\n';
  return code;
};

Blockly.JavaScript['delay'] = function(block) {
  var value_delay_value = Blockly.JavaScript.valueToCode(block, 'delay value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // converting the seconds in to milli seconds
  var int_valu=parseInt(value_delay_value);
  var int_value= int_valu*1000;
   var code='';
  if(isNaN(int_value)){
   code = 'Thread.sleep();\n';
   }
  else{
	  code = 'Thread.sleep('+int_value+');\n';
  }
  
  
  return code;
};