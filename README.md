The stopwatch widget function, represented by the MyCustomWidget component, is my preferred widgets in the application. Let's break down its functionality in detail:

State variables:

isRunning: A boolean state variable that indicates whether the stopwatch is currently running or not.
elapsedTime: A numeric state variable that represents the elapsed time in seconds.
intervalRef: A reference to the interval created by setInterval to update the elapsed time.
startStopwatch function:

This function is responsible for starting and stopping the stopwatch.
When the function is called, it checks the value of isRunning.
If isRunning is false, it starts the stopwatch by setting up an interval that updates the elapsedTime state every second.
If isRunning is true, it stops the stopwatch by clearing the interval using clearInterval.
Finally, it toggles the value of isRunning using the setIsRunning function.
resetStopwatch function:

This function is responsible for resetting the stopwatch to its initial state.
It clears the interval using clearInterval.
It sets the elapsedTime state back to 0.
It sets isRunning to false to indicate that the stopwatch is not running.
formatTime function:

This function takes a time value in seconds and formats it into a string in the format mm:ss (minutes:seconds).
It calculates the minutes and seconds based on the provided time value.
It pads the minutes and seconds with leading zeros if necessary using the padStart function.
It returns the formatted time string.
JSX code:

The JSX code represents the structure and layout of the stopwatch widget.
The widget is wrapped in a <div> element with a minimum width of 300 pixels.
The widget contains a <div> element with the class name "stopwatch-widget".
Inside the "stopwatch-widget", there is a heading with the text "Stopwatch" and a display for the elapsed time.
The elapsed time is displayed using the formatTime function to format the elapsedTime state.
The widget also includes two buttons: one for starting/stopping the stopwatch and another for resetting the stopwatch.
The button text changes dynamically based on the isRunning state.
Overall, this implementation provides the basic functionality of a stopwatch widget. Users can start, stop, and reset the stopwatch. The elapsed time is displayed, and it updates every second while the stopwatch is running.
