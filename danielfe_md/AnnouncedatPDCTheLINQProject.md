<div id="page">

# Announced at PDC: The LINQ Project

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
9/13/2005 2:09:00 PM

-----

<div id="content">

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The LINQ
Project</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">On Tuesday September
13, 2005, Anders Hejlsberg did the first public demo of the LINQ Project
in the Jim Allchin keynote. </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">What is LINQ you
might ask? </span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">LINQ stands for
**L**anguage **IN**tegrated **Q**uery and in a nutshell, it makes query
and set operations, like SQL statements first class citizens in .NET
languages like C\# and VB.<span style="mso-spacerun: yes"> 
</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Query expressions,
like “from”, “where”, and “select” and all the others you know and love
from SQL are now first class citizens in C\# and VB. Not only that, the
query expressions can be used across domains. While in this example I’m
querying objects, I could just as easily query a database as
well.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">What does LINQ code
look like?</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The sample below
queries a list of strings and returns all strings with a length of
five.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
System;</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
System.Query;</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
Danielfe;</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">class</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
<span style="COLOR: teal">Program</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span><span style="COLOR: blue">static</span>
<span style="COLOR: blue">void</span>
Main(<span style="COLOR: blue">string</span>\[\]
args)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: blue">string</span>\[\] aBunchOfWords =
{<span style="COLOR: maroon">"One"</span>,<span style="COLOR: maroon">"Two"</span>,
<span style="COLOR: maroon">"Hello"</span>,
</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span><span style="COLOR: maroon">"World"</span>,
<span style="COLOR: maroon">"Four"</span>,
<span style="COLOR: maroon">"Five"</span>};</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">    
</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: blue">var</span> result
=<span style="mso-spacerun: yes">   
</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">           
</span><span style="COLOR: blue">from</span> s
<span style="COLOR: blue">in</span> aBunchOfWords
<span style="COLOR: green">// query the string array
</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">           
</span><span style="COLOR: blue">where</span> s.Length ==
5<span style="mso-spacerun: yes">    
</span><span style="COLOR: green">// for all words with length =
5</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">           
</span><span style="COLOR: blue">select</span>
s;<span style="mso-spacerun: yes">              
</span><span style="COLOR: green">// and return the
string</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: green">//PrintToConsole is an Extension
method that prints the
value</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span>result.Print();</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">This application
prints the following result</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Hello</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">World</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The beauty of LINQ is
that you can use query operations on anything. Here’s a sample that runs
against SQL Server 2000 on the Northwind database and returns all
customers who’s title is
five.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
System;</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
System.Query;</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
Danielfe;</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
System.Data.DLinq; <span style="COLOR: green">//DLinq is LINQ for
Databases</span></span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">using</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
nwind; <span style="COLOR: green">//Custom namespace that is tool
generated
</span></span>

<span style="FONT-SIZE: 10pt; COLOR: green; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">class</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
<span style="COLOR: teal">Program</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span><span style="COLOR: blue">static</span>
<span style="COLOR: blue">void</span>
Main(<span style="COLOR: blue">string</span>\[\]
args)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: teal">Northwind</span> db =
<span style="COLOR: blue">new</span>
<span style="COLOR: teal">Northwind</span>(<span style="COLOR: maroon">"Data
Source=(local);Initial Catalog=Northwind;Integrated
Security=True"</span>);<span style="mso-spacerun: yes">  
</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: teal">Table</span>\<<span style="COLOR: teal">Customers</span>\>
allCustomers =
db.GetTable\<<span style="COLOR: teal">Customers</span>\>();</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: blue">var</span> result =
</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">               
</span><span style="COLOR: blue">from</span> c
<span style="COLOR: blue">in</span>
allCustomers</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">               
</span><span style="COLOR: blue">where</span> c.ContactTitle.Length ==
5</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">               
</span><span style="COLOR: blue">select</span>
c.ContactName;</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span>result.Print();<span style="mso-spacerun: yes">  
</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The Customers class is
an auto-generated class that lets you program against the customer
table. The first two lines establish a connection to the database and
retrieve data for the Customer table. The second line queries all
northwind customers who’s ContactTitle is five characters long and
returns the ContactName and prints them to the console. </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">In short, LINQ makes
it a heck of a lot easier to program any sort of data source in a
unified way. <span style="mso-spacerun: yes"> </span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">More
information:</span>**

  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">[MSDN LINQ
    Home](http://msdn.microsoft.com/netframework/future/linq/)</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">[LINQ Blogger RSS
    Feed](http://msdn.microsoft.com/msdn-online/shared/components/rssaggregator.aspx?OPML=/netframework/future/linq/linq.opml&link=http://msdn.microsoft.com/netframework/future/linq/&title=Blogs+about+LINQ&description=Project+LINQ+blogs)</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">[Download the Tech
    Preview](http://download.microsoft.com/download/4/7/0/4703eba2-78c4-4b09-8912-69f6c38d3a56/LINQ%20Preview.msi)</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">[View 101 LINQ
    samples
    online](http://msdn.microsoft.com/vcsharp/future/linqsamples/)
    </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

</div>

</div>
