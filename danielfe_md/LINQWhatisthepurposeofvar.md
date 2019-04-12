<div id="page">

# LINQ: What is the purpose of var?

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
9/22/2005 1:36:00
PM

-----

<div id="content">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">[Larsenal](https://channel9.msdn.com/Niners/Larsenal),
a C9’er posted a comment on the [C9
forums](https://channel9.msdn.com/ShowPost.aspx?PostID=115804) about the
[Introducing LINQ
video](https://channel9.msdn.com/Showpost.aspx?postid=114680) and asked
a really good question so I thought I should repost my response here.
</span>

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Larsenal's
Question  
</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">“*I've
watched
[this](http://download.microsoft.com/download/4/7/0/4703eba2-78c4-4b09-8912-69f6c38d3a56/LanguageEnhancements.wmv)
video on LINQ in C\#.  If the type is set at compile time, what's the
benefit of using the "var" keyword?  It seems like it just makes the
code less readable.  
  
I look at the first example
[here](http://blogs.msdn.com/danielfe/archive/2005/09/13/464904.aspx),
and wonder why not just replace the
<span style="mso-bidi-font-style: italic">var</span> with
<span style="mso-bidi-font-style: italic">string\[\]?”</span>*****</span>

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">My (slightly
modified) Answer  
</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">If you’ve
never heard of var, var is a new way to declare variables in C\# 3.0
that uses implicit typing. Let’s show a quick couple of examples.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Before 3.0  
string myString = “hello”;  
int myInt = 5;  
float myFloat = 5.5f;</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">After 3.0  
var myString = “hello”;  
var myInt = 5;  
var myFloat = 5.5f;</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The distinction here
is that var is not the same as object, or the JavaScript “var” data type
as it’s actually strongly typed, but **inferred** from whatever the
value is being assigned.</span>

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Create your own
types with var  
</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The big
reason for var in my opinion is that LINQ enables you to create or
"project" wholly new data types without having to create the type
themselves. This is known as
**<span style="FONT-FAMILY: Arial">projection</span>**.  
  
Let's look at a sample query that [I blogged about
earlier](http://blogs.msdn.com/danielfe/archive/2005/09/13/464904.aspx):****</span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">string</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;; mso-no-proof: yes">\[\]
aBunchOfWords =
{<span style="COLOR: maroon">"One"</span>,<span style="COLOR: maroon">"Two"</span>,
<span style="COLOR: maroon">"Hello"</span>,
<span style="COLOR: maroon">"World"</span>,
<span style="COLOR: maroon">"Four"</span>,
<span style="COLOR: maroon">"Five"</span>};</span><span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;"></span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">var</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">
result =  
<span style="COLOR: blue">from</span> s
<span style="COLOR: blue">in</span> aBunchOfWords  
<span style="COLOR: blue">where</span> s.Length == 5  
<span style="COLOR: blue">select</span> s;  
  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">In this
example, I am projecting the string "s",  so I could have easily
replaced var with the type IEnumerable\<string\> as shown in bold below
and my code would have worked
fine.</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;"></span>

**<span style="FONT-SIZE: 10pt; COLOR: teal; FONT-FAMILY: &#39;Courier New&#39;">IEnumerable</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">\<<span style="COLOR: blue">string</span>\>
</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">result
=  
<span style="COLOR: blue">from</span> s
<span style="COLOR: blue">in</span> aBunchOfWords  
<span style="COLOR: blue">where</span> s.Length == 5  
<span style="COLOR: blue">select</span> s;  
  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">But what if I
wanted to project something more complex, like a type that contains   
1\) the string  
2\) the length of the string as an integer  
3\) the first three characters of the substring  
  
Using the power of var, this is pretty easy as shown in bold
below:</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;"></span>

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
FirstThreeLetters=s.Substring(0,3)}</span>**;</span>

<span style="FONT-SIZE: 10pt; COLOR: green; FONT-FAMILY: &#39;Courier New&#39;">//Print
values </span><span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">  
foreach</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">
(<span style="COLOR: blue">var</span> x
<span style="COLOR: blue">in</span>
result)  
<span style="COLOR: teal">Console</span>.WriteLine(<span style="COLOR: maroon">"Value:
{0}, Length:{1}, SubString:{2}"</span>,  
x.Value, x.Length, x.FirstThreeLetters);  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">  
This
prints:  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">Value:
Hello, Length:5, SubString:Hel  
Value: World, Length:5,
SubString:Wor  
  
</span><span style="FONT-SIZE: 10pt; COLOR: black; FONT-FAMILY: Arial">As
you can see, I can use "select new" and project my own custom type with
field name/value pairs. Under the covers var **infers** the field names,
field values, and field data types and creates an anonymous type
with the three fields I projected.  
  
Without var, you would have to create the anonymous type yourself, which
basically means you have to create a custom class for the projected
type as shown
below:</span><span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;"></span>

**<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">public</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">
<span style="COLOR: blue">class</span>
<span style="COLOR: teal">MyType</span></span><span style="FONT-SIZE: 10pt; COLOR: teal; FONT-FAMILY: &#39;Courier New&#39;">  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">{</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">  
<span style="mso-spacerun: yes"> 
</span>**<span style="COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">public</span><span style="FONT-FAMILY: &#39;Courier New&#39;">
<span style="COLOR: blue">string</span> Value;</span>**  
<span style="mso-spacerun: yes"> 
</span>**<span style="COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">public</span><span style="FONT-FAMILY: &#39;Courier New&#39;">
<span style="COLOR: blue">int</span> Length;</span>**  
<span style="mso-spacerun: yes"> 
</span>**<span style="COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">public</span><span style="FONT-FAMILY: &#39;Courier New&#39;">
<span style="COLOR: blue">string</span>
FirstThreeLetters;</span>**  
**<span style="FONT-FAMILY: &#39;Courier New&#39;">}</span>**</span>**

**<span style="FONT-WEIGHT: normal; FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-bidi-font-weight: bold">The
subsequent code would work like shown below (using another new feature,
object
initializers):</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>**

**<span style="FONT-SIZE: 10pt; COLOR: teal; FONT-FAMILY: &#39;Courier New&#39;">IEnumerable</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">\<<span style="COLOR: teal">MyType</span>\></span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;">
result =  
<span style="COLOR: blue">from</span> s
<span style="COLOR: blue">in</span> aBunchOfWords  
<span style="COLOR: blue">where</span> s.Length ==
5  
**<span style="COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">select</span><span style="FONT-FAMILY: &#39;Courier New&#39;">
<span style="COLOR: blue">new</span>
<span style="COLOR: teal">MyType</span> {Value=s, Length=s.Length,
FirstThreeLetters=s.Substring(0,3)}</span>**;  
  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">While I get the
same results as in the previous example, you can see how var saves me
the trouble of defining my own type. In the var example, the compiler is
creating its own version of the "MyType" class, but you as a LINQ
developer don't need to worry about that, but If you really don't like
var, you can of course manually create your own class and map them to
LINQ queries as I showed above and everything will still "just work".  
  
When you're dealing with projection, var is awesome in that it really
eliminates the grunt work of defining your own type, which, when you get
to nested types can be pretty ugly :)  
  
You can find a whole slew of projection operator samples at:
<http://msdn.microsoft.com/vcsharp/future/linqsamples/projection/default.aspx>  
  
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: &#39;Courier New&#39;"></span>

 

</div>

</div>
