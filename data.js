var APP_DATA = {
  "scenes": [
    {
      "id": "0-car-porch",
      "name": "Car Porch",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.14185713316217807,
        "pitch": -0.03170211197475581,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.02686902514100531,
          "pitch": 0.16266076691693954,
          "rotation": 0,
          "target": "10-front"
        },
        {
          "yaw": 3.0337794461416117,
          "pitch": 0.34853802807481316,
          "rotation": 0,
          "target": "1-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sitout",
      "name": "Sitout",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.24434609527921047,
        "pitch": -0.02389373283284435,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.835984187362172,
          "pitch": 0.2681195458674157,
          "rotation": 0,
          "target": "0-car-porch"
        },
        {
          "yaw": -0.09647836199525983,
          "pitch": 0.20998341645545615,
          "rotation": 0.7853981633974483,
          "target": "2-seating-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-seating-area",
      "name": "Seating Area",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2048603387875119,
        "pitch": 0.24397226469779554,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.9792000119023232,
          "pitch": 0.11894418545817054,
          "rotation": 0.7853981633974483,
          "target": "3-waterbody"
        },
        {
          "yaw": -2.5333911607014716,
          "pitch": 0.2403700416580996,
          "rotation": 0.7853981633974483,
          "target": "1-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-waterbody",
      "name": "Waterbody",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.231079851258329,
        "pitch": 0.2527869904294384,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.611131716046259,
          "pitch": 0.12825911008946989,
          "rotation": 4.71238898038469,
          "target": "2-seating-area"
        },
        {
          "yaw": -0.6304781668185413,
          "pitch": 0.1092007332654994,
          "rotation": 5.497787143782138,
          "target": "4-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-side",
      "name": "Side",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.082563771532845,
        "pitch": -0.026130464262880793,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.7210119485610598,
          "pitch": 0.08314150093139716,
          "rotation": 5.497787143782138,
          "target": "2-seating-area"
        },
        {
          "yaw": -2.596751748954375,
          "pitch": 0.2621357595477196,
          "rotation": 4.71238898038469,
          "target": "3-waterbody"
        },
        {
          "yaw": 0.12677049498502058,
          "pitch": 0.04974036360682277,
          "rotation": 0,
          "target": "5-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-back",
      "name": "Back",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2792534170671068,
        "pitch": 0.01470383558946331,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.46543046997683746,
          "pitch": 0.08488770973594129,
          "rotation": 0,
          "target": "4-side"
        },
        {
          "yaw": 1.0613705435385778,
          "pitch": 0.1466007645089391,
          "rotation": 0,
          "target": "6-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-patio",
      "name": "Patio",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.44362348383884864,
        "pitch": 0.043262423008656015,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.15146061575085845,
          "pitch": 0.19111715032367727,
          "rotation": 0,
          "target": "7-well"
        },
        {
          "yaw": 3.136863600163297,
          "pitch": 0.09690376841713011,
          "rotation": 0,
          "target": "5-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-well",
      "name": "Well",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.044225173424202,
        "pitch": 0.059262418439896436,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.8603357951944357,
          "pitch": 0.030220415099918796,
          "rotation": 0,
          "target": "6-patio"
        },
        {
          "yaw": 0.12091848046893361,
          "pitch": 0.3421883327277584,
          "rotation": 0,
          "target": "8-kitchen-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen-garden",
      "name": "Kitchen Garden",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.43364893114226355,
        "pitch": 0.011023112345968755,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.055286683136912984,
          "pitch": 0.06256589299591475,
          "rotation": 0,
          "target": "7-well"
        },
        {
          "yaw": 1.3854673090675043,
          "pitch": 0.03260530795749261,
          "rotation": 0,
          "target": "9-carporch-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-carporch-side",
      "name": "Carporch Side",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07199332609656395,
        "pitch": 0.009125601598311661,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.12983752909706858,
          "pitch": 0.17280667279909778,
          "rotation": 0,
          "target": "10-front"
        },
        {
          "yaw": -2.6090916658449945,
          "pitch": 0.06256413050861198,
          "rotation": 0,
          "target": "8-kitchen-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-front",
      "name": "Front",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.38529870973672153,
        "pitch": 0.05001749290024016,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.09790243482573757,
          "pitch": 0.2826121233158254,
          "rotation": 0,
          "target": "0-car-porch"
        },
        {
          "yaw": -1.606281641281777,
          "pitch": 0.17347961456662375,
          "rotation": 0,
          "target": "9-carporch-side"
        },
        {
          "yaw": -0.08593021016583435,
          "pitch": 0.08636336280887313,
          "rotation": 0,
          "target": "1-sitout"
        },
        {
          "yaw": 0.2703086366164662,
          "pitch": 0.04867139165491885,
          "rotation": 5.497787143782138,
          "target": "2-seating-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dr.Nidhin's Landscape",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
