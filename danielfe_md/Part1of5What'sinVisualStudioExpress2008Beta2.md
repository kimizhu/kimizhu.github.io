<div id="page">

# Part 1 of 5: What's in Visual Studio Express 2008 Beta 2

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
8/1/2007 10:34:43 PM

-----

<div id="content">

This 5-part blog series will help you, dear reader, to understand what
new features will be directly supported inside of Visual Studio Express
2008. 

 

In this post, I'll give a quick overview of the most common questions
still asked about Express and then dive into some of the language
enhancements coming in 2008. Where appropriate, I'll list which Express
product or language includes what features.

 

### **Visual Studio Express 2008 Overview**

  - **Versions:** Visual Web Developer, Visual Basic, Visual C\#, Visual
    C++
  - **Cost**:  $0
  - **Commercial Use**: Yes
  - **Side-by-Side Compatibility**: All Express products are designed to
    work side-by-side with both Visual Studio 2005 Express/Pro/VSTS and
    Visual Studio 2008 Express/Pro/VSTS. This means you could have VB,
    C\#, C++, and VWD Express products install for both 2005 and 2008
    \*and\* have VSTS installed and everything will \*just work\*

 

### **Language Enhancements (available in VB, C\#, and VWD Express)**

One key thing that Express has always been about is enabling full access
to the programming language as well as to the .NET Framework and this
continues to be true for Visual Studio 2008. Visual Studio Express 2008
fully supports Language INtegrated Query (LINQ) which adds language
query capabilities (similar to SQL) directly into the Visual Basic and
C\# languages. What that means is that you can query databases, XML
files like RSS feeds, or in-memory objects all using a single syntax.
Hand-in-hand with LINQ are a number of language enhancements that
simplify working with .NET data types that really shine when working in
tandem with LINQ queries. Below is a quick walkthrough of a number of
the language enhancements in action as we use LINQ to query create a
list of Web site classes.

 

**Visual Basic
Example**

**** 

![LinqVBClass](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/LinqVBClass_5.png)

[![LinqVB2](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/LinqVB2_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/LinqVB2.png)

 

**Visual C\#
Example**

 

 [![LINQCSharp](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/LINQCSharp_thumb_1.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/LINQCSharp_2.png)

 

**Result**

[![linqresult](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/linqresult_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/linqresult.png)

 

Walkthrough

1 - **Auto-Implemented Properties** (C\#) - The "Site" class uses the
new **Auto-Implemented Properties** feature for both "Name" and "Uri"
which means you don't have to manually create a private back-store
variable (ex: *private string \_Name;*)as you would with a normal
property in C\# 2.0.

2 - **Inferred Data Type** (VB, C\#) - Notice that rather than
explicitly declare the data type for "mySites", instead we use **Dim**
for Visual Basic or the new data type **var**,** **for C\# which refer
to an **inferred data type** in that it will figure out (rather than you
having to explicitly write out) the data type for "mySites".

3 - **Array Initializers**(VB, C\#)**, Collection
Initializers**(C\#)**, and Object Initializers** (VB, C\#) 

  - Previously, if you wanted to add items to an array or collection,
    you needed two steps, (1) create the collection and (2) add data to
    it (ex: *mySites.Add(site1), mySites.Add(site2), etc*). Now you can
    use another new feature, **initializers,** which enable you to add
    data to an array, collection (or object as shown in the next
    bullet) when it is created. Notice how we can now create three new
    "Site" classes inline directly instead of having separate lines of
    code for adding each site one-by-one. 
  - Similarly, when we create the new "Site" class, we also use another
    new feature, **object initializers**, which enable you to set the
    properties of an object *inline* when you create the object.
    Previously, if you wanted to do this, you would either need to (1)
    create the object (2) set each property on a separate line of code
    (or manually create a constructor for the "Site" class). With object
    initializers you can create an object and set its properties using
    the format *PropertyName = PropertyValue* like *Name="AOL"* saving
    you code and space.

4 - **Inferred Data Type,** **LINQ query, Anonymous type (projection)
-** This line of code is a bit complex, so we'll break it down into it's
pieces:

  - First notice that we again use **Dim** (VB) or **var** (C\#)to
    automatically infer what data type we'll have for the "result"
    variable.
  - Next, we'll see that we can use LINQ syntax to filter out any sites
    who's "Address" doesn't start with "http" and who's "Name" is not 3
    letters long. For developers familiar with SQL, statements like
    **from, where, select**, should certainly be familiar with the
    exception that the **select** statement comes \*after\* you choose
    your data source (**from**) and filter (**where**).
  - Notice that the **select** statement in VB doesn't just return the
    "Site" class it actually creates an **anonymous type** (the C\#
    version uses the **new** keyword to denote this) in that we're not
    just returning the "Site" class, instead we're going to create
    (or **project)** a new **anonymous type** that instead holds the
    site name and it's value capitalized. Instead of using the "Site"
    class, our new data type, where "result" will be set to, is an
    **IEnumerable\<a\>** type where "a" is an anonymous type that simply
    has two fields "Name" and "Lowercase" with both as string types.
    Notice that with ToLower() you can manually set the name of the
    field, in this case, it's set to "Lowercase" so that looping through
    items in the "result" type would show a Lowercase field (ex:
    *result.Lowercase*).

5 - **Custom Extension Methods** - Extension methods enable you to add
new methods to classes without manually adding the method to each
specific type. The example in \#5, shows how to create an extension
method for any **IEnumerable** data type that loops through and prints
each item to the console. Note that for Visual Basic, you must including
the Imports System.Runtime.CompilerServices to be able to add an
extension method.

> Aside: Underneath the covers, LINQ syntax including **from, where,
> select** are really just extension methods with a sprinkle of
>  [syntactic sugar](http://en.wikipedia.org/wiki/Syntactic_sugar) for
> easier readability.  

 

**XML Literals (VB)**

Another big feature that can be used in tandem with LINQ is XML
Literals, which enable you to add XML code directly inline with your
Visual Basic application by simply adding xml tags for markup and \<%=
and %\> for source code (similar to VBScript with classic ASP). In this
example, we'll create a snippet of XML with the name and url by mixing
and matching LINQ and XML markup
tags.

![xmlLiteralCode](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/xmlLiteralCode_2.png)

Result

![xmlLiteral](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/FeaturesinVisualStudioExpress2008Beta2_E1DF/xmlLiteral_1.png)

 

 While this is not a definitive list of all of the new language features
for Visual Studio Express, you can see that Express still provides full
support for the language enhancements coming for 2008.

 

*Coming Soon: Part 2 Code Editor and UI Designers*

</div>

</div>
