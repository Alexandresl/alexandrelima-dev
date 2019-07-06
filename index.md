---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Home
permalink: /
---

<h1>{{codigos}}</h1>
<div class="row">


    {% if site.posts.size == 0 %}

    <h1>Nenhum post encontrado!</h1>

    {% else %}

    {% for post in site.posts %}

  <div class="col s12 m4 l4 xl4">
    <div class="card white">
      <div class="card-content black-text">
        <span class="card-title red-text">{{ post.title }}</span>
        <p>{{ post.summary }}</p>
        <a href="{{ post.url | prepend: post.baseurl }}"
          class="btn-floating right btn-large waves-effect waves-light red darken-3"><i
            class="material-icons">add</i></a>
      </div>
      <div class="card-action">
        <a class="black-text" href="{{ post.url | prepend: post.baseurl }}">{{ post.date | date_to_string }}</a>
      </div>
    </div>
  </div>
    {% endfor %}

    {% endif %}



  <!--Fim row 1-->