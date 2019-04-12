<div id="page">

# Why am I losing data when debugging SQL Server Express?

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
5/26/2006 5:44:00 PM

-----

<div id="content">

This question comes up frequently enough (exhibit
[A](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=420322&SiteID=1)),
 that I thought I should blog about it to help raise the Google-juice
and add some self-help to confused customers.

**Answer:**  
When you add a local SQL Server Express database to a Visual Studio
Express project, VS will by default set the "Copy to Output Directory"
property for your SQL Server Express database equal to "Always".

**Scenario that appears broken to users**

  - Run app
  - Make changes to data
  - Save Data changes
  - Close app
  - Run app again
  - All data changes are lost

**How to fix it  
**Luckily, this is a pretty easy fix, simply open your favorite copy of
Visual Studio Express, in the solution explorer, select your database,
and change the "Copy to Output Directory" to something like "Copy if
newer". Screenshot below 

![](http://www.danfernandez.com/view/view.aspx?ID=184)

We're considering changing the default for this in the future, what do
you all think? Will changing the default confuse things more?  Should
this be a (wizard) option when creating the database?

</div>

</div>
