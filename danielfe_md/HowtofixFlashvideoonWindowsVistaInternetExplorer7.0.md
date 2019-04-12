<div id="page">

# How to fix Flash video on Windows Vista / Internet Explorer 7.0

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
9/17/2007 10:01:00 AM

-----

<div id="content">

I've had this problem occur on two PCs so I thought I would post the fix
(courtesy of [Brian Keller](http://blogs.msdn.com/briankel)) since I'm
likely not the only person running into this.

  - Go to this page to [install
    Flash](http://www.adobe.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash)
    (uncheck Google Toolbar, no idea what that has to do with Flash)
  - You'll get a confirmation screen that will say it's successfully
    installed, but you still won't be able to watch videos on MSN,
    YouTube, etc
  - To fix, Run C:\\Windows\\System32\\Macromed\\Flash\\FlashUtilXX.exe
    where XX is the largest value you find in this directory. (For me
    it’s 9d, but it used to be 9b)
  - You'll be prompted to close all browsers and you're done

 \* **Updated Jan 11th for Windows 7/Internet Explorer 8 64-bit** - Go
to the directory C:\\windows\\syswow64\\Macromed\\Flash\\ to find the
FlashUtilXX program.

</div>

</div>
