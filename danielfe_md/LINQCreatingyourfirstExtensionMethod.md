<div id="page">

# LINQ: Creating your first Extension Method

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
9/22/2005 6:47:00 PM

-----

<div id="content">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">I thought I would take
a second and post how you can create your own Extension Method. An
extension method is a specially defined method that acts like a method
defined on a type. LINQ operators, like
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">from</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">,
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">where</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">,
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">select</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">,
etc are implemented using extension methods. For example, the
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">where</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">
clause checks for a Boolean result of a test (ex:
City==”London”).<span style="mso-spacerun: yes">  </span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Creating your first
extension method</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">To show this in
action, I want to create my own custom extension method. While the
method itself may not be incredibly useful, it should hopefully serve as
a simple example of how an extension method works.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Assignment</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Create an extension
method to write values out of an IEnumerable type to the console window,
or better stated in MasterCard commercial style: Not ever having to
write a foreach loop to write something out to the console,
priceless.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">First, let’s look at a
simple LINQ
query:</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">string</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">\[\]
aBunchOfWords =
{<span style="COLOR: maroon">"One"</span>,<span style="COLOR: maroon">"Two"</span>,
<span style="COLOR: maroon">"Hello"</span>,
<span style="COLOR: maroon">"World"</span>,
<span style="COLOR: maroon">"Four"</span>,
<span style="COLOR: maroon">"Five"</span>};</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">var</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
result =<span style="mso-spacerun: yes">   
</span></span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">from</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
s <span style="COLOR: blue">in</span> aBunchOfWords
</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">where</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
s.Length == 5
</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">select</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
s;</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Given this query, I
can write the values out to the console window using the
following:</span>

 

<span>foreach (<span style="COLOR: blue">var</span> s
<span style="COLOR: blue">in</span>
result)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">{</span>

<span><span style="mso-spacerun: yes"> 
</span>Console.WriteLine(s);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">}</span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">This prints
out:</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">Hello</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">World</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Defining my
extension method</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Below is an extension
method with no return type named Write(). The only difference between an
extension method and a normal method is the keyword
</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">this</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">
defined in the first parameter.<span style="mso-spacerun: yes"> 
</span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">this</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">
is basically a pointer to the object that had the method invoked. Note
that extension methods must be static.
</span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">public</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
<span style="COLOR: blue">static</span>
<span style="COLOR: blue">class</span>
<span style="COLOR: teal">Utils</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span><span style="COLOR: blue">public</span>
<span style="COLOR: blue">static</span>
<span style="COLOR: blue">void</span>
Write\<T\>(<span style="COLOR: blue">this</span>
<span style="COLOR: teal">IEnumerable</span>\<T\>
source)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: blue">foreach</span>
(<span style="COLOR: blue">var</span> item
<span style="COLOR: blue">in</span>
source)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span>{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">           
</span><span style="COLOR: teal">Console</span>.WriteLine(item);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span>}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>}</span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Using my previous
example, I can now use my custom Write extension method as shown
below:</span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">result.Write();</span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Like regular methods,
extension methods can also be overloaded. For example, you can create an
overload for the Write method that works on IEnumerable (non-generic)
source as shown
below.</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">public</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
<span style="COLOR: blue">static</span>
<span style="COLOR: blue">void</span>
Write(<span style="COLOR: blue">this</span>
<span style="COLOR: teal">IEnumerable</span>
source)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span><span style="COLOR: blue">foreach</span>
(<span style="COLOR: blue">var</span> item
<span style="COLOR: blue">in</span>
source)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: teal">Console</span>.WriteLine(item);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Like
before, we use the **this** keyword in the method
signature</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: green; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">//Fx
1.1
collection</span>

<span style="FONT-SIZE: 10pt; COLOR: teal; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">ArrayList</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
ar = <span style="COLOR: blue">new</span>
<span style="COLOR: teal">ArrayList</span>();</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">ar.Add(1);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">ar.Add(2);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">ar.Add(3);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: green; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">//calls
my custom extension
method</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">ar.Write();</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">Result:</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">1</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">2</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">3</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">ObjectDumper</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">The
LINQ Project Tech Preview download also includes a great source code
sample called ObjectDumper found at:
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">C:\\Program
Files\\LINQ
Preview\\Samples\\ObjectDumper</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">ObjectDumper
is a class library that let’s you pass an object and, using reflection,
it will write the elements and fields of the object to the Console
Window, including hierarchical
data.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">In
this case, I’m going to write another ExtensionMethod that calls
ObjectDumper so that I can easily call ObjectDumper on any type using
the convenient method call
notation.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">public</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">
<span style="COLOR: blue">static</span>
<span style="COLOR: blue">class</span>
<span style="COLOR: teal">Utils</span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span><span style="COLOR: blue">public</span>
<span style="COLOR: blue">static</span>
<span style="COLOR: blue">void</span>
Write(<span style="COLOR: blue">this</span>
<span style="COLOR: blue">object</span>
source)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: teal">ObjectDumper</span>.Write(source);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span><span style="COLOR: blue">public</span>
<span style="COLOR: blue">static</span>
<span style="COLOR: blue">void</span>
Write(<span style="COLOR: blue">this</span>
<span style="COLOR: blue">object</span> source,
<span style="COLOR: blue">int</span>
depth)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>{</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">       
</span><span style="COLOR: teal">ObjectDumper</span>.Write(source,
depth);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">}</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Here’s
what it would look like on the sample I [blogged about earlier on why
"var"
exists](http://blogs.msdn.com/danielfe/archive/2005/09/22/472884.aspx):</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">var</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">
result =  
<span style="COLOR: blue">from</span> s
<span style="COLOR: blue">in</span> aBunchOfWords  
<span style="COLOR: blue">where</span> s.Length == 5  
<span style="COLOR: green">//Creates a new anonymous type with
name/value
pairs</span><span style="COLOR: blue">  
**<span style="FONT-FAMILY: &#39;Courier New&#39;">select</span>**</span>**<span style="FONT-FAMILY: &#39;Courier New&#39;">
<span style="COLOR: blue">new</span> {Value=s, Length=s.Length,
FirstThreeLetters=s.Substring(0,3)}</span>**;<span style="mso-no-proof: yes"></span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Result</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">Value=Hello<span style="mso-spacerun: yes">    
</span>Length=5<span style="mso-spacerun: yes">       
</span>FirstThreeLetters=Hel</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">Value=World<span style="mso-spacerun: yes">    
</span>Length=5<span style="mso-spacerun: yes">       
</span>FirstThreeLetters=Wo</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">r</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Printing
manually</span>**

<span style="FONT-SIZE: 10pt; COLOR: green; FONT-FAMILY: &#39;Courier New&#39;">//Print
values </span><span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">  
foreach</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">
(<span style="COLOR: blue">var</span> x
<span style="COLOR: blue">in</span>
result)  
<span style="COLOR: teal">Console</span>.WriteLine(<span style="COLOR: maroon">"Value={0}\\t
Length={1}\\t FirstThreeLetter={2}"</span>,  
x.Value, x.Length,
x.FirstThreeLetters);<span style="mso-no-proof: yes"></span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Printing
with my custom extension
method</span>**

<span style="FONT-SIZE: 10pt; COLOR: green; FONT-FAMILY: &#39;Courier New&#39;">//Print
values </span><span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">result.ObjectDump();</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Language
Feature
Abuse</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">While
extension methods are handy, they can, like other language features be
abused. As LINQ becomes more stable, we’re going to need some clear
guidance on when and where to use features. We’re at the earliest stage
in development, so we don’t have these now, but you can certainly
imagine updating class library design
guidelines.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"><span style="mso-spacerun: yes"> </span></span>

</div>

</div>
