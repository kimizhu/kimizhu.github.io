<div id="page">

# My Dream SQL Tool Features

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/10/2005 4:59:00 PM

-----

<div id="content">

It's interesting to jump back and forth between both programming models
as lately I've been working on a decent size SQL 2K database (4M+ rows).
Personally, I'm a Query Analyzer guy and I do all my SQL work there. I'm
used to having IntelliSense in VS, which is annoying not to have in
QA, but for some reason I live with 8pt fonts for queries, but I
couldn't stand it in VS. Go figure. In any case here are my dream SQL
Tool programming features:

**DTS support for Importing XML**

  - I'm uploading a monster (multi-gigabyte) XML file into SQL 2K and
    you should see the stupid pet tricks I have to do to load it. I
    \*don't\* want to manually define the schema and create a mapping
    file, and a VBS script to run it, etc I want to use DTS and have
    it see an XML file the same way it sees any other data source. It
    should inspect the XML file, give me a list of tables/types and let
    me map them to existing data.

**Data Validation Rules**

  - I won't elaborate here, but the data I've been working with is of
    unknown quality. As such I would love a way to easily validate that
    data. SQL has some easy validation rules (data type, nullability,
    joins), but I'd love more, like the ability to say that a date must
    be within a valid range, or that a number can't be negative, etc. I
    also want to be able to run these validation tests on data
    that already exists in a DB, in addition to running it as part of
    the data import process.

**Unit Test Support**

  - Given the above point on unknown data quality, I would love a way to
    stub out unit tests to test for data integrity, as well as to test
    results of queries/views/stored procs against dummy data. You could
    even have code coverage tools. 

**Refactoring**

  - **Rename** - I would love a Rename refactoring for variables,
    table/view data types and any other DB objects. The refactoring
    would automatically check and update any dependencies, comments, etc
    just like VS 2005.
  - **Extract to Stored Procedure/Function** - How many times have you
    seen a 10+ page query that is completely procedural and poorly
    organized? You'll find 1/2 of the code copy/pasted into about five
    other stored procs too. Having the ability to refactor and
    componentize queries (where possible) would rock.
  - **Extract to Lookup Table** - Take a table
    <span class="underline">Customer</span> with a varchar(50) column
    named <span class="underline">State</span> with values like
    "Alabama, Arkansas,...". Extract the unique values to a Lookup table
    with the structure like (<span class="underline">State\_PK</span>,
    State\_text) and have a wizard walk you through setting up the state
    lookup table name, PK name and type, and take the extracted
    values/datatypes (the state names) automatically add it to the
    lookup table in a column with the same name/data type. The original
    table would of course remove the
    <span class="underline">State</span> varchar column and instead add
    a foreign key relationship based on
    <span class="underline">State\_PK</span>.
  - **Convert Columns to Rows or Convert Rows to Columns**- There may be
    a time when you have data of an unknown structure that you use a Row
    based table structure. A row based structure doesn't define the
    specific columns, but instead has only a couple of columns like Key
    and Value. There are times when you need to convert an already
    existing DB design between these. Although more rare, it's
    definitely a pain, and something that you could easily automate.
  - **Promote Local to Parameter** - This would be nice to have, in
    particular if it was integrated with the Client Code Dependency
    analysis feature (below).
  - **Client Code Dependency Analysis** - Assuming an ASP.NET example, I
    want to know which pages will break if I change my stored
    procedures, and if it's possible, automatically fix the changes.
    Let's say I rename a stored proc, the Web page that calls that
    stored proc won't work anymore. This would automatically update the
    reference to the correct name.
  - **Normalization Analysis/Automation** - Show me where my DB isn't
    normalized and refactor the database (ex remove calculated columns).
    It doesn't have to hit some [uber normalization
    like 6NF](http://www.dbdebunk.com/page/page/621935.htm), but how
    about to 3NF? *The key, the whole key, and nothing but the key, so
    help me Codd\!*

**FxCop**

  - SQL Server already has a [Best Practices
    analyzer](http://www.microsoft.com/downloads/details.aspx?FamilyID=b352eb1f-d3ca-44ee-893e-9e07339c1f22&displaylang=en),
    which is pretty good, but I want it integrated into Query Analyzer.
    SQL Server BPA includes rules for maintenance and design issues, and
    I believe query "no-no's" like cursors which is also
    great. \<aside\>: Cursors are the biggest, easily replaced perf
    hitters I know of, and I've always wanted to start
    "nodatabasecursors.com" with examples of cursors and why people
    think they need them and how they can be replaced with
    SQL.\</aside\>

**Source Control for Stored Procs, Views, Triggers, Functions**

  - Nuff said

 

My dream scenario:  I would be able to import data using XML Bulk Insert
through a wizard, run some validation code pre/post load, create a
stored proc and refactor it automatically, generate unit test stubs for
the stored proc, validate via FX Cop and then check in my code to some
source control mechanism.

For the DB programmers out there, what other dev tool IDE features do
you miss when writing SQL code? Are there any cool tools/add-ins that
have the features I listed above that I might not know about?

 

 

 

</div>

</div>
