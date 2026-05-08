---
layout: page
title: equipo
permalink: /people/
nav: true
nav_order: 4
---

{% assign lang = site.lang | default: site.default_lang %}

{% if site.active_lang == site.default_lang %}
  <a class="nav-link" href="/people/">EN-US</a>
{% else %}
  <a class="nav-link" href="/{{ site.active_lang }}/people/">EN-US</a>
{% endif %}

<div class="people-section">
  <h1>{{ data.labels.current_members }}</h1>

  <div class="people-grid">
    {% for person in data.current %}
    <div class="person-card">

      {% if person.photo %}
      <img
        class="person-photo"
        src="{{ person.photo }}"
        alt="{{ person.name }}"
      >
      {% endif %}

      <h3>{{ person.name }}</h3>

      <p class="person-role">{{ person.role }}</p>

      <p class="person-description">
        {{ person.description }}
      </p>

      {% if person.website %}
      <a
        class="person-link"
        href="{{ person.website }}"
        target="_blank"
      >
        {{ data.labels.website }}
      </a>
      {% endif %}

    </div>
    {% endfor %}
  </div>
</div>

<hr>

<div class="people-section">
  <h1>{{ data.labels.alumni }}</h1>

  <div class="alumni-grid">
    {% for alum in data.alumni %}
    <div class="alumni-card">

      <h4>{{ alum.name }}</h4>

      <p>
        <strong>{{ alum.degree }}</strong>
      </p>

      <p>{{ alum.year }}</p>

      <p class="alumni-position">
        {{ alum.current }}
      </p>

    </div>
    {% endfor %}
  </div>
</div>
