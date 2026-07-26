
const currentUrl = window.location.href;
const siteUrl = "https://gdiazcruz.github.io"; 
let updatedUrl = currentUrl.replace("https://gdiazcruz.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("es".length > 0) {
  updatedUrl = updatedUrl.replace("/es", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-acerca-de",
    title: "Acerca de",
    section: "Menú de navegación",
    handler: () => {
      window.location.href = "/es/";
    },
  },{id: "nav-publicaciones",
          title: "publicaciones",
          description: "publicaciones en orden cronológico inverso.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es/publications/";
          },
        },{id: "nav-proyectos",
          title: "proyectos",
          description: "Find out about our work.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es/people/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es/cv/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Publicaciones",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Publicaciones",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/assets/pdf/en-us/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2021/diagrams/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2020/twitter/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2018/distill/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Publicaciones",
      handler: () => {
        
          window.location.href = "/es/blog/2015/formatting-and-links/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/es/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/es/books/pt-br/the_godfather/";
            },},{id: "news-el-año-académico-ha-iniciado",
          title: 'El año académico ha iniciado',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/es/news/es/announcement_1/";
            },},{id: "news-avances-en-marañón",
          title: 'Avances en marañón',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/es/news/es/announcement_2/";
            },},{id: "news-las-pruebas-con-fungicidas-están-en-progreso",
          title: '¡Las pruebas con fungicidas están en progreso!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/es/news/es/announcement_3/";
            },},{id: "news-atención-nueva-publicacion",
          title: '¡Atención! ¡NUEVA PUBLICACION!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/es/news/es/announcement_4/";
            },},{id: "news-continuamos-trabajando",
          title: '¡Continuamos trabajando!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/es/news/es/announcement_5/";
            },},{id: "news-mario-presented-our-research-results-in-the-cfcs-annual-meeting",
          title: 'Mario presented our research results in the CFCS annual meeting!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/es/news/en-us/announcement_6/";
            },},{id: "projects-streptomyces",
          title: 'Streptomyces',
          description: "Caracterización de Streptomyces fitopatógenos en Costa Rica",
          section: "Proyectos",handler: () => {
              window.location.href = "/es/projects/es/1_project/";
            },},{id: "projects-cashew-tree-diseases",
          title: 'Cashew tree diseases',
          description: "Caracterización de potenciales patógenos asociados a la muerte descendente del marañón",
          section: "Proyectos",handler: () => {
              window.location.href = "/es/projects/es/2_project/";
            },},{id: "projects-tizón-foliar-de-la-cebolla",
          title: 'Tizón foliar de la cebolla',
          description: "Investigando las comunidades microbianas asociadas al tizón foliar de la cebolla",
          section: "Proyectos",handler: () => {
              window.location.href = "/es/projects/es/3_project/";
            },},{
        id: 'social-email',
        title: 'Envía un email',
        section: 'Redes sociales',
        handler: () => {
          window.open("mailto:%67%75%73%74%61%76%6F.%64%69%61%7A%63%72%75%7A@%75%63%72.%61%63.%63%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://github.com/gdiazcruz", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Gustavo-Diaz-Cruz/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mUJjOd8AAAAJ", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Cambiar a modo claro',
      description: 'Cambiar a modo claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Cambiar a modo oscuro',
      description: 'Cambiar a modo oscuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usar modo por defecto',
      description: 'Cambiar al modo por defecto',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
