---
title: The Move to Jekyll
author: ida
excerpt: 'Why I moved my portfolio website off WordPress and onto the static site generator Jekyll, including links to the best resources on the topic. '
layout: post
permalink: /2015/04/move-to-jekyll/
tags:
  - 'Reflections'
---

I learned to develop for the internet because of [WordPress](https://wordpress.org/). In the past 6 years, I made over 20 custom WordPress sites for my own projects and for clients. It's easy to start with small edits on available themes, move to making themes from scratch and later mess with plugins. As my development skills got better, I no longer needed a full blown content management system (CMS) like WordPress to present my own projects online. I bypassed Wordpress to just write vanilla HTML, CSS, and PHP. 


<ul class="small-block-grid-2">

<li>
<img class="block-th" src="{{ site.baseurl }}/images//2015/wordpress.jpg" />
    </li>

    <li>
<img class="block-th" src="{{ site.baseurl }}/images//2015/jekyll.png" />
    </li>

</ul>



### Time for A Change

Until recently, my portfolio site was a bloated, clumsy implementation of WordPress. I used it as a testing ground for too many new technologies, from JavaScript plugins I didn't fully understand to a content distribution network (CDN), which worked fine but was unnecessary for a small site with minimal traffic like mine. The design and some of the content were out of date as well. I design the site to attract freelance work in web development and event production. Now I do most of my projects through [Sextanworks](http://sextant.works/). My personal portfolio site needed to serve a new function.

I was ready for something new.

[SFPC](http://sfpc.io/), where I teach and sit on the steering committee, moved its site to [Jekyll](http://jekyllrb.com/). [Casey and Zach developed the site](https://github.com/SFPC/sfpc.github.io), and it was an interesting process to watch. Jekyll is a static site generator. A static site generator is like a CMS in that the content, structure, and style of a site are in separate files. They differ in that the static site generator compiles the website on your local development environment before it's published to a web host. No need for a server to assemble a page each time it's requested.  

I decided to give it a try. In a weekend, I completely redesigned my site and ported the WordPress content over to Jekyll.


<ul class="small-block-grid-2">

<li>
The Old Site
<img class="block-th" src="{{ site.baseurl }}/images//2015/2015-03-21_OldPortfolioSite_BlogPost.jpg" />
</li>

<li>
The New Site (You're looking at it!)
<img class="block-th" src="{{ site.baseurl }}/images//2015/2015-03-21_NewWebsite_BlogPost.jpg" />
</li>

</ul>


### Resources

After sifting through countless blog posts and tutorials, here are the Jekyll resources that I can recommend:

* Podcast: [The Web Ahead Episode 54](http://www.thewebahead.net/54)
    
    An hour long conversation about where static site generators sit in the evolution of the web, including commentary from the people who build the healthcare.gov site on Jekyll. Start here for context on what static site generators are and what it means to work on a large scale project with one.
* Screencast: [Static Websites with Jekyll](http://www.pluralsight.com/courses/static-websites-with-jekyll)
    
    This is the only substantive screencast I could find on building sites in Jekyll. It's an hour long and covers all the basics.

* The Official Stuff: [The Jekyll documentation](http://jekyllrb.com/docs/home/)

* Helpful blog post with instruction on migration: 

    - [How-to: Migrating Blog from WordPress to Jekyll and Host on Github](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/)

    - [Moving from WordPress to Jekyll](http://red-team-design.com/moving-from-wordpress-to-jekyll/)

    - [From Wordpress to Jekyll](http://blog.8thcolor.com/en/2014/05/migrate-from-wordpress/)





### The Process

Here's what I did to move my site:

1. Followed instructions in [this blog post](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/) to export comments to Disqus
2. Exported content out of WordPress with the [Jekyll Exporter Wordpress Plugin](https://wordpress.org/plugins/jekyll-exporter/) (This produced much better results than doing a standard export from WordPress and using the Jekyll WordPress importer.)
3. [Downloaded Jekyll](http://jekyllrb.com/docs/quickstart/) and dropped the exported content into a fresh installation of Jekyll. 
3. Removed legacy WordpPress code, especially blog posts with image styling.
4. Coded out the design with the help of [Zurb Foundation](http://foundation.zurb.com/). I was hoping to use Grunt while developing the site. I've used CodeKit and look forward to dropping, a but the version of Foundation that I used doesn't support it. As I code, two terminal windows run 'compass watch' and 'jekyll serve'. Easy.
5. Publish! Any Jekyll site can be hosted with a custom URL for free on GitHub, but I have been deploying most of my repos with [Beanstalk](http://beanstalkapp.com/), so I just stuck with that workflow. Much like my relationship to WordPress, maybe I'm a good enough developer now to move off of beanstalk and start deploying with Capistrano or some other option that works with GitHub. 



### The Results

My website is way fast. Way, way faster. Others have seen [great speed improvements](http://euri.ca/2012/wordpress-vs-jekylloctopress-speed-test/index.html), too.

Editing markdown and serving a Jekyll site is a great compromise between coding out the sites with just HTML, CSS, and PHP and using a CMS like WordPress. I'm enjoying the best of both worlds.



###What's Next?

Will I keep using Wordpress? Yes, but specific purposes that suit client needs and encompass more involved functionality. WordPress is a powerful open source project with a lot of history, a knowledgeable community, and tons of resources.

That said, a shift is in play.

Sites that I would have custom designed for clients on WordPress 3 or 4 years ago are being created on hosted services like [Squarespace](https://en.wikipedia.org/wiki/Squarespace) by would-be clients themselves today. Developers who would use WordPress to host their own simple sites because it was the best option are moving to static site generators in droves. How we create, organize, and host content online will soon look nothing like the content management systems that have been evolving over the past decade. 



_I wrote this blog post at the 2015 [<Write/Speak/Code>](http://www.writespeakcode.com/) conference, and amazing organization empowering women software developers to become thought leaders._

