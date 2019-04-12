<div id="page">

# TreeView in Arabic

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/4/2004 7:14:00 PM

-----

<div id="content">

In the Q\&A after my ASP.NET talks at MDC, someone asked whether the new
ASP.NET 2.0 TreeView control can render nodes and subnodes in languages
that read from right to left like Arabic.  I tried testing this by
dropping a TreeView control and looked for \*some\* property that would
let me use character sets that read right-to-left, but didn't find
anything close.  So I forwarded this question onto Goldfarb, who
forwarded it onto Brad Millington, who forwarded it to the person that
owns testing the Treeview, and as it turns out this is possible (and
that we do test for it) but it's not an inherent property in the
Treeview control.

**Aside**:*  Almost everyone at Microsoft is on email \*all\* the time,
so while it may seem like a convoluted process to get three or five or
ten degrees of indirection to get a question answered, it could be as
short as five minutes for a fully-validated response with VP approval. I
love this company :)*

So how do you do it? Rather then setting a property on a *control*, you
set the “dir“ property on the *page*, (or to be more specific the body)
which will then render the  content right to left.  But what if you
wanted to have multi-directional content on a single page, like a navbar
that is right to left in arabic, but content that is left to right in
English? And what if you didn't want to use frames (floating or
otherwise)? 

**Step 1 Define a navbar/master page**

Create the nav bar the same way you always would, in \<td\>\</td\>,
\<span\>\</span\>, \<div\>\</div\> or whatever tags you use for
positioning, and set the dir property in the \<td\>,\<span\> or \<div\>
tags to “**rtl**”.

**Step 2 Define the content area for the page**

Create the content area for the page and set the dir property to
“**ltr**“

 

</div>

</div>
