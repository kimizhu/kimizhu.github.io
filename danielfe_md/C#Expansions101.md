<div id="page">

# C\# Expansions 101

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
11/11/2003 12:53:00 AM

-----

<div id="content">

[Jeff Key](http://weblogs.asp.net/jkey/) of
[NetPing](http://www.sliver.com/dotnet/netping) and
[SnippetCompiler](http://www.sliver.com/dotnet/SnippetCompiler) fame,
wrote a nice expansion for using a [generic
list](http://weblogs.asp.net/jkey/posts/36500.aspx), so I thought I
would share some useful information on expansions.

**NOTE** - This is all based on Whidbey Tech Preview, so things can and
will change.

### What are Expansions?

Expansions are fill-in-the-blank snippets of code that have several
benefits.  They help automate boiler-plate code constructs like looping
through a collection using a foreach statement, they help reduce syntax
errors and they're a perfect example of code-focused RAD.  One of the
things you'll notice with C\# Whidbey is the concept of code-focused
RAD, meaning RAD isn't just limited to drag-and-drop wizards, we're
going to add productivity features directly into the code editor where
C\# developers spend the majority of their time.

Note - You can find the list of expansions that come with Whidbey in
the "C:\\Program Files\\Microsoft Visual Studio .NET
Whidbey\\VC\#\\ExStencil\\" directory.

## Dissecting an Expansion

To help explain expansions, I've created two simple custom expansions in
an xml file named custom1.xml and placed the file in the ExStensil
directory mentioned above.  The two expansion are explained below: 

  - Console ReadLine: This is a very simple expansion that automates
    calling the Readline method of the Console class. 
  - Console WriteLine: This is a slightly more complicated expansion
    that shows how you can use variables directly within an expansion by
    calling the Writeline method of the Console class. 

System.Console.Readline(); $selected$ $end$
System.Console.Writeline($value$); $selected$ $end$

The code for these expansions is below:

    <?xml version="1.0" encoding="utf-8"?>
    
        <ExStencilCollection>
    
         <ExStencil>
    
         <header>
    
          <title>Console ReadLine</title>
    
          <shortcut>cr</shortcut>
    
          <description>Expansion snippet for Console.ReadLine</description>
    
          <category>Expansion</category>
    
         </header>

     <snippet>
    
          <code language="csharp">
    
           <![CDATA[
    
           System.Console.ReadLine();
    
           $selected$ $end$
    
          ]]>
    
          </code>
    
            
    
         </snippet>
    
         </ExStencil>

    <ExStencil>
    
         <header>
    
          <title>Console WriteLine</title>
    
          <shortcut>cw</shortcut>
    
          <description>Expansion snippet for Console.WriteLine</description>
    
          <category>Expansion</category>
    
         </header>

     <snippet>
    
          <declarations>
    
          <literal default="true">
    
           <id>value</id>
    
           <tooltip>Value to write to the Console</tooltip>
    
          <default>"hello world"</default>
    
          </literal>
    
          </declarations>

      <code language="csharp">
    
           <![CDATA[

       System.Console.WriteLine($value$);
    
           $selected$ $end$
    
          ]]>
    
          </code>
    
            
    
         </snippet>
    
         </ExStencil>
    
        </ExStencilCollection> 

All expansions are written inside of \<ExStencil\>\<ExStencil\> tags. If
you have multiple expansions in a file, they should be
within \<ExStencilCollection\>\</ExStencilCollection\> tags.  

### Header Section 

The header section defines the general attributes of an expansion. 
Below are definitions of the tags within the header section: 

  - **title**: The expansion's title.
  - **shortcut**: These are the shortcut keys needed to invoke the
    expansion.
  - **description**: This is the more verbose description of the
    expansion.
  - **category**: This can be "Expansion" and/or "SurroundWith", I'll
    blog more on SurroundWith in the future...

The title and description values are used to provide information to the
developer using the expansion.  For example, when a user sees the list
of available expansions, if they highlight an expansion, they will see
the expansion title and description in this format:
*title*(*description*). In the case of Console.ReadLine, the user will
see "Console ReadLine (Expansion snippet for Console.ReadLine)".  The
category value determines which IDE context menu will list the
expansion. 

### Snippet Section

The next section of the expansion is the snippet section which is
divided into two sections, the declarations and the code section.  The
declarations section contains any user defined variables, while the code
section represents the actual code for the expansion.  Below are
definitions of tags within the declaration section:

  - **literal**: Literals represent variables within your code.
  - **id**: The id tag represents an identifier for a variable.
  - **default**: The default tag represents the default value for that
    variable.
  - **tooltip**: The tooltip is a description that is displayed to the
    user when inserting a value for the variable.

For example, when a user invokes the Console WriteLine expansion, the
cursor is placed directly on the value literal, which by default will
have the value "hello world".  Visual Studio will automatically select
the text, so if a user starts typing, the default value is automatically
replaced. 

The next part is the actual code for the expansion, which is rendered in
a CDATA XML tag so that XML parsers ignore the contents and you can use
reserved XML escape characters like "?", "\<", "\>", in the code
section.

  - **$*variable name*$**: Literals declared in the header section
    should be surrounded with "$" symbols to denote that they are
    variables.
  - **$selected$**: This built-in variable determines where the cursor
    will be positioned when the expansion is completed.
  - **$end$**: This built-in variable denotes the end of the expansion.

In the Console WriteLine expansion, the code section is declared such
that the $value$ variable will be directly inside the Writeline method
call.  After completing the expansion, the cursor will then be
positioned on the $selected$ section. 

      System.Console.WriteLine($value$);

As you can see, writing expansions is easy, and they're one of my
favorite features in Whidbey.  If you're into experimentation, I suggest
you open up the expansions.xml file located in the ExStencils directory
and begin playing.  I'll be providing more information on expansions in
future posts, but if you have feedback on expansions (both the good and
the bad) please let us know.

### 

### 

</div>

</div>
