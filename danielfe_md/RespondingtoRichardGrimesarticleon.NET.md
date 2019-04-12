<div id="page">

# Responding to Richard Grimes article on .NET

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/22/2005 2:06:00 PM

-----

<div id="content">

**Edit \#1** - Based on feedback, fixed grammatical errors...

I recently ran across an article written by Richard Grimes in Dr. Dobbs
Journal titled [Mr. Grimes
farewell](http://www.ddj.com/documents/s=9211/ddj050201dnn/). I wanted
to respond to some of Richard's assertions and points in the article.
You should take Richard's article with a grain of salt as he does
clearly state that the article is "his opinion". That being said,
Richard's article is supposed to be his view of the current state of
.NET, but rather than discuss how far we've come and where we're going,
he instead argues three points - the .NET Framework is too large
blocking adoption, issues with the design of the .NET Framework,
and over half the article bashing Visual Basic, and finally that
Microsoft is "losing confidence" in the .NET Framework. His
quotes, *italicized in gray*, and my responses are below.

**On the size of the .NET Framework blocking adoption**

  - *RG:The framework redistributable is 25 MB, which is many times
    larger than the Java redistributable. One of the lessons of the
    early versions of Visual Basic was that the shareware and freeware
    market created the popularity of the language. While there are some
    shareware apps written in .NET, I often hear people complain about
    the huge redistributable.*

**My Response**: Maybe I'm being too picky, but the size is 23,698K or
23.7MB. While Java's runtime is smaller, it still weighs in at 15MB.
Throughout the article, Richard refers to .NET applications when he's
really referring to client or public client (meaning not in the
firewall) For example, installing the .NET Framework on a server or
within an intranet where you can control the environment certainly isn't
an issue. Even for public client machines, there's plenty of commercial
shareware from games to RSS readers that require the .NET Framework.
I've also talked to plenty of shareware developers and they certainly
aren't using Java. Many use C/C++, Visual Basic, or Delphi. As far as
adoption "and the state of .NET",  which the article is supposed to be
about is best summarized by Soma, the Developer Division Vice President
in [his post on .NET
Momentum](http://blogs.msdn.com/somasegar/archive/2004/06/03/148131.aspx).

*Soma: We have seen over 70 million downloads of the .NET framework from
Windows Update and the Microsoft Download center to date.  For a simple
guy like me, that translates to about 5.5 million downloads a month. 
Another interesting datapoint is that in 2004, we expect to have about
54 million new PCs shipping with the .NET framework
installed/preloaded.  We also have over 2.5M developers targeting
managed code.* 

**On the Design of the .NET Framework**

  - *RG: Almost the first thing I posted on the technical preview
    newsgroups was a simple console application in Cool, and its
    equivalent in Java with the rhetoric question to spot the
    difference.*
  - *RG:* *There are classes that are mere wrappers around Win32, but
    there are other classes that appear to be ported from other
    frameworks. Before it released .NET, Microsoft had its own Java
    framework library called WFC, and it also had a managed library as
    part of the Visual Basic (classic) runtime. It would be nice to know
    how many classes from WFC and VB were ported to .NET.*

**My Response**: These two points contradict each other. In the first he
implies that the .NET Framework is a replica of Java, but in the next
statement he claims that the .NET Framework is simply ported Win32
classes, Windows Foundation Classes (WFC), and VB runtime classes. Which
one is it? If his point is that you can write a simple application and
that it will look the same in C\# and Java or C++, I don't think that
really proves much. Below is an example of a for
loop.   
<span style="FONT-SIZE: 9pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">  
for</span>**<span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
(</span>**<span style="FONT-SIZE: 9pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">int</span>**<span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
i = 0; i \< x; i++)
</span><span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">{...</span><span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">}</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

Guess what language it's written in? If you said either C, C++, C\#, and
Java, then you are correct. I don't see what he's trying to prove here.
If he tries to build a more robust application then "Hello World" you're
going to run into framework or library specific features (ATL is not,
MFC is not EJB, etc).

**On Interface-based Programming and Remoting**

  - *RG: Interfaces are elegant but .NET's preference for class-based
    solutions has marked the death of interfaces. Look at .NET remoting:
    This has been provided to allow an object to run in the context
    where it was created, and be accessed from another context. This
    means that the object state is kept local, and it is the behavior
    that is remoted. Thus, remoting is an interface-based facility. You
    can use .NET remoting with interfaces, but reading through the
    documentation and all of the “how-tos” on the Web, you wouldn't
    realize this.*

Point \#1 - Interfaces are dead

  - **My Response**: Interfaces are used everywhere in the .NET
    Framework and are especially valuable given single inheritance in
    languages like VB and C\#. Even the simple string class has
    IComparable, ICloneable, IConvertible, and IEnumerable interfaces.
    Going forward, one of the key new features for the .NET Framework
    2.0, generics, uses interfaces for constraining data types.

Point \#2 - Lack of documentation on using interfaces with .NET Remoting

  -  **My Response**: I am by no means saying that our documentation is
    flawless, but here's a link to the [.NET Framework SDK Samples on
    Remoting](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpqstart/html/cpsmpnetsamples-howtoremoting.asp).
    Notice the fifth sample down is using [Interfaces with
    remoting](http://msdn.microsoft.com/library/en-us/cpqstart/html/cpsmpnetsamples-howtoremoting.asp?frame=true#cpsmpinterfacesample). I
    also outline our guidance on using interfaces for remoting below.   
  - *RG: .NET can use interfaces but the preferred way is to use
    classes.*
  - *RG: Instead, Microsoft prefers people to use a class-based
    approach, which often results in the bizarre situation of people
    deploying their server assembly to the client so that the client has
    the metadata of the service objects available, or a soapsuds
    assembly, which basically was a hack to get around the problems of
    having class-based remoting.*

**My Response**: We don't "prefer" any mechanism, per se. While we may
offer guidance, developers can choose to develop their applications as
they see fit. Our Patterns and Practices group does provide guidance and
best practices on these and other points and even includes guidelines on
[how to design a remote
interface](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnpag/html/ScaleNet-AtGlance.asp). I
don't see a class-based favoritism over interfaces, in fact, there has
been an increasing movement to use messages and service orientation
rather than object orientation. I concede his point on deploying server
assemblies to the client, but poor design is poor design. People
deploying a server assembly to a client just so that the metadata of the
service objects is available could have easily used an interface or
schema instead. That being said, there are some situations where you do
in fact want to have server code in each client, the example being a
peer-to-peer chat where each client acts as both a client and a server.

 

**On Microsoft using the .NET Framework for their applications**

  - *RG: Microsoft treats .NET as a useful library to extend its
    products, and to date, it has not shown any more conviction to the
    framework. There have been a few .NET products written entirely in
    .NET; one such product is Microsoft CRM....They do not want the
    expense of rewriting their existing code for .NET, and there is no
    compulsion to provide all new code in .NET; instead, .NET will be
    hosted as and when it's needed, particularly to allow extensibility
    through user-supplied code.*  **

**My Response**: We should dissect exactly what Richard says here. He
says that Microsoft is using .NET to extend existing products and that
Microsoft doesn't want the expense of rewriting applications from
scratch in .NET. This makes perfect sense to me, why would we re-write
perfectly good code? .NET code can interoperate with existing code, and
you bet we're going to take advantage of the interoperability layer to
add new features that exploit the best managed code has to offer.  As I
pointed out previously, [Microsoft is using .NET in all sorts of
software from operating systems, to developer tools, to
Office](http://blogs.msdn.com/danielfe/archive/2004/11/02/251254.aspx).

  - *RG: Microsoft's current operating systems, XP and Windows 2003, do
    not depend on .NET; and with XP, .NET is an optional component.*

**My Response**: This is a half-truth at best. While Windows XP
Professional does not use the .NET Framework, that's because the .NET
Framework was released after Windows XP Professional shipped. Let's look
at the operating systems that shipped after the .NET Framework was
released:

  - Windows XP Media Center edition **requires** the .NET Framework for
    MCE-specific applications.
  - Windows XP Professional Tablet PC Edition **requires** the .NET
    Framework for handwriting recognition which is a managed
    application.
  - Windows Server 2003 **requires** the .NET Framework to use ASP.NET,
    UDDI Services, or Sharepoint Team Services.
  - Windows Small Business Server 2003 **requires** the .NET Framework
    for ASP.NET as do SBS specific applications like Remote Web
    Workplace, and the Backup Snap-in.

**On Longhorn and the death of browser applications**

  - *RG: My opinion is that Avalon, or more specifically, XAML, will
    mark the death of ASP. The reason is that Avalon is a client-side
    technology, but the browser is an important part of the distribution
    model. XAML is so rich that a browser-contained XAML application
    will look no different to a process-based Avalon application, and
    coupled with Web Services or Indigo (as the mechanism to access
    remote code), an XAML application will make an ASP.NET application
    look paltry and antiquated. Why would Microsoft want to kill ASP?
    Well, with installation of ASP.NET Microsoft sells a single copy of
    Windows 2003 and perhaps a handful of copies of Visual Studio.NET.
    The clients don't have to be Windows, so there is no extra sale to
    Microsoft (whether as a product or licence). This is hardly a great
    revenue generator, and worse, ASP.NET actually makes it easy to
    write the application so that it can be used by browsers other than
    IE.*

**My Response**: I respectfully disagree. XAML will allow for rich
interfaces, but ASP.NET and HTML are not going away. Our value is that
we can take the best of both worlds, and provide an optimized
experience to XAML browsers while still maintaining compatibility with
old computers. It should also be noted that there is a difference
between client applications and server applications. The server market
itself is \*totally different\* then the client/consumer market. While
people talk about Microsoft's dominance in client operating systems at
around 90%, we are nowhere near that number in the server market. We're
competing against products and companies like IBM WebSphere, hundreds of
middleware products, Oracle in the database market, etc. If we want to
win the server market, we need to have the fastest, most reliable, most
secure, most productive and affordable solution for creating Web
applications. To say that browser applications are a threat to Microsoft
is so....1996. **The threat is not the Web**. If it was,
wouldn't Microsoft have "lost" already given that the Web is already
incredibly successful and popular. How much more popular does the Web
have to be before this is proven untrue? Richard then goes on to say
that Microsoft needs to do this because of client revenue. The
client operating system market, as stated above \~90% is pretty
saturated. The server market is where the opportunity for revenue growth
truly lies (PS the server and tool business [grew 18% last quarter\! -
see
slide 9](http://www.microsoft.com/msft/download/FY05/MSFTQ2-05.ppt)). On
the question of revenue, a typical server deal is in the thousands of
dollars as you're paying for several parts including:

  - Operating Systems
  - Transaction Engine
  - Middleware
  - Database

Depending on the complexity of the solution, this can range from
thousands of dollars to several million dollars. Server products are
expensive. If you look at the market for Web content-management
solutions, the average price can be around $50,000 for a one-proc
enterprise license. My point being that there are plenty of revenue
opportunities and competitive threats from the likes of IBM and
others in the server market. Do you know how large the market for
database software is in terms of revenue? Would you agree that it's
billions of dollars? Do you know that Oracle is the \#2 software company
and their primary revenue is from databases? That's just \*one\* of the
market opportunities for server software. Back to my point - We
are totally committed to our server products and to making Windows
Server and ASP.NET the best platform for creating Web applications.
Period.

**On Longhorn**

  - *RG: I take the decision to make Avalon available to other versions
    of Windows as a lack of confidence in the sales of Longhorn.*
  - *RG: However, Microsoft's announcement that Avalon will be available
    for other versions of Windows indicates to me that they are not so
    confident on the uptake of Longhorn, and developers will not write
    applications for Avalon if they are not convinced that there will be
    the clients that will run it.*

**My Response:** The decision to make Avalon available to other versions
of Windows was driven by one thing, customer demand. Any rudimentary Web
search turns up results of customers complaining about not being able to
have this functionality on down-level operating systems.

**On using the .NET Framework for shipping products**

  - *RG: So, with the announcements they have made last year, Microsoft
    has indicated that Longhorn will not be the great .NET innovation
    that we were lead to believe it was from PDC 2003. This indicates to
    me that Microsoft is losing confidence in .NET. *

**My Response:** Richard, the key parts of Longhorn you've mentioned in
your article, **Avalon and Indigo, are written in managed code**. How
does that indicate we are losing confidence in .NET when we've decided
to bet the success of our next operating system on the .NET Framework?
You might then make the follow up argument that because the entire
operating system isn't managed, that we have "lost confidence". While
that's your opinion, I don't think managed code is right for every
scenario and Microsoft has never claimed that it is. Microsoft still
fully supports C/C++ and we have a very large existing C/C++ code base
and C++ customer constiuency. We'll use managed code where it makes
sense.

  - *RG: The framework has become Visual Basic—it's intended for users
    to develop applications, but not for Microsoft to create operating
    systems or the revenue generating products that they base their
    profits on.*

**My Response**: I'll avoid responding to the VB bashing as someone is
already working on that. There are two points here, one is using
the .NET Framework for creating operating systems, the
other on Microsoft revenue. On creating operating systems using
the .NET Framework, I don't think we've \*ever\* said that you should
be creating an operating system from scratch based solely on managed
code. The truth is, gasp, the vast majority of our customers are not
creating operating systems.  For those customers who are or who need
that level of control and performance, we have C/C++ and we absolutely
have not abandoned that. On revenue generating profits, I've already
listed several [revenue generating applications using the .NET
Framework](http://blogs.msdn.com/danielfe/archive/2004/11/02/251254.aspx).
Microsoft is divided into the seven business groups listed below and
let's see which ones are using managed code. 

  - Client - Check
  - Information Worker - Check
  - Server & Tools - Check
  - Home and Entertainment - Check
  - MSN - Check
  - MBS - Check
  - Mobile and Embedded Devices - Check

I hope this clears up and FUD, half-truths and any misconceptions on
managed code. If something is incorrect here, please let me know\!

 

 

</div>

</div>
