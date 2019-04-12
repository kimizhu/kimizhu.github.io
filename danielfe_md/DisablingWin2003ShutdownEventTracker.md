<div id="page">

# Disabling Win 2003 Shutdown Event Tracker

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
8/6/2003 10:31:00 PM

-----

<div id="content">

[Mark
Michaelis](http://www.microsoft.com/technet/treeview/default.asp?url=/technet/prodtechnol/windowsserver2003/proddocs/standard/rrctopnode.asp)
discusses how to disable the often annoying, at least from a developers
perspective, Shutdown Event Tracker in Windows Server 2003. Its
basically a prompt that makes you explain why the machine is being shut
down and won't shut down until you type something into the comments
box.  Anyone trying to understand why my machine has been turned
off will wonder if "asdf" is some unnamed and unreleased MS prototype
software:)  

You can find instructions for disabling this
[here](http://www.microsoft.com/technet/treeview/default.asp?url=/technet/prodtechnol/windowsserver2003/proddocs/standard/RRC_howto_configure_SET_local.asp),
and if you don't have Group Policy Manager as a default in your
Administrative Tools (I didn't), you can add this by:

  - Clicking start\>\>run...
  - type "*mmc.exe*"
  - Select file\>\>Add/Remove Snap In...
  - Click Add...
  - Select Group Policy
  - Click Add
  - Click Close
  - Click OK
  - Then just follow the
    [directions](http://www.microsoft.com/technet/treeview/default.asp?url=/technet/prodtechnol/windowsserver2003/proddocs/standard/RRC_howto_configure_SET_local.asp)

</div>

</div>
