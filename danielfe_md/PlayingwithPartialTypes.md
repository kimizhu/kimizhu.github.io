<div id="page">

# Playing with Partial Types

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/2/2004 7:40:00 PM

-----

<div id="content">

I've been playing around with Partial Types in Visual Studio “Whidbey“
after a developer asked me how the Extract Interface refactoring will
work when applied to partial types. First a quick primer on partial
types -

  - Partial types lets you split the definition of a type (like a class)
    into multiple files.  Visual Studio “Whidbey“ will, for example,
    divide VS *designer* generated code into one class and *user*
    written code into another.
  - When declaring a partial class, use the “partial“ keyword in the
    class definition: partial class MyPartialClass.
  - Partial types behave like just like regular types, except that the
    class is now divided into multiple files.
  - A partial type can be compiled without need all of its matching
    files, so multiple developers could divide a large class into
    working chunks and not interfere with each other (although you would
    obviously need the other partial class files if you reference code
    that is declared in another partial class).
  - Partial types are not limited to two files. In the example below,
    the class MyPartialClass is divided into three files - class1.cs,
    class2.cs and foo.cs.
  - If you're using the command line compiler, there is no messy
    linking, to use partial classes, just point to the files and add all
    the references you would need as if the class was declared in one
    file. Ex: “csc class1.cs, class2.cs, foo.cs“.
  - Visual Studio “Whidbey“ has full support for partial types (as
    you'll read below).

**  
Refactoring partial classes**

  - Invoking the Extract Interface refactoring will work the same for
    partial classes as it will for regular classes, meaning public
    non-static methods will be available to extract into an
    interface.  For example, I ran the Extract Interface refactoring
    on MyPartialClass and the dialog window will list \*both\* overloads
    for the foo method, even though they are each declared in separate
    files. For convenience sake, I copy/pasted the extracted interface
    into Class1.cs.

**Interfaces and partial classes**

  - You can declare the interface in one partial class, and
    *implement* the interface across multiple partial classes.  If you
    do not fully implement the interface in all of the partial classes,
    you will get an error saying that you haven't fully implemented the
    interface, which is again the same behavior as if the class was
    declared in one file. In the example below, the file class2.cs
    *declares* the IPartialClass interface and the
    IPartialClass interface is *implemented* in multiple files -
    class2.cs and foo.cs.

**IntelliSense for variables declared in partial classes**

  - A variable declared in one partial class is available through
    IntelliSense across all of the partial classes (assuming correct
    scope).  In the example below,  Class1.cs declares a
    variable, private string s, and both the methods in the files
    Class2.cs and foo.cs can use this variable.

**Method overloads in partial classes**

  - You can split method overloads into separate partial classes, but,
    just like a regular class, the method signature must be different
    for each overload our you'll get an error saying that you have
    already defined the method in the given class.  In the example
    below,  two partial classes, class2.cs and foo.cs each define a
    method named foo, but with different method signatures - foo(string
    PrintString) & foo().
  - IntelliSense fully understands method overloads even if they are
    declared in multiple files.  In the example below, Class1.cs has a
    class named TestClass that calls the overloaded method foo.  Using
    IntelliSense in the Main() method, the developer will see both
    method overloads just like a regular
class. 

 

<span style="WIDTH: 90%; BACKGROUND-COLOR: #ffffcc" size="2" data-dtid="144698448929619979" data-<font="" data-face="Arial">**Class1.cs**
</span>

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929619985">  
using</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929619986">
System;</span>

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929619992">interface</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929619993">
**<span style="COLOR: navy" data-dtid="144698448929619995">IPartialClass</span>**<span style="COLOR: navy" data-dtid="144698448929619996"></span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929619999">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620002"><span style="mso-tab-count: 1" data-dtid="144698448929620003">    
</span><span style="COLOR: blue" data-dtid="144698448929620004">void</span>
foo(<span style="COLOR: blue" data-dtid="144698448929620005">string</span>
s);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620008"><span style="mso-tab-count: 1" data-dtid="144698448929620009">    
</span><span style="COLOR: blue" data-dtid="144698448929620010">void</span>
foo();</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620013">}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620016"></span>

 

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620019"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620022">partial</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620023">
<span style="COLOR: blue" data-dtid="144698448929620024">class</span>
**<span style="COLOR: navy" data-dtid="144698448929620026">MyPartialClass</span>**<span style="COLOR: navy" data-dtid="144698448929620027"></span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620030">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620036"><span style="mso-tab-count: 1" data-dtid="144698448929620037">    
</span><span style="COLOR: blue" data-dtid="144698448929620038">private</span>
<span style="COLOR: blue" data-dtid="144698448929620039">string</span> s
= "Hello
World";</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620042">}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620045"></span>

 

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620048"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620051">class</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620052">
**<span style="COLOR: navy" data-dtid="144698448929620054">TestClass</span>**<span style="COLOR: navy" data-dtid="144698448929620055"></span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620058">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620061"><span style="mso-tab-count: 1" data-dtid="144698448929620062">    
</span>\[**<span style="COLOR: navy" data-dtid="144698448929620064">STAThread</span>**\]</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620067"><span style="mso-tab-count: 1" data-dtid="144698448929620068">    
</span><span style="COLOR: blue" data-dtid="144698448929620069">static</span>
<span style="COLOR: blue" data-dtid="144698448929620070">void</span>
Main(<span style="COLOR: blue" data-dtid="144698448929620072">string</span>\[\]
args)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620075"><span style="mso-tab-count: 1" data-dtid="144698448929620076">    
</span>{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620079"><span style="mso-tab-count: 2" data-dtid="144698448929620080">          
</span>**<span style="COLOR: navy" data-dtid="144698448929620082">MyPartialClass</span>**
MyClass =
<span style="COLOR: blue" data-dtid="144698448929620083">new</span>
**<span style="COLOR: navy" data-dtid="144698448929620085">MyPartialClass</span>**();</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620079">
</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 2">          
</span>MyClass.foo("Print
this");</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 2">          
</span>MyClass.foo();</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 2">          
</span>**<span style="COLOR: navy">Console</span>**.ReadLine();</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620088"><span style="mso-tab-count: 2" data-dtid="144698448929620089">    
</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620092"><span style="mso-tab-count: 1" data-dtid="144698448929620093">    
</span>}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620096">}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620099"></span>

 

  
  
<span style="WIDTH: 90%; BACKGROUND-COLOR: #ffffcc" size="2" data-dtid="144698448929619979" data-<font="" data-face="Arial">**Class2.cs**
</span><span style="BORDER-RIGHT: navy solid; PADDING-RIGHT: 4px; BORDER-TOP: navy solid; PADDING-LEFT: 4px; PADDING-BOTTOM: 4px; BORDER-LEFT: navy solid; WIDTH: 90%; PADDING-TOP: 4px; BORDER-BOTTOM: navy solid" data-dtid="144698448929620107">
</span>

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620109"></span> 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620111">using</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620112">
System;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620115"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620118">public</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620119">
<span style="COLOR: blue" data-dtid="144698448929620120">partial</span>
<span style="COLOR: blue" data-dtid="144698448929620121">class</span>
**<span style="COLOR: navy" data-dtid="144698448929620123">MyPartialClass</span>**
:
**<span style="COLOR: navy" data-dtid="144698448929620125">IPartialClass</span>**<span style="COLOR: navy" data-dtid="144698448929620126"></span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620129">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620132"><span style="mso-tab-count: 1" data-dtid="144698448929620133">    
</span><span style="COLOR: blue" data-dtid="144698448929620134">public</span>
<span style="COLOR: blue" data-dtid="144698448929620135">void</span>
foo(<span style="COLOR: blue" data-dtid="144698448929620136">string</span>
PrintString)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620139"><span style="mso-tab-count: 1" data-dtid="144698448929620140">    
</span>{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620143"><span style="mso-tab-count: 2" data-dtid="144698448929620144">          
</span>**<span style="COLOR: navy" data-dtid="144698448929620146">Console</span>**.WriteLine(PrintString <span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;">+
" "
+</span> s);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620150"><span style="mso-tab-count: 1" data-dtid="144698448929620151">    
</span>}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620154">}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620156"></span> 

 

<span style="WIDTH: 90%; BACKGROUND-COLOR: #ffffcc" size="2" data-dtid="144698448929619979" data-<font="" data-face="Arial">**foo.cs**
</span><span style="BORDER-RIGHT: navy solid; PADDING-RIGHT: 4px; BORDER-TOP: navy solid; PADDING-LEFT: 4px; PADDING-BOTTOM: 4px; BORDER-LEFT: navy solid; WIDTH: 90%; PADDING-TOP: 4px; BORDER-BOTTOM: navy solid" data-dtid="144698448929620158"><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620159"><span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620111">using</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620112">
</span>System;</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620160"></span></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620164">partial</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620165">
<span style="COLOR: blue" data-dtid="144698448929620166">class</span>
**<span style="COLOR: navy" data-dtid="144698448929620168">MyPartialClass</span>**<span style="COLOR: navy" data-dtid="144698448929620169"></span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620172">{  
</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620174"><span style="mso-tab-count: 1" data-dtid="144698448929620175">   
</span><span style="COLOR: blue" data-dtid="144698448929620176">public</span>
<span style="COLOR: blue" data-dtid="144698448929620177">void</span>
foo()</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620180"><span style="mso-tab-count: 1" data-dtid="144698448929620181">    
</span>{  
</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620183"><span style="mso-tab-count: 2" data-dtid="144698448929620184">          
</span>**<span style="COLOR: navy" data-dtid="144698448929620186">Console</span>**.WriteLine(s);  
</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;" data-dtid="144698448929620188"><span style="mso-tab-count: 1" data-dtid="144698448929620189">    
</span>}  
}</span>

  
  

</div>

</div>
