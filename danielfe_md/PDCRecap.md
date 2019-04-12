<div id="page">

# PDC Recap

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
11/10/2008 8:54:25 PM

-----

<div id="content">

With PDC just about a week over, it's about time I finally got around to
blogging about it. Here's the random list

 

**Windows Azure**: Ray Ozzie launched Windows Azure and Microsoft's
Cloud Strategy (video here). Charles on Channel 9 did a bunch of videos
on our Cloud services. If you want a no nonsense explanation of Windows
Azure, check out the interview with Manuvir.

 

  
[Manuvir Das: Introducing Windows
Azure](https://channel9.msdn.com/posts/Charles/Manuvir-Das-Introducing-Windows-Azure/)  

For a great recap on the Windows Azure, check out [Dare Obasanjo's
blog](http://www.25hoursaday.com/weblog/2008/11/03/WindowsAzureFromADevelopersPerspective.aspx).

 

**Windows Azure**

Azure is that for developers building public-facing Web sites, this is a
no-brainer, assuming they get the monetization story right.

 

**Cloud-in-a-Box?**

That being said, a number of enterprise customers that I spoke with at
the conference said that the primary workloads they're doing are within
the firewall and hosting data/computation outside of that is a
non-starter. This is especially true with customers with sensitive data
(government, financial vertical, biotech,etc). While I have zero
knowledge of what the teams are actually working on (read: I know
nothing), if Microsoft can either release software or partner with
HP/Dell/etc, having a Microsoft Cloud appliance or Cloud software
license would definitely be a big hit for that segment of customers.
This isn't too far fetched as you're seeing teams discuss providing
mutliple tiers of service where you can either pay for software as a
service (Exchange Online, SQL Server Data Services) or host them
yourself (buy a product license and run it yourself).

 

**Language Parity**

The other interesting aspect in looking at the PDC announcements is the
difference in strategy amoungst VB and C\#. Instead of having each
language be good at certain scenarios (VB for Office interop for
example), since the language teams have merged and the goal is to have
feature parity. This is interesting in that many of the new features for
VB were features that already existed in C\# (collection initializers,
auto-properties, etc) and the reverse is also true (C\# gets VB features
like optional parameters, named parameters, etc).

 

**Service Bus**

While Dare jokingly referred to this as "boring enterprise stuff", the
killer feature for me is that Service Bus enables Point A to talk to
Point B easily even if both clients are behind firewalls (NAT firewall
traversal). One of the chapters in our upcoming Coding4Fun book is
PeerCast which lets you stream video from one PC to another PC using
PNRP. The problem with PNRP is that in many cases it won't work because
you can't see the [global seed cloud or your router doesn't support
it](http://blogs.msdn.com/p2p/archive/2007/07/24/pnrp-debugging-guide-part-1.aspx)
amongst other troubleshooting issues. If Service Bus "just works" and it
has both low-level and high-level APIs to exchange data between peers,
then it's definitely going to be of use to Windows developer.

 

**BI in the Cloud is coming**

While not currently available, SSDS is going to add business
intelligence (analysis services, reporting, data mining) to the cloud
and that is going to be a killer feature. If you like Google Analytics,
imagine having Google Analytics on steroids for every piece of data your
company captures. I'm definitely looking forward to this given that it's
very difficult to find a hoster that provides BI solutions from \*any\*
vendor today. It will be interesting to see how Sun (MySQL), IBM (DB2)
and Oracle respond to this.

 

**"Pure Evil" = Win**

[Brian Keller](http://blogs.msdn.com/briankel) and I got called out as
"pure evil" by [Scott Hanselman](http://hanselman.com/blog) in his
excellent [.NET Framework 4.0 Overview session at
PDC](https://channel9.msdn.com/pdc2008/TL49/) for our now infamous prank
on [This Week on
Channel 9](https://channel9.msdn.com/shows/This+Week+On+Channel+9/)
where we asked our viewers to vote up adding MMO features to
[BabySmash\!](http://www.babysmash.com) (who doesn't want baby vs
baby).

![scottdanbrian](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PDCRecap_E40E/scottdanbrian_3.png)

 

**Massive video backlog**

The great thing about PDC is that all of the [videos are available
online](https://channel9.msdn.com/pdc2008/) (streaming + download) from.
This of course means that I have a massive backlog of video content to
watch.

 

**Our C4F Session: Coding4Fun: Windows Presentation Foundation
Animation, YouTube, iTunes, Twitter, and Nintendo's Wiimote**

You can watch our [Coding4Fun session
online](https://channel9.msdn.com/pdc2008/TL39/) with with [Clint
Rutkas](http://www.betterthaneveryone.com), [Brian
Peek](http://www.brianpeek.com), and [Scott
Hanselman](http://www.hanselman.com/blog) here. I have the [C\# version
of InnerTube](http://www.codeplex.com/innertube) up and I'll have the VB
version up soon too.

 

**The People**

One of the best parts about going to PDC is getting to see old friends
or people I've only met through email/forums/twitter in person.
Shout-outs to everyone who stopped by the Channel 9 & Coding4Fun Lounge.

 

**Codeplex Meetup @ PDC**

Speaking of people, Sara Ford hosted a Codeplex meetup at PDC that I
think we'll be posting the video

 

**PDC 2009**

Mark your calendars, PDC 2009 is coming back to Los Angeles Nov
17-20th\!

</div>

</div>
