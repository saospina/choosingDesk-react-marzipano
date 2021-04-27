/* const panoData = {
    "scenes": [
        {
          "id": "0-floor1",
          "name": "floor1",
          "levels": [
            {
              "tileSize": 256,
              "size": 256,
              "fallbackOnly": true
            },
            {
              "tileSize": 512,
              "size": 512
            }
          ],
          "faceSize": 480,
          "initialViewParameters": {
            "yaw": 0,
            "pitch": 0,
            "fov": 1.4126924692571101
          },
          "linkHotspots": [
            {
              "yaw": 0.8060793636654555,
              "pitch": 0.18633149206710797,
              "rotation": 6.283185307179586,
              "target": "1-floor2"
            }
          ],
          "infoHotspots": [
            {
              "yaw": 0.0341581443300889,
              "pitch": 0.28295809042488074,
              "title": "Desk#1",
              "text": "Desk with chair and monitor"
            }
          ]
        },
        {
          "id": "1-floor2",
          "name": "floor2",
          "levels": [
            {
              "tileSize": 256,
              "size": 256,
              "fallbackOnly": true
            },
            {
              "tileSize": 512,
              "size": 512
            }
          ],
          "faceSize": 180,
          "initialViewParameters": {
            "yaw": 1.2799283498560925,
            "pitch": 0.14339359650352534,
            "fov": 1.4126924692571101
          },
          "linkHotspots": [
            {
              "yaw": 0.381146931008594,
              "pitch": 0.12213721974302061,
              "rotation": 6.283185307179586,
              "target": "2-floor3"
            }
          ],
          "infoHotspots": [
            {
              "yaw": 1.2799283498560925,
              "pitch": 0.14339359650352534,
              "title": "Desk#3",
              "text": "Text"
            }
          ]
        },
        {
          "id": "2-floor3",
          "name": "floor3",
          "levels": [
            {
              "tileSize": 256,
              "size": 256,
              "fallbackOnly": true
            },
            {
              "tileSize": 512,
              "size": 512
            }
          ],
          "faceSize": 153,
          "initialViewParameters": {
            "yaw": -3.0019663134302554,
            "pitch": 0.04248699155659175,
            "fov": 1.4126924692571101
          },
          "linkHotspots": [
            {
              "yaw": -2.1595255356953196,
              "pitch": 0.13295129638592584,
              "rotation": 0,
              "target": "0-floor1"
            }
          ],
          "infoHotspots": [
            {
              "yaw": -3.0019663134302554,
              "pitch": 0.04248699155659175,
              "title": "Desk#4",
              "text": "Text"
            }
          ]
        }
      ],
      "name": "Project Title",
      "settings": {
        "mouseViewMode": "drag",
        "autorotateEnabled": false,
        "fullscreenButton": false,
        "viewControlButtons": true
      }
    };

export default panoData; */


const panoData = {
  "scenes": [
    {
      "id": "oriente-station",
      "name": "Oriente Station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.12678386676067,
          "pitch": -0.0076340532339251865,
          "rotation": 0,
          "target": "electricity-museum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.00038049728702915786,
          "pitch": 0.014985751462495145,
          "title": "Oriente Station",
          "text": "The Oriente Station is one of the most important bus and train stations in the city. Designed by the Spanish architect and engineer Santiago Calatrava, it has an enormous metal skeleton that covers the eight train lines and its platforms. Finished in 1998 to serve the Expo’98 and, later, the Parque das Nações area, in its surroundings are companies, services, hotels, bars, animation, as well as the well known Vasco da Gama shopping centre."
        }
      ]
    },
    {
      "id": "electricity-museum",
      "name": "Electricity Museum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3152585099587224,
          "pitch": 0.045251205931975846,
          "rotation": 5.497787143782138,
          "target": "jeronimos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1606464893205768,
          "pitch": -0.17433292221669205,
          "title": "Boilers Room",
          "text": "In the impressive Boilers Room at the Electricity Museum we find four large boilers of about 100 feet tall, with their respective control panels, air and fuel circuits, ventilators, etc. Boiler number 15 has been musealised and visitors may go in and discover its structure and internal component: conveyor belt, Bailey walls, naphtha burners, water heating tubes, and so on."
        }
      ]
    },
    {
      "id": "jeronimos",
      "name": "Jerónimos Monastery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.775981148319735,
          "pitch": 0.2661802812323746,
          "rotation": 0,
          "target": "oriente-station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5350080558065997,
          "pitch": 0.24525106321929435,
          "title": "Jerónimos Monastery",
          "text": "The Jerónimos Monastery cloister is a pleasant and serene place intended to foster monks’ prayers and meditation. Its manuelin decoration features decorative religious, nautical and royal elements, as well as vegetal motifs. Since 1985, the tomb of the poet Fernando Pessoa rests in the north wing of the cloister’s ground floor."
        }
      ]
    }
  ],
  "name": "Sample Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
}

export default panoData;