# Notification Component

The toast notification acts as feedback for an action the user has performed.

## Example

The included example alerts the user to the fact that they've downloaded and are using Firefox.

## Behavior

The notification softly animates into the top right of the page, pauses for three seconds, and then dismisses itself.

The animation adjusts the notification's opacity and z-index. At the beginning of the animation the component's z-index is 4, which sits above the page's content, making included links clickable. When it animates out, the z-index becomes -1, moving it behind the page so that it doesn't block any interactive elements that visually would appear beneath it.
