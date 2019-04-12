<div id="page">

# Object Test Bench (VS 2005)

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
1/26/2005 10:41:00 PM

-----

<div id="content">

Object Test Bench is a new Visual Studio 2005 feature that helps you
understand objects at Design Time, rather then runtime. How many times
have you walked up to a code base and created some simple test
console/Windows/web applications just to run a couple of methods on a
class? Like the immediate window, Object Test Bench allows you to 
creating instances of classes invoke class methods (static or instance)
just by right-clicking on an object. There are two ways to use Object
Test Bench, the first is from Class View and the second is from Class
Designer. The Class Designer diagram below shows a simple object
hierarchy with an abstract base Animal class and two derived classes,
Dog and Parakeet.

![](http://www.danfernandez.com/view/view.aspx?ID=94)

From Class Designer, you can right click on an object and select Invoke
Static Method and you'll see a list of the static methods available for
the particular object.

![](http://www.danfernandez.com/view/view.aspx?ID=95)  

Selecting it shows a dialog box with information about the method

  
![](http://www.danfernandez.com/view/view.aspx?ID=96)

After you invoke the method, you'll see whether it ran successfully and
it shows the return type and the return value. In this example, the
CanSwim() method returns a boolean "**True**" value.  
  
![](http://www.danfernandez.com/view/view.aspx?ID=97)

Running static methods is pretty easy and something you can do with
Design Time Express Evaluation (DTEE). Let's make it slightly more
complicated by actually creating an instance of a class. In this case,
we'll create an instance of the Parakeet class by right clicking on the
class.  
  
![](http://www.danfernandez.com/view/view.aspx?ID=98)

You'll see the options available to create the Parakeet class and we
have the option to provide a name for the class. In this example, I'll
name our Parakeet "Polly".

![](http://www.danfernandez.com/view/view.aspx?ID=99)

What you'll see is the Object Test Bench window which shows the objects
that have been created. From the Object Test Bench Window, you can right
click on Polly, our newly created instance, and invoke any of the
instance methods.

![](http://www.danfernandez.com/view/view.aspx?ID=100)

In the case of the Parakeet class, we have an overloaded instance method
named **Speak** - one parameterless, one that takes a string parameter.

    public class Parakeet : Animal  
    {

        public string Speak(string echo)  
        {  
            return "brwwak " + echo;  
        }  
  
        public override string Speak()  
        {  
            return "brwwak";  
        }

    }

We'll select the Speak overload with a string parameter and select the
method that expects a string. The dialog shows the method invocation
dialog that expects a string parameter which I'll set to "**hello**".

![](http://www.danfernandez.com/view/view.aspx?ID=101)

After the method is invoked, we see the results "**brwwak, hello**" that
returns a string object successfully. If you notice the checkbox, you
can actually add the value directly to the Object Test Bench window. In
fact, we can use all the cool debugger visualizers for the return value
to inspect the value.

![](http://www.danfernandez.com/view/view.aspx?ID=102)

</div>

</div>
