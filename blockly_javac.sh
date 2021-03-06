#!/bin/bash

#
# lejosjc: Java tool for compiling java programs for LeJOS
#
# 12/12/02  created L. Griffiths

if [ -z "$LEJOS_HOME" ]; then
  LEJOS_HOME="$(dirname $(dirname $0))"
fi

if [ $OSTYPE == "cygwin" ]; then
  SEP=";"
else
  SEP=":"
fi

javac -bootclasspath "$LEJOS_HOME/lib/classes.jar$SEP$LEJOS_HOME/lib/rcxcomm.jar$SEP${CLASSPATH:-.}" "Lego_rcx_code.java"

echo "code is compiled"


