<div id="page">

# Testing compatibility for Whidbey/Everett

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
12/3/2003 6:01:00 PM

-----

<div id="content">

\*\*Update\*\*  
Clarification via [EricGu](blogs.gotdotnet.com/ericgu/)...having an
Everett assembly reference a Whidbey assembly is not a
supported scenario, plus generic metadata will cause weird things to
happen. *   
*Thanks Eric :)   
\*\*\*\*  
  
Someone sent a question recently to an internal alias so I thought I
would share. The question was what will happen when a C\# V1 component
consumes a C\# V2 component that exposes a generic class.  First some
background information, there are two types of compatibility, backward
compatibility and forward compatibility. 

  - Backward compatibility refers to a future version of a product, like
    Whidbey, supporting already existing functionality like something
    found in .
  - Forward compatibility refers to an older product, like
    Everett, being able to support a new feature like generics.

As you can imagine, it's easier to add backward compatibility since it
is a *known* thing.  Designing for forward compatibility can be more
difficult as it is an *unknown* thing.  The goal of C\# Whidbey is
geared more towards backward compatibility so that if you write a
component today for version 1.x, your component will "just work" in C\#
Whidbey. 

I decided to test what forward compatibility will work with the current
Tech preview for a VS Whidbey component to be used in VS 2003. To test
forward compatibility, I created a simple generic class with two static
methods.  The first method returns a generic collection, the second
returns a non-generic collection.

**V2
Code**

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Courier New&#39;">public</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;">
<span style="COLOR: blue">class</span>
**<span style="COLOR: navy">GenericClass</span>**<span style="COLOR: navy">
</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;">
</span>

 

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 1">    
</span><span style="COLOR: blue">public</span>
<span style="COLOR: blue">static</span>
**<span style="COLOR: navy">List</span>**\<<span style="COLOR: blue">int</span>\>
ReturnGeneric()</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 1">    
</span>{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 2">          
</span>**<span style="COLOR: navy">List</span>**\<<span style="COLOR: blue">int</span>\>
l = <span style="COLOR: blue">new</span>
**<span style="COLOR: navy">List</span>**\<<span style="COLOR: blue">int</span>\>();</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 2">          
</span>l.Add(1);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 2">          
</span><span style="COLOR: blue">return</span>
l;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 1">    
</span>}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 1">    
</span>
</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 1">    
</span><span style="COLOR: blue">public</span>
<span style="COLOR: blue">static</span>
**<span style="COLOR: navy">ArrayList</span>**
ReturnNonGeneric()</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 1">    
</span>{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 2">          
</span>**<span style="COLOR: navy">ArrayList</span>** ar =
<span style="COLOR: blue">new</span>
**<span style="COLOR: navy">ArrayList</span>**();</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 2">          
</span>ar.Add(1);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 2">          
</span><span style="COLOR: blue">return</span>
ar;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;"><span style="mso-tab-count: 1">    
</span>}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Courier New&#39;">}</span>

I added a reference to the GenericClass in VS 2003. Using IntelliSense,
the only method that is available to execute is
GenericClass.ReturnNonGeneric() since VS 2003 doesn't understand a
non-generic type.  Since VS 2003 doesn't understand generic types it
can't call the ReturnGeneric() method.

</div>

</div>
