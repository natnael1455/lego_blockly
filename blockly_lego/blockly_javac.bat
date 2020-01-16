@echo off
if "%LEJOS_HOME%" == ""  goto homeless

javac -bootclasspath %LEJOS_HOME%\lib\classes.jar;%LEJOS_HOME%\lib\rcxcomm.jar;%CLASSPATH% %LEGO_HOME%\Lego_rcx_code.java

:homeless
echo LEJOS_HOME not defined

:end
