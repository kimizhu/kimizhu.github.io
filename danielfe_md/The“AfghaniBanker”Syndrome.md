<div id="page">

# The “Afghani Banker” Syndrome

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/7/2006 3:36:00 PM

-----

<div id="content">

It’s about time I added a contribution to the blogosphere lexicon so you
too can seem [l33t](http://en.wikipedia.org/wiki/Leet) at the next
blogger meet up and deride your fellow attendees who haven’t heard of
the “Afghani Banker” syndrome as being too “analog”. Best of all, the
Afghani Banker syndrome is based on actual data, something I’m not sure
most buzzwords can claim (Web 2.0 anyone?).

 

**The “Afghani Banker” Syndrome** **Defined**

The “Afghani Banker” Syndrome describes the occurrence when customers
are forced to complete a registration form before they gain access to
otherwise restricted products or services. The name is coined based on
customers tendency to choose from the first couple of choices
alphabetically from a list of options as in choosing the first country
in a country drop down list would pick “Afghanistan” and the second job
in a job drop down list would pick “Banker”.

  - 
    
    <div>
    
    Occasionally referred to as the “90210 syndrome” for the unusually
    high occurrence of the zip code based on the 1990’s television
    series.
    
    </div>

  - 
    
    <div>
    
    Occasionally referred to as the “Afghani deviation” where it is used
    as a means to measure the margin of error, for example if 2% of
    people answered Afghanistan, you can assume a +/- 2% margin of
    error.
    
    </div>

 

**Etymology**

When Visual Studio 2005 Express Edition first launched in November 2004,
we had 100,000 registrations the first week. That was huge and there was
quite a bit of excitement around the announcement and buzz on how
Microsoft was doing the right thing and not abandoning the hobbyist. One
of the things we wanted to do was build a better relationship with these
customers and that would start by capturing some basic information about
them like name, email, country, job role, zip code, technology they are
interested in, and programming languages they are interested in. As I
wanted to better understand the customers that had registered Express,
and since we don’t have the best internal systems, I created my own
[reporting database](/danielfe/archive/2005/07/10/437312.aspx) to see
trends. What we look here is **strictly** non-PII (Personally
Identifiable Information) data, like the top countries, zip codes,
programming languages or combinations thereof. What I found was that we
suffered from the term I now refer to as the “Afghani Banker” Syndrome.
The [CIA world Fact
book](http://www.cia.gov/cia/publications/factbook/geos/af.html) at the
time (2004) reported that there was approximately 1,000 internet users
in Afghanistan (the number has since been updated in 2005 to an
estimated 25,000). When I tabulated the Express registrations, I saw we
had \> 1,000 Afghani bankers register Visual Studio Express Beta 1.
That’s right, we had more bankers from Afghanistan register the
product then there were estimated internet users . Second, the three
most popular zip codes when registering were bogus - “12345”, “90210”,
and “00000”. Third, we had 70 registrations from [Bouvet
Island](http://en.wikipedia.org/wiki/Bouvet_Island). For those who
aren’t familiar with Bouvet Island, I’ll steal a partial description
of it here, Bouvet Island is “*an uninhabited sub-antarctic volcanic
island in the South Atlantic Ocean*”, “*93% of the island is covered by
glaciers*”, and “*It has no ports or harbors, only offshore
anchorages*”, *“…can be considered the most remote island on the
planet”*. The Bouvet Island registrations have to be my all time
favorite, not just because it had me laughing all day, but because I
think it may be a result of having uber Express customers who are cool
enough to know that Bouvet Island is the island referenced in the
classic Alien vs. Predator movie.

 

**Bad Decisions Based on Real Data**

Now if you strictly made decisions based on the data, you may have
decided that we need to create a localized starter kit for Bankers in
Afghanistan, better outreach to [Schenectady, New
York](http://www.downloadzipcode.com/NY/12345/) (zip code: 12345,
population 61K+), or that Beverly Hills, CA (zip code: 90210,
population: 10K+) had become a little silicon valley, or that somehow
[Centralia,
PA](http://www.washingtonpost.com/wp-dyn/content/article/2003/04/02/AR2005033108150.html)
(zip code: 00000, population: 20) had a huge influx of developers move
in that increased its population several orders of magnitude, or that we
should develop a GPS solution to help navigate glaciers around Bouvet
Island. Perhaps. Or perhaps, people don’t care about filling out forms
and will literally pick the first choice. If you care about your
customers, you should have a healthy skepticism when presented with what
appears to be farcical trends.

 

**Curing the “Afghani Banker” Syndrome**

I’m not sure that this can be fully cured, for one thing, there may
actually be bankers in Afghanistan that are interested in programming,
but it can certainly be treated. Our team is always looking at ways to
provide real value for customers that would make them want to add their
correct information. For example, for the RTM release of Visual Studio
Express, we dramatically **decreased** the Afghani deviation by
providing real value in the form of [free eBooks, stock photography,
Windows icons, and free
controls](http://msdn.microsoft.com/vstudio/express/register/) for
registering the product. Going forward, we want to build on the
relationship we have with our Express customers, address their pain
points, and even provide special benefits for them. It’s a work in
progress so I of course look forward to your feedback on what would be a
good, general purpose way to provide incentives for Express customers

 

</div>

</div>
