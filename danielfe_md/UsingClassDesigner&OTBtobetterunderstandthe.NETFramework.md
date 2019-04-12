<div id="page">

# Using Class Designer & OTB to better understand the .NET Framework

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
1/27/2005 12:23:00 PM

-----

<div id="content">

For those of you who don't know, Class Designer (CD) is a Visual Studio
2005 feature that lets you visually design/model your data types. You
can use CD to design custom .NET classes and it can be also used to
better understand and navigate an existing code base. One of the lesser
known features of Class Designer is that you can also use it on .NET
Framework types.

Let's say I wanted to create a Windows Form control, and I want to
understand the object model for the Control class. Using Visual Studio
2005 Beta 1, simply create a new Windows Form application, right click
on Solution Explorer and select "**Add New Item...Class Diagram"**. 
You'll now have a blank Class Diagram which you can drag and drop
classes onto.  To drag and drop classes, you'll need to switch to the
Class View, "**View...Class View"**. This lists all the types in your
project. In our case we want to understand .NET Framework types (which
are in our project references) so we'll need to make one minor tweak to
the Class View - make sure that the "**Show Project References**"
checkbox is checked as shown below:

![](http://www.danfernandez.com/view/view.aspx?ID=103)

Next, Expand the project references folder and navigate to the DLL and
namespace you are looking for as shown below:

![](http://www.danfernandez.com/view/view.aspx?ID=104)

Finally drag and drop the types you are interested in directly onto the
class diagram. This picture shows the object hierarchy, interfaces and
types for the **Control** class.

![](http://www.danfernandez.com/view/view.aspx?ID=105)

But wait there's more\! If you saw my previous post on [Object Test
Bench](http://blogs.msdn.com/danielfe/archive/2005/01/26/361375.aspx) (OTB), you
can see how they can be used in concert and we can experiment with .NET
Framework types using CD & OTB.

***Aside***: [Frans Bouma](http://weblogs.asp.net/fbouma/) asked a [good
question](http://blogs.msdn.com/danielfe/archive/2005/01/26/361375.aspx#361445)
about being able to type code, rather then go through dialogs, and the
good news is that you can also use the immediate window with OTB to
create and call instances of classes.

Back to learning about the .NET Framework. For simplicity sake, let's
say you want to learn about the design of the String class and maybe you
want to test how the String.Compare() method works. To do this, we'll
drag and drop System.String onto the Class Designer. You'll visually see
its interfaces, fields, properties, and methods.

![](http://www.danfernandez.com/view/view.aspx?ID=106)

Now that we've added it onto our diagram, we can use OTB to call the
String.Compare static method and choose the overload that accepts two
string arguments as shown below: 

![](http://www.danfernandez.com/view/view.aspx?ID=107)

When we select the Compare(string, string) method, we see a dialog box
prompting us to enter the two string parameters, and we'll enter "Hello"
and "World" as shown below:

![](http://www.danfernandez.com/view/view.aspx?ID=108)

When we click **OK**, Visual Studio will call the method and we get
anotehr dialog box that shows that String.Compare returns "-1" when
comparing the strings "hello" and "world."

![](http://www.danfernandez.com/view/view.aspx?ID=109)

Given that I think a lot of people will be using Class Designer to
understand code, I'd love to see CDadd support for Namespaces. My goal
would be that I could drag and drop a namespace and get a nice diagram
of all the types within the namespace, and it would make it easy for
anyone to create their own [.NET Framework class diagram
Poster]('http://msdn.microsoft.com/vstudio/productinfo/posters/download.aspx)
for a specific namespace. 

</div>

</div>
