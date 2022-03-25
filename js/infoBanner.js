AFRAME.registerComponent("info-banner",{
    schema : {
        itemId : {type : "string",default : ""}
    },
    update: function () {
        this.createBanner();
      },
    createBanner : function(){
        postersInfo = {
            aot: {
              banner_url: "./assets/posters/aot-banner.jpg",
              title: "Shingeki no kiojin",
              released_year: "2013 - 2022",
              description:
                "Shingeki no kiojin, when translated is Attack on Titan, is a dark fantasy manga and anime series first released on 2013. Its set in a post-apolytic world where remains of humanity lives behind walls which protect them giant humanoid titans. The protagonist loses his mother when the outermost wall is broken down by titans. He vows to destroy the race of titans.",
            },
            "blue-period": {
              banner_url: "./assets/posters/blue-period-banner.jpg",
              title: "Blue Period",
              released_year: "2021",
              description:
                "Tsubasa Yaguchi, a popular student who excels in school, is bored with his monotonous life. He finds joy in painting when deeply inspired by a painting he saw at his school club",
            },
            "tokyo-ghoul": {
              banner_url: "./assets/posters/tokyo-ghoul-banner.jpg",
              title: "Tokyo Ghoul",
              released_year: "2011 and 2014",
              description:
                "Tokyo Ghoul is a dark fantasy manga illustrated and released by Sui Ishida. It is set in an alternate world where ghouls - flesh eating organisms, who look like humans are present ",
            },
            "jujutsu-kaisen": {
              banner_url: "./assets/posters/jujutsu-kaisen-banner.jpg",
              title: "Jujutsu Kaisen",
              released_year: "2018",
              description:
                "Jujutsu kaisen is a manga issued and illustrated by Gege Akutami. Yuji Itadori is an unnaturally fit high school student living in Sendai. He accidently eats only of the cursed fingers of an ancient curse from the body of Ryomen Sukuna and finds that he has an ability to turn into a curse",
            },
          };
          const { itemId } = this.data;

          const fadeBackgroundEl = document.querySelector("#fadeBackground");
      
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("visible", true);
          entityEl.setAttribute("id", `${itemId}-banner`);
      
          entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 0.9,
            height: 1,
          });
      
          entityEl.setAttribute("material", { color: "#000" });
          entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
      
          const item = postersInfo[itemId];
      
          const imageEl = this.createImageEl(item);
          const titleEl = this.createTitleEl(item);
          const descriptionEl = this.createDescriptionEl(item);
      
          entityEl.appendChild(imageEl);
          entityEl.appendChild(titleEl);
          entityEl.appendChild(descriptionEl);
      
          fadeBackgroundEl.appendChild(entityEl);
        },
        createImageEl: function (item) {
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("visible", true);
          entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 0.85,
            height: 0.4,
          });
          entityEl.setAttribute("material", { src: item.banner_url });
          entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
          return entityEl;
        },
        createTitleEl: function (item) {
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("visible", true);
          entityEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 1.2,
            height: 2,
            color: "#fff",
            value: `${item.title} (${item.released_year})`,
          });
          entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
          return entityEl;
        },
        createDescriptionEl: function (item) {
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("visible", true);
          entityEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 0.75,
            height: 2,
            color: "#fff",
            wrapCount: "40",
            value: item.description,
          });
          entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
          return entityEl;
        },
      });