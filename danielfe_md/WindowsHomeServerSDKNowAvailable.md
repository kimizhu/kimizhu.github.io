<div id="page">

# Windows Home Server SDK Now Available

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
4/6/2007 1:02:23 PM

-----

<div id="content">

[Charlie and
team](http://blogs.technet.com/homeserver/archive/2007/04/03/developers-developers-developers.aspx)
just announced the availability of the Windows Home Server SDK
[available
here.](http://msdn2.microsoft.com/en-us/library/aa306570.aspx) Here's a
quick snippet from the announcement post.

> *But, the reality is, 99% of what developers want to build on top of
> Windows Home Server will be done using the rest of the* [*MSDN
> documentation*](http://msdn.microsoft.com/)*. Our little set of APIs
> let you integrate your Add-in into the Home Server Console and
> interact with some of the elements behind the solutions we provide.
> But all the interesting work that great* [*Windows Home Server
> Add-ins*](http://msdn2.microsoft.com/en-us/library/bb400728.aspx)
> *will do will be done using the standard "Windows API".*

 

Since Windows Home Server is built on Windows and IIS, you get that
platform goodness "for free" if you will. The cool thing about their API
is that it **integrates into the Home Server Console** and that it's
super easy.

 

  - [Setup](http://msdn2.microsoft.com/en-us/library/bb425852.aspx):
    Reference the HomeServerExt.dll in a class library
  - Implement the
    [Console](http://msdn2.microsoft.com/en-us/library/microsoft.homeserver.extensibility.iconsoletab.aspx)
    and
    [Settings](http://msdn2.microsoft.com/en-us/library/microsoft.homeserver.extensibility.isettingstab.aspx) interfaces
    (using VB, C\#, C++)
  - [Deploy](http://msdn2.microsoft.com/en-us/library/bb425854.aspx)

 

I love it when extensbility is as easy as implementing an interface :)

</div>

</div>
