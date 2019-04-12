<div id="page">

# Visual Studio 2005 Express October Community Tech Preview now available

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
10/18/2004 7:30:00 PM

-----

<div id="content">

The October Community Tech Previews for Express are now up on [MSDN for
download](http://lab.msdn.microsoft.com/vs2005/downloads/default.aspx).
Before you do anything, read the
[readme](http://lab.msdn.microsoft.com/express/readme/cptreadme1004/default.aspx) and
remember that Community Tech Previews are **\*not\*, \*not\*,
\*not\*** high quality builds and will probably be in worse
condition then Express Beta 1. Lots of things won't work, and we've
also added some new stuff including: 

  - [Edit and
    Continue](http://msdn.microsoft.com/vcsharp/default.aspx?pull=/library/en-us/dnvs05/html/edit_continue.asp) for
    C\# Express. You'll have to do some workarounds to get this working
    (see below)
  - [ClickOnce
    deployment](http://msdn.microsoft.com/msdnmag/issues/04/05/clickonce/default.aspx) for
    all Express products, but be warned that it doesn't work in this
    build :)

I'll blog more about the changes tomorrow, in the meantime spin up a
differencing image on your VPC and take the CTP for a whirl. As always
[tell us what you think](http://msdn.microsoft.com/productfeedback/).

Below is the snippet on C\# Express from the [CTP
readme](http://lab.msdn.microsoft.com/express/readme/cptreadme1004/default.aspx):

***C\# Express  ***

***"Edit and Continue" is now available in C\# with the following known
issues:***

  - *Making an edit that results in no change (i.e. inside a \#ifdef'd
    out region) can cause the IDE to crash.*
  - *The Instruction Pointer (yellow arrow) can in some cases be placed
    incorrectly after stepping when an exception has been thrown.*

***Issue:** If you are working with code built from the Windows Forms
Template (and a few others), you may not be able to do EnC at all.*

***Workaround:***

<div class="Section1">

> *<span style="FONT-SIZE: 10pt; FONT-FAMILY: Verdana">Remove the "=
> null" initializer of the components field in the .designer.cs file as
> follows</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Verdana">:</span>*
> 
> *<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Verdana&#39;">private</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Verdana&#39;">
> System.ComponentModel.<span style="COLOR: teal">IContainer</span>
> components = <span style="COLOR: blue">null</span>;</span>*
> 
> *<span style="FONT-SIZE: 10pt; FONT-FAMILY: Verdana">should become:
> </span><span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Verdana&#39;">private</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Verdana&#39;">
> System.ComponentModel.<span style="COLOR: teal">IContainer</span>
> components;</span>*

</div>

***New Start Page:*** *It is not enabled by default in this build. See
known issues for a work-around.  
**ClickOnce is added to the Express SKUs:** However, it does not work in
this build.  
**New Community Menu:** A few new features around community
interaction.  
**New Local Data Wizards:** Try connecting to your SQL Server Express
database files using the new wizard.  
**Fewer Refactorings:** To simplify the C\# Express user experience, a
few of the refactorings have been removed.  
**Start page doesn't show correctly:**To see the new start page use
Tools -\> Options. Then "Show All Settings". Then Environment -\>
Startup. And set "At startup: " to "Show Start Page".  
**ScreenSaver Starter Kit won't load.***

</div>

</div>
