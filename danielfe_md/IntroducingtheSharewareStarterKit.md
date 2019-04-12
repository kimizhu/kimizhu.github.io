<div id="page">

# Introducing the Shareware Starter Kit

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
7/10/2005 5:58:00 PM

-----

<div id="content">

I'm way, way late on this, but
w<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">e have officially
released the Shareware Starter Kit on Channel9\!\!</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Download: ([C\#
download](https://channel9.msdn.com/pdc/contest/SSKCSharp.exe), [VB
download](https://channel9.msdn.com/pdc/contest/SSKVB.exe)). </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The Shareware Starter
Kit is a sample application of the common features in all shareware
applications. You can easily modify, extend and integrate these into
your own applications. The Channel9 guys even have a contest where you
can write code to use the Shareware Starter Kit and [code your way to a
free ticket to the
PDC](https://channel9.msdn.com/ShowPost.aspx?PostID=74805).<span style="mso-spacerun: yes"> 
</span>[Michael Lehman](http://blogs.msdn.com/mglehman/) also has a
[video walkthrough of the Shareware Starter
Kit](https://channel9.msdn.com/ShowPost.aspx?PostID=74998).<span style="mso-spacerun: yes"> 
</span>After installing the application, make sure to read the SSK
Developer Documentation for a full overview of everything it can
do.<span style="mso-spacerun: yes">  </span>Both Michael, Jed Rose, and
I will be at the [Shareware Industry Conference](http://www.sic.org/) in
Denver, Colorado later this week (ping me if you’re interested in a nerd
dinner).</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**Key
Features**</span>

**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Multi-Threaded
Splash Screen  
</span>**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">A sample
Windows Form that shows how you can use a timer control to create a
beautiful fade-in/fade-out effect. </span>

![](http://www.danfernandez.com/view/view.aspx?ID=142)

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial"></span>

**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Integrated
E-Commerce </span>**

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">This feature makes
purchasing a licensed copy of your software just a click away by
integrating [PayPal’s](http://www.paypal.com/) payment services directly
into the client application using Web services.</span>

![](http://www.danfernandez.com/view/view.aspx?ID=143)

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Product Activation
</span>**

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Many shareware
applications enable to try-before-you-buy, and this feature enables
developers to control how you want to configure your application trial
period. For example, you can explicitly state that your application can
only be used for 30 days before activating the
product.<span style="mso-spacerun: yes">  </span>While it’s not a bullet
proof mechanism, the built-in version provides a sample of how you can
configure product activation. </span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Product Registration
</span>**

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">This form makes it
dirt simple to enable product registration directly in the product using
Web services. Everyone wants to know more information about their
customers, heck Visual Studio 2005 is the first version of Visual Studio
with in-product registration
capabilities.<span style="mso-spacerun: yes">  </span></span>

![](http://www.danfernandez.com/view/view.aspx?ID=144)

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Product Feedback
</span>**

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Do you want to know
what your customers think about your application? Why not add the
ability to send feedback directly in the product? This feature enables
them to do just that using Web services.</span>

![](http://www.danfernandez.com/view/view.aspx?ID=145)

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">Exception Handling
Reporting</span>**

<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial">You’ve probably had a
Windows application hang on you, where you get a “Send Error Report”
message.<span style="mso-spacerun: yes">  </span>That feature is known
as Watson, and the error information is sent to Microsoft where if you
have a certificate from Verisign, you can actually pull the dumps for
your application. The version in the Shareware Starter Kit is the
“poor-man’s Watson”, and it captures information about the thrown
exception and records it in a database. That way you can report on your
application crashes by date, exception type, version, operating system,
all using Web services. </span>

![](http://www.danfernandez.com/view/view.aspx?ID=146)

**<span style="FONT-SIZE: 11pt; FONT-FAMILY: Arial"></span>**

 

You can access all the features directly from the included Sample
Application Toolstrip as shown
below:![](http://www.danfernandez.com/view/view.aspx?ID=147)

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Walkthrough: An
unhandled exception is thrown</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">To show you all the
bits and pieces here’s a simplified walkthrough of how the kit works:
</span>

1.  <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Your exception
    information is forwarded to the **ExceptionForm** Form. </span>
2.  <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Information about
    the exception is loaded into the ExceptionForm textboxes. </span>
3.  <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The
    **ExceptionForm** loads up a **DataStore** class which loads your
    application settings from a file “DataStore.dat” in isolated storage
    to validate if payment information has been received.</span>
4.  <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">When the user
    clicks “Submit” a new **ExceptionInfo** class is created and
    populated with information about the exception.</span>
5.  <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The
    **ExceptionInfo** class is then sent to the **ServerProcessing**
    class which handles calling all of the Web services. The
    **ServerProcessing** class inspects the incoming type is an
    **ExceptionInfo** type, and if so, calls the **SubmitException** Web
    service.</span>
6.  <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The
    SubmitException WebMethod is a Web Method in the SharewareService
    WebService class. Below is the declaration of the class, note the
    Basic Profile compliance attribute for
interoperability.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>\[<span style="COLOR: teal">WebService</span>(Namespace =
<span style="COLOR: maroon">"http://tempuri.org/"</span>)\]</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>\[<span style="COLOR: teal">WebServiceBinding</span>(ConformsTo =
<span style="COLOR: teal">WsiProfiles</span>.BasicProfile1\_1)\]</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span><span style="COLOR: blue">public</span>
<span style="COLOR: blue">class</span>
<span style="COLOR: teal">SharewareService</span> :
System.Web.Services.<span style="COLOR: teal">WebService</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>{...}</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

7.  <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The
    SubmitException Web Service validates the input and checks for SQL
    injection, then calls the DB classes **SubmitException** method that
    uses a DAL to call the **SubmitException** stored procedure in the
    SSK Database, which in turn adds the data to the **SSK\_Exception**
    table. Below is a list of the database tables and stored procedures
    in the SSK database.</span>

**Database Tables  
**![](http://www.danfernandez.com/view/view.aspx?ID=148)

**Database Stored Procedures  
**![](http://www.danfernandez.com/view/view.aspx?ID=149)

Here’s a view of the architecture (pics from the included documentation)
showing both the client and server architecture.

**Client Architecture**

![](http://www.danfernandez.com/view/view.aspx?ID=150)

**** 

**Server Architecture**

![](http://www.danfernandez.com/view/view.aspx?ID=151)

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">We Want Your
Feedback  
</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Send us your
feedback\! The Shareware Starter Kit is in beta and we want your
feedback and comments on the feature design, new features and anything
in-between. We are currently also working on a fully unmanaged (at least
from the client side) C++ version of the Shareware Starter Kit and an
Avalon/Indigo version of the kit. </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

Special thanks to [Personify Design](http://www.personifydesign.com) who
did the design and development of the kit and
[Foundstone](http://www.foundstone.com) for the security review.

 

</div>

</div>
