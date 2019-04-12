<div id="page">

# Session Notes: Life on the Bungie Farm: Fun Things to do with 180 servers and 350 processors

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/22/2008 2:48:48 AM

-----

<div id="content">

**Speakers:** Luis Villegas, Sean Shypula from Bungie

**Distributed client/server system**

  - split up, runs it in parallel

  - processes user submitted tasks in parallel

  - 180 rackmounted machines 300 processes

  - can use

  - 
**Advantages**

  - speed up time consuming tasks - (rendering goes from day to a few
    hours)
  - see results of work more frequently which means more iteration which
    enables adding more polish
  - Automates complex processes and reduces human error, (
  - click a  button and get email when job is complete

**Main processes on the farm**

  - 3 main
  - Binary builds - game exes and tools
  - Lightmap rendering
      - All of the levels static lighting is baked into the map files
      - precomputed lighting
      - baked into level files
  - Content builds
      - Raw assets into monolithic level files that ship on disc
  - Other tasks - shaper compilation, cubemap rendering, production
    builds of bungie.net Web site, jobs that patch machines (OS,
    administrative tasks)

**Bungie Farm**

  - 3rd iteration
  - Halo 1 - Asset process done by hand, little automation
  - Halo 2 - automated different systems and distributed complex tasks -
    automate binary and lightmap systems, but they were different
    systems
  - Halo 3 - Unified systems into a single extensible system - unify all
    the systems

**Achieved During Halo 3**

  - Unified codebases implemented a single system that is flexible and
    generic
  - Unified server pools, one farm for all
  - Updated the technology to .NET (rewrote in C\#), the goal there was
    to make it as easy as possible to develop and maintain

**What our system has done**

  - 50,000 jobs
      - 11K binary builds
      - 9K lightmap jobs
      - 28K job of other types
  - Huge timesaver and reduces artist/dev time

**End User experience**

  - Make it as easy to use as possible, press a button and magic happens
  - Users get the result back

**Interfaces (Build)**

  - Web based tools and RSS enabled
  - Build running on system, kick off new build
  - Status - shows status of each of the build configs, shows red if it
    fails and shows log for each build
  - Changes - would see a list of files that changed
  - Shows permachine status - Idle or not

 

Random message on Bungie slides: non facete nobis calcitrare vestrum

Designer - Kicking off lightmap jobs from their tools

  - Lightmap Monitor UI - View status of all maps in game whether they
    are up-to-date, which sections still need to be done

 

**Architecture**

  - Single system with multiple workflows
  - Plug-in based
  - Workflows divided into client/server based
  - Single centralized server, multiple client
      - Not peer-to-peer, just communicate with server
      - Server manages each job's state including serializing/persisting
        state
      - Communication is doing using SQL Server

**Information Flow**

  - Web server\> SQL Server\> controller server \> farm

**Binary Build site**

  - Automates code compilation, automated test process
  - Create a snapshot of source tree and symbols for each build
  - Default is incremental buids (diffs)
  - continuous integration and scheduled builds
      - Devs do on-demand, scheduled builds are run at night
  - Builds take 15 minutes on the farm

**Debugging improvement**

  - manual process of debugging (finding/copying files before attaching
    to box)
  - Get rid of manual steps
  - Use Symbol Server - Debugging Tools for Windows
      - Symbols registered on a server, registered by the build site
        once all configurations finish
  - Source Stamping (Visual Studio)
      - Linker setting to specify the official location of that build's
        source code (/SOURCEMAP)
          - Step through code and VS will automatically grab the code
            and pull it down
  - Engineer can attach to any box from any machine with VS installed
      - Correct source and symbols downloaded automatically

**Lightmap Farm**

  - \[shows beautiful before/after shots\]
  - Most consuming farm process
  - Lightmapper was written specifically to be run on farm
      - Specify a chunk of work per machine (distribute work)
      - Merge the results
  - Simple load-balancing scheme
      - Each job can be configured

Cubemap Farm

  - Used for in-game reflection
  - requires to run on Xbox dev kits, expanded farm to include Xbox dev
    kits

All slides are available on bungie.net

 

**Implementation Details**

  - C\# and .NET, very pleased with the decision
  - Stick with C\# for tools development in the forseeable future

**.NET XML Serialization**

  - Originally chose an XML Serialization scheme - ran into issues
      - .NET dynamically creates a DLL for each serialization type and
        loads its own appdomain, some A/V software could lock during
        serialiation calls
  - Moved to binary serialization, faster, used less memory, consumed
    less DB space

**Memory Management**

  - GC - Server memory could grow out of control or even cause crashes,
    GC would only happen under really high memory pressure, by that
    point slowdowns already occur
      - Workaround: explicit GC, be smart about it, do it right after a
        task is complete
  - Bottom line: still need to keep memory usage in mind

**Plug-ins**

  - Each workflow implemented as client/server plug-ins
  - Each plug-in is a DLL
  - Isolate failures to a single DLL, if job/plug-in crashes, all other
    jobs are unaffected
      - Only kept a single active job in memory at a time
      - Inactive jobs are serialized into DB
      - If there was a crash, remove the job and move on to the next one

**SQL Messaging**

  - Senders post tot a table - recipent polls table
  - Benefits
      - transactional, fault tolerant
  - Drawbacks
      - Difficult scaling to multiple clients
      - SQL DB maintenance (if DB went down, whole farm stopped)
      - Messages aren't immediately received

**Future Development**

  - Dynamic allocation of machines for certain tasks (build/lightmap job
    that was a priority and needed to be rushed through)
  - Ability to restart a job from a specific point
  - Improve admin tools
  - Create a test farm
  - Extend systems to idle PCs
  - WCF - for communication - could replace SQL messaging system we have
  - WF - Workflow foundation - farm is essentially a collection of
    workflows

**Implementing a Distributed Farm**

  - Don't need a very large farm to get benefits of
    automation/distribution
  - Farm Middleware packages - Starting from scratch, would consider
    middleware packages (didn't exist or weren't mature enough when we
    started)
  - Automate simple but widely used tasks, 1 or 2 PCs to run jobs, build
    process is a great system to start with
  - Focus on usability

 

Q: How do you take advantage of multiproc machines?  
A: Farm code is multithreaded

Q: How many people oversee farm?  
A: It's me, takes a significant portion of my time

 

**Final** - Bungie would not have been able to ship Halo 3 at the same
quality level with out the farm in place. Studio iteration time and
efficiency are key.

</div>

</div>
