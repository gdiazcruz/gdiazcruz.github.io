---
layout: page
title: People
permalink: /people/
nav: true
nav_order: 4
---

# Current Members

{% assign lang = site.lang | default: site.default_lang %}

{% if lang == "es" %}
  {% assign members = site.data.people_es.current %}
{% else %}
  {% assign members = site.data.people_en.current %}
{% endif %}

<div class="people-grid">
{% for person in members %}
  <div class="person-card">
    <img src="{{ person.photo | relative_url }}" width="160">
    
### {{ person.name }}

**{{ person.role }}**

{{ person.description }}

{% if person.website %}
[Website]({{ person.website }})
{% endif %}

  </div>
{% endfor %}
</div>

---

# Alumni

{% if lang == "es" %}
  {% assign alumni = site.data.people_es.alumni %}
  <h2>Exalumnos</h2>
{% else %}
  {% assign alumni = site.data.people_en.alumni %}
  <h2>Alumni</h2>
{% endif %}

<table>
  <thead>
    <tr>
      {% if lang == "es" %}
      <th>Nombre</th>
      <th>Grado</th>
      <th>Año</th>
      <th>Posición actual</th>
      {% else %}
      <th>Name</th>
      <th>Degree</th>
      <th>Year</th>
      <th>Current Position</th>
      {% endif %}
    </tr>
  </thead>

  <tbody>
    {% for person in alumni %}
    <tr>
      <td>{{ person.name }}</td>
      <td>{{ person.degree }}</td>
      <td>{{ person.year }}</td>
      <td>{{ person.current }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
