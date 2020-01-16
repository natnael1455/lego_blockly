'use strict';

goog.provide('Blockly.Blocks.texts');  // Deprecated
goog.provide('Blockly.Constants.Text');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['text_print_on_lcd'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg["TEXT_PRINT_lcd_TITLE"],
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "style": "text_blocks",
      "tooltip": Blockly.Msg["TEXT_PRINT_lcd_TOOLTIP"],
      "helpUrl": Blockly.Msg['TEXT_PRINT_HELPURL']
    });
  }
};

Blockly.Blocks['motor_start'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "run the motor %1 in %2 direction",
      "args0": [
         {
      "type": "field_dropdown",
      "name": "Port",
      "options": [
        [
          " Port A",
          "A"
        ],
        [
          "Port B",
          "B"
        ],
        [
          "Port C",
          "C"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "Direction",
      "options": [
        [
          "Forword",
          "Forword"
        ],
        [
          "Backword",
          "Backword"
        ]
      ]
    }
      ],
       "inputsInline": true,
	   "previousStatement": null,
	   "nextStatement": null,
		"colour": 230,
		"tooltip": "controls the direction of the motor",
		"helpUrl": ""
    });
  }
};
Blockly.Blocks['stop_motor'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
     "message0": "Stop the motor%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "port",
      "options": [
        [
          "Port A",
          "A"
        ],
        [
          "Port B",
          "B"
        ],
        [
          "Port C",
          "C"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "stops the motor",
  "helpUrl": ""
    });
  }
};
Blockly.Blocks['motor_power'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "give power to  motor %1 to %2 ",
      "args0": [
         {
      "type": "field_dropdown",
      "name": "Port",
      "options": [
        [
          " Port A",
          "A"
        ],
        [
          "Port B",
          "B"
        ],
        [
          "Port C",
          "C"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "Power",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ]
		,
        [
			"2",
            "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ]
      ]
    }
      ],
       "inputsInline": true,
	   "previousStatement": null,
	   "nextStatement": null,
		"colour": 230,
		"tooltip": "controls the direction of the motor",
		"helpUrl": ""
    });
  }
};
Blockly.Blocks['main'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
     "message0": "main setup%1",
  "args0": [
    {
      "type": "input_statement",
      "name": "main_input"
    }
  ],
  "colour": 0,
  "tooltip": "for setting up and initializing",
  "helpUrl": ""
    });
  }
};


Blockly.Blocks['event'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "message0": "event for %1 Sensor %2 %3 %4 %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "sensors",
      "options": [
        [
          "Touch",
          "1"
        ],
        [
          "Light",
          "3"
        ],
        [
          "Temperature",
          "2"
        ],
        [
          "Rotation",
          "4"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "port",
      "options": [
        [
          "port 1",
          "S1"
        ],
        [
          "port 2",
          "S2"
        ],
        [
          "port 3",
          "S3"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "event_statement"
    }
  ],
  "colour": 0,
  "tooltip": "run on bases of an event",
  "helpUrl": ""
    });
  }
};

Blockly.Blocks['sensor_value'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
   "message0": "the %1 value of the sensor",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "new",
          "new"
        ],
        [
          "old",
          "old"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 210,
  "tooltip": "values from the sensor",
  "helpUrl": ""
    });
  }
};

Blockly.Blocks['lego_controls_repeat_ext'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "message0": "%{BKY_CONTROLS_REPEAT_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "TIMES",
      "check": "Number"
    }],
    "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    });
  }
};

Blockly.Blocks['sound'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "sound_types",
      "options": [
        [
          "Beep",
          "beep()"
        ],
        [
          "Two Beeps",
          "twoBeeps()"
        ],
        [
          "Beep down",
          "beepSequence()"
        ],
        [
          "Buzz",
          "buzz()"
        ]
      ]
    }
  ],
  "colour": 230,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "it run the sound you selected",
  "helpUrl": ""
    });
  }
};

Blockly.Blocks['delay'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
   "message0": "delay by%1 seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "delay value",
      "check": "Number"
    }
  ],
  "colour": 230,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "to delay the flow of the programming ",
  "helpUrl": ""
    });
  }
};