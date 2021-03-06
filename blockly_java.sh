#!/bin/bash

#
# lejos: Java tool to link and download java programs for LeJOS
#
# 15/03/06  created Matthias Paul Scholz

if [ -z "$LEJOS_HOME" ]; then 
  LEJOS_HOME="$(dirname $(dirname $0))"
fi

if [ $OSTYPE == "cygwin" ]; then
  SEP=";"
else
  SEP=":"
fi

THIRDPARTY_LIBS="$LEJOS_HOME/3rdparty/lib"
LINK_CLASSPATH=.$SEP$THIRDPARTY_LIBS/bcel-5.1.jar$SEP$THIRDPARTY_LIBS/commons-cli-1.0.jar$SEP$LEJOS_HOME/lib/jtools.jar$SEP$LEJOS_HOME/lib/classes.jar$SEP$LEJOS_HOME/lib/rcxcomm.jar$SEP$LEJOS_HOME/lib/pcrcxcomm.jar

java -classpath "$LINK_CLASSPATH" js.tools.LejosLinkAndDownload --writeorder BE --classpath "$LINK_CLASSPATH" -tty ${RCXTTY:-usb} "Lego_rcx_code"
