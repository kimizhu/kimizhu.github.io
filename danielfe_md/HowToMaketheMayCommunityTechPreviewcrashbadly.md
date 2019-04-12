<div id="page">

# How To Make the May Community Tech Preview crash badly

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
7/6/2004 8:47:00 PM

-----

<div id="content">

I'm back from TechEd Europe where I ran into a case of the angry demo
gods during my C\# IDE Enhancements sessions.
[Joe](http://blogs.msdn.com/joen/) gave this session in San Diego
and did a great job so I had my work cut out to match his greatness.
It's always great to find bad product bugs during a talk, it can only
make you stronger for your next talk :)

**Setup for demo failure**

Part 1 - I was showing the new behavior of the Go To Definition Window.
In Visual Studio 2003, if you right-click on a .NET Framework type (or a
type that you don't have the source code for) it would open the Object
Browser window. In Visual Studio 2005, right-clicking on a type w/o
source code and selecting “Go To Definition” shows the metadata for the
type as a source code file.  The image below shows the dynamically
generated source file based on the String class in the System namespace

![](http://www.danfernandez.com/view/view.aspx?ID=36)

Part 2 - I was showing off the some cool new options available in Visual
Studio 2005 when you click on a file tab. These features include:

  - **Close All But This** - This will close all files except for the
    selected file which is great when you have 10-20 files open and only
    want to work with one
  - **Copy Full Path** - This copies the full path to the selected file
    to the clipboard, convenient for jumping to a command line
  - **Open Containing Folder** - This opens the folder that contains the
    source code file, great for when you need to manipulate files and
    you would rather not have to navigate through c:\\documents and
    settings\\\[username\]\\My Documents\\ etc

![](http://www.danfernandez.com/view/view.aspx?ID=37)

**Combining these steps for disaster**

  - Right click on a type that you don't have source code for (like
    System.String) and select Go To Definition...  This will create a
    Metadata as source file as shown above.
  - Next, right click on the file name created in the last step and
    select “Open Containing Folder“
  - Wait \~30 seconds for Visual Studio to think and then watch as the
    screen goes black and you see the Virtual PC rebooting
  - Insert Homer Simpson “doh\!“

To add insult to injury, my VPC hard drive which is a second hard drive
in place of my CD player, stopped being recognized so even after
restarting it wasn't working.  Luckily for me, I was showing VWD Express
in my next demo and I could use C\# Express for another demo so I only
didn't get to show FxCop integration and the Object Test Bench demo. 
OTB is one of the least known feature in Visual Studio 2005 so I'll be
blogging about my demo later... 

**Note**: You'll need the May Community Tech Preview to have this crash
as Beta 1 works and opens the folder to:
C:\\DOCUME\~1\\\[username\]\\LOCALS\~1\\Temp\\3124$CommonLanguageRuntimeLibrary$v2.0.40607\\System.String.cs

 

</div>

</div>
