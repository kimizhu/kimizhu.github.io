<div id="page">

# Changes to C\# and .NET Framework

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
4/1/2004 8:39:00
AM

-----

<div id="content">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">[Eric](http://blogs.msdn.com/ericgu/)
points out some of the [new syntax
changes](http://blogs.msdn.com/ericgu/archive/2004/04/01/105644.aspx) we’ve
made in C\# 2.0 for [FCLC
compliance](http://en.wikipedia.org/wiki/Federal_Computer_Language_Commission).<span style="mso-spacerun: yes"> 
</span>These changes could break some of your existing code so you
should make sure to verify 1.1 code when moving to VS 2005
(Whidbey).</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">You should also be
aware of the new BCL changes that will help developers write decent and
non-offensive code, including changes to System.String and a new
exception class.<span style="mso-spacerun: yes">  </span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-FAMILY: Arial">System.String</span>**

**<span style="FONT-FAMILY: Arial"></span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">To check whether a
string contains indecent content, developers can now call the IsIndecent
method which returns true or false if the string is
indecent.<span style="mso-spacerun: yes">  </span>Below is the
copy/paste from ObjectBrowser on one of our latest VS builds
(40326)<span style="mso-spacerun: yes"> 
</span></span><span style="FONT-SIZE: 10pt"></span>

<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">public
static
</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">bool</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">
**IsIndecent**(</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">string</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">
*str*)</span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"><span style="mso-spacerun: yes">   
</span>Member of
</span>**<span class="underline"><span style="FONT-SIZE: 8pt; COLOR: green; FONT-FAMILY: Tahoma">System</span></span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">.</span>**<span class="underline"><span style="FONT-SIZE: 8pt; COLOR: green; FONT-FAMILY: Tahoma">String</span></span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Summary:</span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Determines
whether a specified System.String object is
indecent.<span style="mso-spacerun: yes"> 
</span></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"><span style="mso-spacerun: yes"> </span></span>

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Parameters:</span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

*<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">str</span>*<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">:
A System.String. </span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Return
Values:<span style="mso-tab-count: 1">                                       
</span></span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"><span style="mso-spacerun: yes"> </span>true
if the value of str is indecent, otherwise,
false.<span style="mso-spacerun: yes">  
</span></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Example:</span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 9pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;">if</span><span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;">
(**<span style="COLOR: navy">String</span>**.IsIndecent(text))</span>

<span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;">{
</span>

<span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: &#39;Lucida Console&#39;">//Do
something here<span style="mso-tab-count: 3">             
</span></span>

<span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;">}</span><span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma"><span style="mso-spacerun: yes">  
</span></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: black; FONT-FAMILY: Arial">We have
also added the ability to estimate the cost of an
[FCLC](http://en.wikipedia.org/wiki/Federal_Computer_Language_Commission)
fine based on the contents of a string using a new method,
EstimateFine.</span>

<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">public
static
</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">float</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">
**EstimateFine**(</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">string</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">
*str*)</span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"><span style="mso-spacerun: yes">   
</span>Member of
</span>**<span class="underline"><span style="FONT-SIZE: 8pt; COLOR: green; FONT-FAMILY: Tahoma">System.String</span></span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Summary:</span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Provides
an estimate of an indecency fine based on string contents using
floating-point precision.<span style="mso-spacerun: yes"> 
</span></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"><span style="mso-spacerun: yes"> </span></span>

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Parameters:</span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

*<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">str</span>*<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">:
A System.String. </span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Return
Values:<span style="mso-tab-count: 1">                                       
</span></span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Single-precision
floating point estimate of FCLC fines.<span style="mso-spacerun: yes"> 
</span></span>

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>**

 

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Example:</span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 9pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;">float</span><span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;">
f =
**<span style="COLOR: navy">String</span>**.EstimateFine(text);</span><span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: black; FONT-FAMILY: Arial">Note –
We’ve also added a culture specific overload to EstimateFine which
enables you to estimate indecency fines in other
cultures.<span style="mso-spacerun: yes">  </span>Currently this returns
0.0 except when the culture is set to ‘EN-US’.</span>

<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">public
static
</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">float</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">
**EstimateFine**(</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">string</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">
*str,*
</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">System.Globalization.CultureInfo</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">
*culture*)</span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

<span style="FONT-SIZE: 10pt; COLOR: black; FONT-FAMILY: Arial">We’ve
also changed the behavior of strings so that a string marked with a
public accessor
(ex:</span><span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">
</span><span style="FONT-SIZE: 9pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;">public</span><span style="FONT-SIZE: 9pt; FONT-FAMILY: &#39;Lucida Console&#39;">
<span style="COLOR: blue">string</span>
s;</span><span style="FONT-SIZE: 10pt; COLOR: black; FONT-FAMILY: Arial">)
that contains indecent content will now raise a System.IndecentException
as outlined
below:</span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

**<span style="COLOR: black; FONT-FAMILY: Arial">System.IndecentException</span>**

<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma">public
class **IndecentException** :
</span>**<span class="underline"><span style="FONT-SIZE: 9pt; COLOR: green; FONT-FAMILY: Tahoma">System.Exception</span></span>**<span style="FONT-SIZE: 9pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"><span style="mso-spacerun: yes">   
</span>Member of
</span>**<span class="underline"><span style="FONT-SIZE: 8pt; COLOR: green; FONT-FAMILY: Tahoma">System</span></span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">Summary:</span>**<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma">The
exception that is thrown when the content of a string with a public
access modifier is indecent.<span style="mso-spacerun: yes"> 
</span></span>

<span style="FONT-SIZE: 8pt; COLOR: black; FONT-FAMILY: Tahoma"></span>

 

<span style="FONT-SIZE: 8pt; FONT-FAMILY: Tahoma"></span>

 

**<span style="FONT-FAMILY: Arial">Other keywords</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">We are still debating
this, so any feedback is appreciated.<span style="mso-spacerun: yes"> 
</span>Are any of the following language constructs, classes,
properties, or methods listed below considered offensive or
indecent?</span>

  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">unsafe</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">using</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">sizeof</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">EntryPointNotFoundException</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">MakeDirty()
    (System.Windows.Forms.AxHost)</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">SetDirtyObject
    (System.Web.UI.StateManagedCollection)</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">IsDirty()
    (System.Runtime.InteropServices)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Your feedback, as
always, is appreciated.</span>

</div>

</div>
