<div id="page">

# VB's \*My\* for C\# Developers

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/14/2005 6:40:00 PM

-----

<div id="content">

[Juval Lowy](http://www.longhornblogs.com/jlowy/) showed me an amusing
code sample at TechEd - "That". What is "That" you say? "That" is "My"
for C\#. Confused yet? Good.

As Duncan Mackenzie explains in this MSDN Magazine article ["My" is a
new feature in Visual
Basic 2005](http://msdn.microsoft.com/VBasic/Whidbey/default.aspx?pull=/msdnmag/issues/04/05/visualbasic2005/default.aspx)
that is a speed-dial into the .NET Framework. Using "My", you can write
code like this:

Dim contents As String  
contents = My.Computer.FileSystem.ReadAllText("c:\\mytextfile.txt")  
  
Instead of this:

Dim contents As String  
contents = IO.File.ReadAllText("c:\\mytextfile.txt")

The challenge with the latter sample is that if you're brand new to the
.NET Framework or never done file IO with .NET Framework 2.0, you
wouldn't know that the File class was in the IO namespace and that it
has a ReadAllText method. "My" gives you the shortcut without having to
know what namespace or class its under. A few C\# developers have been
asking for the same functionality in C\#, so Juval created a "My"
wrapper in .NET that is a static class named "That". The naming
convention being that when VB refers to "itself" it uses the keyword
"Me" and when C\# refers to itself it "this", then logically when
referring to something else, VB will use "My" and C\# will use "That".
VB being "Me" and "My", C\# being "this" and "That".

Here's the IntelliSense screenshot of the "That" class

![](http://www.danfernandez.com/view/view.aspx?ID=138)

Drilling into Application information....

![](http://www.danfernandez.com/view/view.aspx?ID=139)

Drilling into Computer.Network 

![](http://www.danfernandez.com/view/view.aspx?ID=140)

Here's some C\# code you can use with "That"

bool test =
That.Computer.Network.Ping(@[www.microsoft.com](http://www.microsoft.com));  
That.Application.Log.WriteException(new Exception("foo"));  
long workingSet = That.Application.Info.WorkingSet;

So what's missing?  
To be clear, "That" is not everything that's in "My", notably the
Settings and Webservices sections are gone. That being said (no pun
intended), the code is freely available so someone can probably work
their magic and do some work to dynamically code gen
settings/webservices or scan the setting/webservices proxy classes for
changes to make those available.

How's it implemented?  
Well you should [download That for yourself from
iDesign](http://www.idesign.net/idesign/DesktopDefault.aspx?tabindex=5&tabid=8),
but the "That" class is, as you might expect, a wrapper for the VB "My"
classes.

What do you think? Good idea, bad idea, or just clever naming?

</div>

</div>
