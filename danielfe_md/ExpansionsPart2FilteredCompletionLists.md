<div id="page">

# Expansions Part 2: Filtered Completion Lists

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
11/12/2003 2:41:00 AM

-----

<div id="content">

I noticed a great question from [Luke
Hutteman](http://www.hutteman.com/weblog/) (of
[SharpReader](http://www.sharpreader.com) fame) on [Chris Sells
blog](http://www.sellsbrothers.com).  His question is:  
*  
"Will VS.NET also (like IDEA) be smart enough to give me a dropdown with
appropriate values for the template-variables? That is, if the template
calls for an IList somewhere, will it show a dropdown with all
IList-type variables that are in scope at that time?"*

**Note**: If you're interested in the basics of creating expansions,
check out my [first blog entry on
expansions](http://blogs.gotdotnet.com/danielfe/PermaLink.aspx/33c7ddb6-641b-42d9-a879-bd1ae884c3ab).

Back to Luke's question, the answer is yes it will.  In fact, the
foreach expansion does exactly that by showing objects that implement
the IEnumerable interface within the specific scope where the expansion
was called.  To do this, you can add a \<function\>\</function\> tag to
the literal variable declaration and use the built-in function
ListVariablesOfType(*type*)*. * Below is a fragment of the XML markup of
the foreach expansion: 

` <literal>    <id>collection</id>    <tooltip>Name of collection or
array to iterate through</tooltip>
   <function>ListVariablesOfType(System.Collections.IEnumerable)</function>
   <default>collection_to_loop</default>   </literal>  `

When the expansion is invoked and the user tabs to the collection
variable, they will see a list of IEnumerable collections.

The code section for the foreach expansion (below) is straighforward
with the collection literal being declared the same as any other
variable.

`   <code language="csharp">    <![CDATA[foreach ($type$ $indentifier$
in $collection$)   {    $selected$ $end$   }]]>   </code>  `

PS: If you still want to code in C\# but want to use
[IDEA](http://www.jetbrains.com) tools instead of VS, this
[post](http://home.yole.ru/weblog/archives/000096.html) makes it sound
like we'll soon have a version of IntelliJ for C\# :)

</div>

</div>
