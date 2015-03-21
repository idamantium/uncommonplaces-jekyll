---
title: 'The Move to Jekyll'
excerpt: 'Why I moved my WordPress site to Jekyll, inclding links to the best resources I've found on the static site generator.'
layout: post
permalink: /2015/03/the-move-to-jekyll/

tags:
  - 'Reflections'
---

I learned to develop for the internet because of WordPress. In the past 6 years, I made over 20 custom WordPress sites for my own projects and for clients. It's easy to start with small edits on available themes, move to making themes from scratch and later mess with plugins. As my development skills got better, I no longer needed a full blown CMS to present my own projects online. I bypassed Wordpress to just write a vanilla HTML, CSS, and PHP site. 

Until recently, my portfolio site was a bloated, clumsy implementation of WordPress. I used my portfolio as a testing ground for too many new technologies, from JavaScript plugins I didn't fully understand to a CDN, which worked fine but was unnecessary for a small site with minimal traffic like mine. The design and some of the content were out of date as well. I design the site to attract freelance work in web development and event production. Now I do most of my projects through Sextanworks. My personal portfolio site needed to serve a new function.

I was ready for something new.

SETUP

SFPC, where I teach and sit on the steering committee, moved its site to Jekyll. Casey and Zach developed the site, and it was an interesting process to watch. I decided to give it a try. In a weekend, I completely redesigned my site and ported the WordPress content over to Jekyll.


STEPS

In researching Jekyll, here are the ones I can recommend:

* Podcast: [The Web Ahead Episode 54](http://www.thewebahead.net/54)
    ** An hour long conversation about where static site generators sit in the evolution of the web, including commentary form the people who build the healthcare.gov site on jekyll. Statr here for context on what static site generators are and what it means to work on a large scale project with one.
* Screencast: [Static Websites with Jekyll](http://www.pluralsight.com/courses/static-websites-with-jekyll)
   **  This is the only substantive screencast I could find on building sites in Jekyll. It's an hour long and covers all the basics.
* Helpful blog post with instruction on migration: 

        1.[How-to: Migrating Blog from WordPress to Jekyll, and Host on Github](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/)
        2.[Moving from WordPress to Jekyll](http://red-team-design.com/moving-from-wordpress-to-jekyll/)
        3.[From Wordpress to Jekyll](http://blog.8thcolor.com/en/2014/05/migrate-from-wordpress/)

* The official stuff: [The Jekyll documentation](http://jekyllrb.com/docs/home/)



What I did:

* Followed instructions in [this blog post](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/) to export comments to Disqus
* Exported content out of wordpress with the [Jekyll Exporter Wordpress Plugin](https://wordpress.org/plugins/jekyll-exporter/)

I set up the design as a jekyll site with the help of Zurb Foundation. 
The content had a lot of legacy code from wordpress, especially blog posts with images.  had to strip out a bunch of leftover html from Wordpress. not completely done, but getting close.

I was hoping to use grunt with the site, but the version of foundation that i was using doesn't support it. so to generate the site, i have sass and Jekyll running in a terminal window. that's really all it takes. i could host for free on Wordpress, but i have been deploying most of my repos with beanstalk, so i just wen with that work flow. much like my relationship to wordpress, maybe i'm a good enough developer now to move off of beanstalk and start deploying with capestrano or some other option that works with github. 



RESULTS
site is way faster
nice compromise between coding out the sites with just HTML, CSS, and PHP and using a CMS like wordpress.
still need to implement some features, like comments. will get there. for now, super happy.
will i still keep using Wordpress? yes. but specific purposes like for clients and more complicated sites.

- many of the wordpress sites i did could be done on square space. interesting to see new options.


--
resources:
http://www.thewebahead.net/54 - great conversation about where static site generators sit in the evolution of the web, including commentary form the people who build the healthcare.gov site on jekyll
http://www.pluralsight.com/courses/static-websites-with-jekyll - basic screencast walking through a site build out
need links to wordpress migration posts