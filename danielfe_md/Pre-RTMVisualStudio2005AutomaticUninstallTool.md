<div id="page">

# Pre-RTM Visual Studio 2005 Automatic Uninstall Tool

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
10/27/2005 5:03:00
PM

-----

<div id="content">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">It's
highly recommended that you install the RTM version of Visual Studio
2005 on a clean machine.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">But...but...we realize
a lot of people have installed some pre-release version of Visual Studio
2005, and to that end, the setup team has created our "best effort" for
uninstalling the product, which is the (also unsupported) [Automatic
uninstall
tool](http://go.microsoft.com/fwlink/?LinkId=47598 "http://go.microsoft.com/fwlink/?LinkId=47598").</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">A couple of notes on
the
    uninstaller</span>

  - 
    
    <div class="MsoNormal">
    
    <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Do </span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**<span style="FONT-WEIGHT: bold; COLOR: red">not
    </span>**use this tool if you have installed SQL Server 2005
    Workgroup Edition or higher (SQL Server 2005 Express is okay).
    Why? Because we don't do ref counting on who is using the Framework
    and you can get into a situation where the uninstall tool will
    remove a pre-RTM version of the .NET Framework 2.0, but SQL Server
    2005 Workgroup+ will still be installed on the machine. Because
    Workgroup edition uses managed code, you've now "hosed" your SQL
    2005 Workgroup edition uninstall.  Check the product readme for
    step-by-step instructions</span>
    
    </div>

  - 
    
    <div class="MsoNormal">
    
    <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Do not click
    "Cancel" when the Automatic uninstall tool is running. Depending on
    when you click Cancel, it can "hose" your machine uninstall</span>
    
    </div>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span> 

</div>

</div>
