<div id="page">

# Microsoft products using the .NET Framework

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
11/2/2004 12:14:00 PM

-----

<div id="content">

In the comments of Scott Hanselman's blog posts on why [VB developers
don't switch/migrate/convert to
VB.NET](http://www.hanselman.com/blog/CommentView.aspx?guid=73e8f82b-d58c-49e6-b2dd-d1f10f6a3179),
someone replied with the following:

So what application has Microsoft written totally in .NET that is worth
a \[expletive\]?  
Visual Studio - NO, Office - NO, Notepad - NO, Calc - NO.  
Why haven't they? .....  
  

Here's my response. While the .NET Framework hasn't been around for a
long period of time (shiping in February 2002), there is quite a lot of
work being done by different teams to use the .NET Framework across
Microsoft's product line. Below is a quick list of just some of the ways
we're using managed code in products that ship today and how we plan to
use managed code in the future.

Windows Client  

  - **Windows XP Pro/Home** was released before the .NET Framework which
    is why it was not included in the box. That being said, Soma points
    out the [70+
    million](http://blogs.msdn.com/somasegar/archive/2004/06/03/148131.aspx)
    who have downloaded the .NET Framework using Windows Update (note
    that the 70M number includes all versions of Windows). In fact,
    there is a lot of debate about why we didn't include Windows XP
    Service Pack 2 (XP SP2) with the .NET Framework, although most
    feedback agrees that we should not require installing new features
    in a service pack that don't relate to security/bug fixes.
  - **Windows XP Pro Tablet PC Edition** includes the .NET Framework and
    the Tablet API is written using the .NET Framework.
  - **Windows XP Media Center Edition** includes the .NET Framework and
    includes MCE-specific applications written using the .NET Framework.
  - **Windows "Longhorn"** dramatically increases the amount of managed
    Windows code including components like WinFx, an all managed API,
     "Avalon", a managed presentation layer, and "Indigo" a messaging
    stack, all using managed code.

Windows Server  

  - **Windows Server 2003** shipped with the .NET Framework 1.1. New
    features like Sharepoint Team Services and UDDI Services are written
    in managed code and require the .NET Framework. 
  - **Small Business Server 2003** shipped with the .NET Framework 1.1
    and includes some SBS-specific applications like Remote Web
    Workplace and the Backup Snap-in written in managed code. 

**Office  
**While Office is a little behind in adopting the .NET Framework, you'll
still find the .NET Framework in use, athough probably not as much as
you would probably want. Then again, Office is also expanding itself
from being stand alone applications to a fully integrated set of tools
for collaboration as witnessed with the [Microsoft Office
System](http://www.microsoft.com/office/prodinfo.mspx), and our server
products with Web front ends pretty much all use ASP.NET.

  - **Office 2003 Professional Edition** includes the .NET Framework,
    but I believe this is an optional install and is primarily geared
    for using FrontPage 11 with ASP.NET. Outlook's new Business Contact
    Manager is primarily written using managed code and requires the
    .NET Framework.
  - **SharePoint Portal Server 2003** is written using ASP.NET.

**Windows Server System**

  - **SQL Server 2000** was released before the .NET Framework. Even so,
    managed providers for SQL Server 7/2000 were included in the .NET
    Framework 1.0/1.1.
  - **SQL Server Reporting Services** shipped after SQL Server 2000, and
    is primarily written in managed code.
  - **SQL Server 2005** **(“Yukon”)** will natively host the .NET
    Framework 2.0, meaning you can write managed database objects like
    user defined types, stored procedures, triggers, and more in managed
    code.
  - **Exchange 2003 **included managed code for it's mobile UI.  Outlook
    Mobile Access is written in managed code using ASP.NET mobile
    controls.
  - **BizTalk 2004 **has parts written in managed code.
  - **Commerce Server 2002** has parts are written in managed code.
  - **Content Management Server 2002 **has **** parts are written in
    managed code.
  - **MSN Messenger Server** includes a presence server and admin/config
    tools written in managed code.
  - **Microsoft Business Network** has parts written in managed code
    and requires .NET Framework 1.1.
  - **MS-CRM **has parts written in managed code.
  - **Speech Server 2004** has parts written in managed code.

**Developer Tools**

  - **.NET Framework 1.0/1.1** has parts written in managed code.
  - **.NET Framework 2.0** has parts written in managed code
  - **Visual Studio .NET 2002/2003** has parts written in managed code.
  - **Visual Studio 2005 **has parts written in managed code.
  - **ASP.NET Web Matrix **is fully written in managed code.

**Microsoft Web Properties using the .NET Framework**

  - [www.msn.com](http://www.msn.com/) 
  - [www.microsoft.com](http://www.microsoft.com/) 
  - [msdn.microsoft.com](http://msdn.microsoft.com/) 
  - [www.gotdotnet.com](http://www.gotdotnet.com/) 
  - [uddi.microsoft.com](http://www.uddi.microsoft.com/)
  - [www.xbox.com](http://www.xbox.com/)
  - [MapPoint XML Web
    Service](http://www.microsoft.com/mappoint/webservice/default.mspx) 

**Microsoft Internal applications using the .NET Framework**

  - Account Explorer 
  - HeadTrax
  - Consensus
  - MS Contract
  - eSupport
  - Enterprise Product Roadmap (EPR) Explorer
  - TSP Academy Virtual Instructor
  - Country Manager Content
  - TANLink Contributor and TanLink Explorer
  - Contoso Enterprise Demo v2 – Hotel Desk

*Does this mean Microsoft is only developing in managed code?* No,
definitely not. I would say the \#1 language in use at Microsoft is
C/C++. We also [invest heavily](http://msdn.microsoft.com/visualc/) in
C++ and help support developers who need the power and performance C++
offers. We also have, in my opinion, the best C++ compiler of any
platform.

And we're just getting started...

 

 

 

  

</div>

</div>
