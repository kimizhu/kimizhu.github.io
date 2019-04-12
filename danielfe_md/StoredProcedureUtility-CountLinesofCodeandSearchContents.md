<div id="page">

# Stored Procedure Utility - Count Lines of Code and Search Contents

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
7/10/2005 6:51:00 PM

-----

<div id="content">

\<backstory to get motivation on why I did this\>  
It's review time here for Microsoft employees, and I won't bore you with
my thoughts on the review process as many in the blogosphere have
written about it. I need to start writing my review and I wanted to get
some high-level statistics on what I've done from a development
perspective. Why am I writing code? Because I'm a sucker :)  
Somewhere around six weeks before Beta 2, we lacked a mechanism for
mailing customers who registered emails with their registration benefits
and any capability to report on who's registering Beta 1 or Beta 2.
Since I had personally worked on some of the details on getting data
into and out of our user database, MSI (MicroSoft Individual), I
stupidly volunteered (and sucked Tom Krueger and Scott Currie in) to
take this work on b/c I didn't want to have our customers have a bad
experience. Back to my review, I wanted to get the total lines of code
for the app and DB code. Scott Currie had a nice C\# application that
counted the lines of code in the project, but there wasn't away to track
how much code was actually in the stored procedures. So rather then
actually spend time writing my review, I wrote code to count the lines
of database code I wrote. With that I give you.....  
\</backstory\>

**Stored Procedure Stats  
**[Download Exe](http://www.danfernandez.com/view/view.aspx?ID=159) ||
[Download Source](http://www.danfernandez.com/view/view.aspx?ID=160)  
Stored Procedure Stats is a simple Windows Forms 2.0 Beta 2 application
written in C\# that you can use to:

  - Get a list of all the stored procedures in your SQL Server (only)
    database
  - See the actual code in your stored procedures
  - Search the contents of your stored procedures for any keywords

![](http://www.danfernandez.com/view/view.aspx?ID=156)

You can change the connection string to anything you'd like. By default
it uses Integrated Security to connect to Northwind.

**List Stored Procedures  
**Clicking the **List Stored Procedures** button queries the sysobjects
table in the given database for any user stored procedures using the
following query:

  - select name from sysobjects where xtype='P' and category \<\> 2

Calling this code on the Northwind database fills a CheckedListBox with
all the stored procs in NorthWind.

![](http://www.danfernandez.com/view/view.aspx?ID=157)

**View Stored Procedure  
**The View Stored Procedure button returns the actual stored procedure
code for the the selected stored procedures by using the SQL Server
built-in sp\_helptext stored procedure.

**Get Total Lines of Code**  
This button gets the text for all the selected stored procedures and
counts the total lines of code and the average \# of lines of code per
stored procedure. For Northwind and Pubs, the results are:

  - **Northwind Total Lines of Code**: 62
  - **Pubs Total Lines of Code:** 36
  - **Northwind Average LOC per Stored Proc**: 8
  - **Pubs Average LOC per Stored Proc**: 9  

**Search Stored Procedures  
**The search Stored Procedures (pic below) is a very handy feature for
searching the code in your stored procedures. This idea is actually from
Jonathan Barrett, my old manager during my .com days. He created a Web
app that searched stored procedures as well as client code, which made
it really easy to find reusable code(ex: datetime parsing,
substring/string functions,etc), bad code (ex: cursors) or
dependencies (before you change that column name, you can instantly see
all the stored procs that will be affected). This sample only searches
stored procs and not client code, but I'd love it if someone could
extend this to also search client code.

![](http://www.danfernandez.com/view/view.aspx?ID=158)

Searching for the term "**Select**" in Northwind shows us that it is
used 8 times in multiple stored procedures. The result set shows the
stored procedure name, line number, and the actual line of code as shown
below.

\*\*\* 8 Matches Found  
Match: 1 of 8  
Stored Proc Name: CustOrderHist  
Line Number: 3  
Line: *SELECT ProductName, Total=SUM(Quantity)*

Match: 2 of 8  
Stored Proc Name: CustOrdersDetail  
Line Number: 4  
Line: *SELECT ProductName,  
*...

Here are some stats from Northwind, everyone's favorite database

  - "=": 19 matches
  - "ID": 15 matches
  - "@" 12 matches (good indicator of how many variables you have)
  - "Orders" 10 matches
  - "Select": 8 Matches
  - "Convert" 4 matches
  - "and" 6 matches
  - "Customer" 6 matches
  - "round" 3 mtaches
  - "sum" 2 matches
  - "substring" 1 match
  - "\!=" 1 match

**Features used in this sample**

  - Property Binding
  - Regular Expressions (for Search Operation)
  - Generics (everywhere)
  - Background Worker (for the Search operation) - Code "leveraged" from
    my [GoogleImages
    sample](http://blogs.msdn.com/danielfe/archive/2004/07/26/197811.aspx)

**Features that didn't quite make it in**

  - Custom AutoComplete Provider a la Google Suggest
  - Match Case for text searching
  - Colorization
  - Non-SQL Server support

\<back to the backstory\>  
So I ran this puppy on one of our two databases, unchecked the ASP.NET
2.0 stored procs (for SQLDependency code), and the results are:

  - Total Lines of Code: 2100
  - Average LOC per Stored Proc: 33
  - "Select" statements: 228
  - "@" symbol: 508

Now that I've thoroughly wasted my time writing code to help add a
single bullet item in my review, I need to actually go write my
review\!  
\</backstory\>

 

</div>

</div>
