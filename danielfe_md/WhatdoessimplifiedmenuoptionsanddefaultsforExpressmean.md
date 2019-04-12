<div id="page">

# What does "simplified menu options and defaults" for Express mean?

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
5/10/2006 1:03:00 PM

-----

<div id="content">

\[This question came up recently on an internal DL so I thought I would
elaborate\]

On the [Visual Studio 2005 Product Feature Comparison
Chart](http://msdn.microsoft.com/vstudio/products/compare/), you'll
notice that the **User Experience** row lists Visual Studio Express as
having "simplified menus and options". What exactly does that mean?

The goal of Express is to create an easy-to-use, fun, and easy-to-learn
product for beginners, hobbyists, and students. One of the key
challenges we wanted to address was the ability to distribute Express
online as the primary distribution vehicle. That meant starting at the
multi-gigabyte version of Visual Studio .NET 2003 and removing features
to meet an IDE goal of just 30MB. We used the "less is more" principle
in two ways

**Removing features  
**The overarching thinking here is that if it can be removed, it should
be removed, and the need to evaluate the feature for the audience.
There was/is a lot of healthy discussion about what are the right
features to remove for Express, but based on the feedback so far, we've
provided a core development experience that addressed our customers
needs. 

**Simplifying defaults  
**While professional and enterprise developers want/require every IDE
feature exposed, beginners and hobbyists are easily overwhelmed my the
huge number of features in Visual Studio Express. To give an example, if
you want to build or deploy an application you should have three
options, not 12. Visual Studio Express includes the ability to create
custom profiles that enable you add or hide menu options, toolbars and
more. Below are screenshots comparing Visual Basic Express and Visual
Studio Team System menus so you can see the
difference:

|                  |                                                            |                                                            |
| ---------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| **Category**     | **VB Express**                                             | **Team System**                                            |
| **Build Menu**   | **![](http://www.danfernandez.com/view/view.aspx?ID=173)** | **![](http://www.danfernandez.com/view/view.aspx?ID=174)** |
| **Tools Menu**   | **![](http://www.danfernandez.com/view/view.aspx?ID=175)** | **![](http://www.danfernandez.com/view/view.aspx?ID=176)** |
| **Breakpoint**   | **![](http://www.danfernandez.com/view/view.aspx?ID=178)** | **![](http://www.danfernandez.com/view/view.aspx?ID=179)** |
| **Options**      | **![](http://www.danfernandez.com/view/view.aspx?ID=180)** | **![](http://www.danfernandez.com/view/view.aspx?ID=181)** |
| **Add New Item** | ![](http://www.danfernandez.com/view/view.aspx?ID=182)     | ![](http://www.danfernandez.com/view/view.aspx?ID=183)     |

In another blog post, I'll show how you can fully customize your
experience and even export your settings amongst multiple computers or
say a teacher setting profiles for 30 students.

 

 

</div>

</div>
