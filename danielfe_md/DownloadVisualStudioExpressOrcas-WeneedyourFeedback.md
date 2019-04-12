<div id="page">

# Download Visual Studio Express Orcas - We need your Feedback

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
4/19/2007 4:23:19
PM

-----

<div id="content">

 

[![](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/DownloadVisualStudioExpressOrcasWeneedyo_BC2B/image%7B0%7D_thumb%5B1%5D.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/DownloadVisualStudioExpressOrcasWeneedyo_BC2B/image%7B0%7D%5B3%5D.png)

We just released a [Community Tech Preview
download](http://msdn.microsoft.com/vstudio/express/future/downloads/default.aspx)
of Visual Studio Orcas Express, the next version of Visual Studio
Express. Kudos to Doug for arguably the coolest beta page on MSDN ever
(pictured above)

 

**We need your feedback**

As John mentions in his post, the big things we need feedback on are the
[Windows Presentation Foundation (WPF)
designer](http://forums.microsoft.com/MSDN/ShowForum.aspx?ForumID=169&SiteID=1)
and the [DLINQ
designer](http://forums.microsoft.com/msdn/showforum.aspx?forumid=123&siteid=1). 
In addition we want feedback on meta questions

 

**Meta Question - Compatibility vs Features for Express**

Another big question I'd love feedback on is how we handle Express going
forward. Express is all about simplicity and the more decisions you
provide to users, the harder it is for them to understand what to do.

 

#### **Presentation Technology Choices**

For the CTP of VB and C\# Orcas Express, we chose the third option and
support both WPF and Windows Forms. By supporting both, it's caused our
download size to go up and the [paradox of
choice](http://en.wikipedia.org/wiki/Decision_theory#Paradox_of_choice)
makes Express more complicated than previously when there was only once
choice before. Our team has had a lot of debate and the options
available are:

  - **Support just Windows Forms **- Good: This keeps the size small and
    Windows Forms has great support for data and backwards
    compatibility. Bad is that WPF is much easier for building more
    attractive and interactive applications like games and people may
    think Express doesn't support the newest, coolest technology.
  - **Support just WPF** - Good: keeps the size small and since the 2005
    Express versions will continue to be on the Web for download, you
    can use Orcas for WPF and use 2005 for Windows Forms. Bad is that
    Windows Forms has a much more robust feature set for building form
    applications and better data support.
  - **Support both WPF and Windows Forms -** Good: makes everyone happy
    by providing the choice between features, Bad is that the size is
    larger and it can be confusing when to use which and what features
    are supported depending on what presentation technology you chose.

VWD Orcas has only one presentation technology so this isn't an issue
and C++ does not support WPF so the choices here are just for VB and
C\#.

 

#### **Data Technology Choices**

Similarly on the data side of VB and C\# Orcas Express, we chose the
third option

  - **Support just SQL Server Express** - Good: Existing apps can
    migrate forward and you get DLinq+Designer and ADO.NET support with
    SQL Server Express. Bad is that SQL Server Express is large (80MB)
    and needs to run as a service. SQL CE is specifically designed to be
    a great desktop database.
  - **Support just SQL Server Compact Edition** - Good: Tiny size,
    designed to be a desktop database, copy/paste deployment,
    access-like experience, ADO.NET Design support. Bad is that SQL CE
    does not work with DLinq+Designer.
  - **Support both SQL Server Express and SQL Compact Edition** -
    Good:makes everyone happy by providing the choice between features,
    bad is that the size is larger and the features supported depend on
    what database you use.

 

VWD Orcas has only one data technology choice, SQL Server Express, as
SQL CE is built and designed for desktop apps while the C++ Express team
has explicitly decided to only support SQL Server Express instead of SQL
CE.

 

#### **Questions for You**

1.  Which of the presentation/data choices would you have picked?
2.  Would you be okay if new versions of Express only supported new
    APIs, so long as there was an Express product also available for the
    previous APIs  (ex VB 2005 for Windows Forms instead of VB Orcas for
    Windows Forms)?
3.  Is it more important to support the latest and greatest API's like
    WPF and LINQ even though they may be more complex and not have as
    rich tools support than existing APIs like ADO.NET and Windows
    Forms?

</div>

</div>
