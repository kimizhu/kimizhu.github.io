<div id="page">

# SQL Server Express 2008: Now in two flavors

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/10/2008 4:27:55 PM

-----

<div id="content">

As I [blogged about on Channel 9
earlier](https://channel9.msdn.com/posts/Dan/SQL-Server-2008-RC0-now-available-for-download/)
(I love that we can have text \*and\* video posts now), SQL Server 2008
RC0 is now [available for
download](http://www.microsoft.com/downloads/details.aspx?FamilyId=35F53843-03F7-4ED5-8142-24A4C024CA05&displaylang=en).

On the download page, you may have noticed that there are two versions
of SQL Server Express

1.  SQL Server 2008 Express
2.  SQL Server 2008 Express with Advanced Services

While the [SQL Server 2008 Editions
page](http://www.microsoft.com/sqlserver/2008/en/us/editions.aspx)
doesn't list the "Advanced Services" Express Edition, luckily Mike
Wachal from the SQL Server Express team posted a detailed breakdown of
the differences on the [SQL Server Express
blog](http://blogs.msdn.com/sqlexpress/archive/2008/06/10/sql-server-2008-express-rc0.aspx).

The key features that are in Advanced Services that you won't get with
regular Express are:

  - PowerShell integration by default
  - Synchronization Services installed by default

As well as a number of Reporting Services features

  - Ability to increase Reporting Services Memory Limit
  - Reporting Services Word/Rich Text Export
  - IIS Agnostic Report Deployment
  - Enhanced Gauges and Charting

It also appears that the regular SQL Server Express also supports
installing the 32-bit version on a x64 platform (using
[WoW](http://en.wikipedia.org/wiki/Windows_on_Windows)), but as both
Express versions including 32-bit and 64-bit native installations, I'm
not sure why you would want to install the 32-bit version on x64.

 

**What hasn't changed**

The physical limitations for SQL Server haven't changed between 2005 and
2008 (1 CPU, 1GB Memory, 4GB of user data per database), but the nice
thing is that SQL Server Express will take advantage of multiple cores
on a single CPU.

</div>

</div>
