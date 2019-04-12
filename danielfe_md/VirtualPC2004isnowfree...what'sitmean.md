<div id="page">

# Virtual PC 2004 is now free...what's it mean?

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
7/12/2006 3:05:00 PM

-----

<div id="content">

The Virtual PC team today announced that Virtual PC will now be
free\!

[Download](http://www.microsoft.com/downloads/details.aspx?FamilyId=6D58729D-DFA8-40BF-AFAF-20BCB7F01CD1&displaylang=en)  
Source:
[Digg](http://www.digg.com/software/Virtual_PC_2004_is_now_FREE) 

For those who don't know, Virtual PC is a software product that allows
you to run another operating system (Windows XP, Linux, or even Windows
3.1) "virtually" from inside a single computer. You'll see that PC load
in a window and act as if it was a virtual PC ([more info
here](http://www.microsoft.com/windows/virtualpc/evaluation/overview2004.mspx)).
I'm a big VPC fan and I think this is great to hear.  In fact, our
developer division fully embraces Virtual PCs, so much so that the
Community Tech Previews for Visual Studio "Orcas" will come as VPCs and,
as an MSDN subscriber, you can download a VPC with Windows, SQL Server
2005 and Visual Studio 2005 Team System fully installed.

**PC's Five Year's from now  
**I'm always surprised that virtualization doesn't make IT news anymore
as one of the big things that will change the landscape in the future.
In less then five years, Intel is aiming for a [32 core processor
chip](http://www.tgdaily.com/2006/07/10/intel_32_core_processor/) runing
at 20GHz.  I also don't think it's a stretch to think you'll
have [multiple terabyte hard
drives](http://www.computerworld.com/action/article.do?command=viewArticleBasic&articleId=9001582&source=rss_news50)
in five years.  If you combine the PC power in five years with advances
in Virtual PC, you can start imagining running your day-to-day work
environment, from Office to Visual Studio, in a Virtual PC. 

  - **Backups** - Backing up a Virtual PC is as easy as copying the
    file. No really, that's it, copy/paste and you're done.
  - **Deployment** - Want to setup and configure your 10,000 employee
    shop? Just script each PC to download the approved company image and
    voila, your done. If somebody hoses their PC up, they can get
    up-to-speed in a matter of minutes by downloading the base image
  - **Experimentation **- Want to experiment with new features, just
    take your current VPC and create a differencing drive and go to town
    on it. The changes are only stored in the new drive and your "base"
    drive doesn't change.
  - **Compatibility Testing** - Want to easily test Windows XP Japanese
    with SQL Server 2005 English and Visual Studio 2005 Japanese? Easy,
    create a script to install the different permutations on a virtual
    PC or virtual server

**Simplifying A Server Farm  
**For Virtual Server, you could imagine having a hefty 8proc PC (with 32
cores each) hosting an entire server farm and assuming they can include
fault tolerance, If a server goes down, one could be automatically
brought back up to replace it.  

**Simplifying Product Evaluation  
**Second, if I'm a company selling a complex client or server product,
let's say [Cognos for BI](http://www.cognos.com/analytics-software.html)
or BizTalk for process integration and I want my customers to
try/evaluate my product, the current way to do this would be: 

  - The customer would have to sit through and try to install and
    configure everything themselves including samples, connections,
    security, and other considerations rather then actually evaluating
    the product.

Alternatively, you could imagine a world where vendors could package
a Virtual PC as trialware that would include: 

  - A complete and ready-to-use system pre-configured and tested with
    videos, samples, tutorials, security, and everything an evaluating
    customer would want to more easily learn and understand the
    companies product.

The arguments against this would be

  - large file size - You could fix this by using differencing drives
  - OS required - Microsoft could fix this by creating a Windows Vista
    OS that could have a built-in expiration date. Heck, if the server
    vendors want it, maybe we could license them to use the trial
    version. Assuming server vendors end up with higher sales because of
    this, it would financially make sense for them
  - no setup/configuration evaluation - Being given a virtual PC with
    all the problems solved may scare IT folks in that they won't know
    the pain or intricate details involved in software setup and
    configuration.
  - Doesn't work in my business - You could imagine a wonderfully
    working Virtual PC with great built-in demos, but the deployment in
    a companies data center could go radically different. Maybe this
    could be fixed by just having a vendor-provided server image.
  - Security - What, if any, are the security implications, especially
    if you're talking about running a vendor-created virtual PC in your
    datacenter. That may not fly, but, alternatively if you do have an
    official, secure Server image, the vendor can easily take that and
    have their consultants optimize and configure their software on that
    image.

If nothing else, I think the combination of powerful PCs in five years,
and the availability of free, easy-to-use virtualization has the
opportunity to radically change business as usual.  If nothing else, I'm
hoping it minimizes the time end users and IT Administrators would have
to setup and configure PCs. With lots of processing power in the future
to remove any performance issues, having a virtual machine one click
away is certainly a better experience than having a dual-boot solution.

The plot thickens...

 

</div>

</div>
