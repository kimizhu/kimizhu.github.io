<div id="page">

# TestDriven.NET and Express - Technical Information

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/1/2007 6:20:00 PM

-----

<div id="content">

I quickly wanted to respond to questions or misconceptions raised in the
[comments of my previous
blog post](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx).

A common question or misconception in the comments is saying that if
didn’t want extensibility we *should have* provided technical
limitations to prevent extensibility (see comments: 
[1](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027136),
[2](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027255),
[3](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027442),
[4](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027502),
[5](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027527),
[6](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027714),
[7](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027802),
[8](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027820),
[9](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3027867),
[10](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3028173),
[11](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3028275),
[12](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3028349),
[13](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3028672),
[14](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3028750),
[15](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3029091),
[16](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3030062),
[17](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3030154),
and
[18](http://blogs.msdn.com/danielfe/archive/2007/05/31/visual-studio-express-and-testdriven-net.aspx#3030268)).

**Express Extension Workarounds**   
To respond, Visual Studio Express extensibility is limited in a number
of ways. One way it is limited is that it does not permit extensibility
through Macros, Add-Ins, or Packages. It attempts to reserve these
limitations by technical means. Some examples of these technical
limitations are that there is no Macros IDE, there is no Add-In manager,
and registered Add-In’s and Packages are not loaded at startup. The only
way to even extend Express is to work around these in-built technical
limitations and that is prohibited by the License.

For a high-level overview on how TestDriven.NET works around technical
limitations, here’s a response from our development team:

\*\*  
The TestDriven.NET product is implemented as a Visual Studio Add-In.  In
the Visual Studio Standard, Professional, and Team System SKUs,
TestDriven.NET is installed as an Add-In and gets loaded into the IDE
through the Add-In Manager.  In the Visual Studio Express SKUs, because
we disabled extensibility (macros, Add-ins, and VS Packages), the Add-In
Manager is removed and therefore Add-Ins are not detected or loaded. 
Jamie has created additional components specifically for the Express
SKUs to work around this technical limitation.  He takes advantage of an
extensibility point that allows user controls (such as a button class)
to customize entries in the Properties window. 
<span class="underline">When his property extender gets called, he
executes code that</span> <span class="underline">finds, loads and
injects the TestDriven.Net assembly into the Express SKU’s running
process</span>, thus replacing the functionality of the removed Add-In
Manager.  This explains why he instructs Visual Studio Express users to
open the Properties window in order to enable TestDriven.NET.  Once his
code is injected into the Express SKU’s running process it can add menu
items, enable features that were disabled, and in general take over that
instance of Express. These special loading mechanisms that Jamie has
built exclusively for the Express SKUs are unauthorized workarounds to
the SKUs’ technical limitations.  
\*\*

For an analogy, this would be comparable to someone working around the
technical limitations in the personal version of TestDriven.NET to
unlock features in the professional or enterprise versions for free.

What complicates this even further is that this isn’t a developer doing
this for his or her personal use or experimenting with our product, this
is a <span class="underline">business trying to sell a product</span>. 
We tried for close to two years to get Jamie to stop releasing the
Express version of TestDriven.NET without success.

I hope this helps clarify some of the questions or misconceptions
surrounding this issue.  

</div>

</div>
