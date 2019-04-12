<div id="page">

# Code Samples on GotDotNet

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/20/2003 1:19:00 AM

-----

<div id="content">

The code samples I demoed during my TechEd Middle-Tier apps with C\#
session have finally been uploaded onto GotDotNet.  Each sample has a
readme.txt file which should give you more information for how to setup
and run the samples. 

**[Demo \#1 - Basic
Serialization](http://www.gotdotnet.com/Community/UserSamples/Details.aspx?SampleGuid=be07d492-62c5-453b-afa4-8e6b4b3f1661)  
**The first sample is a very basic sample which shows how to return
objects through web services, how to shape XML through attributes, and
returning data through a DataSet in a web service.

**[Demo \#2a - Binary Web
Service](http://www.gotdotnet.com/Community/UserSamples/Details.aspx?SampleGuid=6b3c7999-636a-40c5-978a-ebb7190b54e0)  
**This sample shows how to return binary data, like an image, by using
two different techniques, Base64 encoding and Direct Internet Message
Encapsulation (available in WSE 1.0).  Because this sample can be might
be difficult to explain, I've added a pretty picture:

![](http://www.gotdotnet.com/team/danielfe/binary1.jpg)

**[Demo \#2b - File Upload through a Binary Web
Service](http://www.gotdotnet.com/Community/UserSamples/Details.aspx?SampleGuid=6b3c7999-636a-40c5-978a-ebb7190b54e0)  
**While ASP.NET made it much easier to upload files to a server when
compared to classic ASP, I always found it really annoying to have to
upload one file at a time.  To solve this, I created a web service that
accepts an array of  (custom) file objects, consisting of a file name
and an array of bytes Base64 encoded.  This upload web service can now
be used by a variety of clients including Java applications for
example.  To show the power of no-touch deployment, I used a Windows
control with a label. When you drag-and-drop files over the label, the
cursor changes to a "+" symbol, and if you release the mouse, the files
are sent as an array of objects and uploaded onto a directory on the web
service all at once.  I have a couple of thoughts on how I can improve
this, including asynchronous upload with a status bar, FTP upload, and a
dynamic client/server tree-view, but I just didn't have time.  I've
included an explaining what's going on below:

![](http://www.gotdotnet.com/team/danielfe/binary2.jpg)

**[Demo \#3 Windows
Services](http://www.gotdotnet.com/Community/UserSamples/Details.aspx?SampleGuid=d9b8000c-0683-4a33-bf08-1e7a5638e1d4)  
**The first sample shows how to use the FileSystemWatcher class in a
Windows service to monitor a directory and log all file changes,
renames, deletes into the Event Log.  It also includes a Windows Service
installer which shows how to install a Windows Service.  The other
sample shows how to start and stop a windows service directly from a
mobile device (cell phone, RIM, etc) through an ASP.NET mobile web
application. Relevant Resources:

  - FileSystemWatcher
    [Walkthrough](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/vbcon/html/vbwlkWalkthroughReactingToFileSystemEvents.asp)
  - Windows Service
    [Walkthrough](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/vbcon/html/vbwlkwalkthroughcreatingwindowsserviceapplication.asp)
  - Mobile
    [QuickStarts](http://samples.gotdotnet.com/mobilequickstart/default.aspx) 

**[Demo \#4 ASP.NET Cache in
DAL](http://www.gotdotnet.com/Community/UserSamples/Details.aspx?SampleGuid=94075769-7381-4529-9596-2e4f18ac1db6)**  
This sample shows how you can leverage the powerful features of the
ASP.NET cache directly in a middle tier Data Access Layer (DAL) by using
the ASP.NET cache API. The DAL has two methods, one which retrieves
using ASP.NET cache and the other without.  To exaggerate the speed
differences, I also made both threads go to sleep for 1000 milliseconds
when they hit the database and ran simple ACT scripts against both
pages.  Relevant Resources:

  - Rob Howard's database-dependent [Caching
    sample](http://gotdotnet.com/team/rhoward/SQLDependency.zip)
  - PAG's [Caching Architecture
    Guide](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnbda/html/CachingArch.asp?frame=true)
  - PAG's [Caching Architecture
    Block](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnpag/html/CachingBlock.asp)

That's all for now, enjoy :)

</div>

</div>
