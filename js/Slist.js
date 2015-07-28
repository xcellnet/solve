var app = angular.module('Slist', []);

app.controller('MainCtrl', function($scope) {
  $scope.articles = [
    {
      name: "Matt Nolan",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 1,
      img: '/solve/img/profile/230424_10150173888838683_5117328_n.jpg'

    },
        {
      name: "Liam Alsop",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript",
        "JAVA",
        "Wireframing",
        "SQL",
        "MySQL"
      ],
      uid: 2,
      img: '/solve/img/profile/733771_476221439104015_952065709_n.jpg'
      
    },
        {
      name: "Sarah Forsyth",
      tags: [
        "plumbing",
        "electical",
        "Life Coach"
      ],
      uid: 3,
      img: '/solve/img/profile/1157638_10203399684978672_1162716716_n.jpg'
      
    },
        {
      name: "Gabrielle Peake",
      tags: [
        "sewing",
        "needle point",
        "Car Repair",
        "scubba"
      ],
      uid: 4,
      img: '/solve/img/profile/11698596_10206651778554619_8875289555553885898_n.jpg'
      
    },
        {
      name: "Madeleine Berry",
      tags: [
        "life coach",
        "goal setting",
        "vocal coach",
        "cooking"
      ],
      uid: 5,
      img: '/solve/img/profile/1902911_10202644664014354_165944544_n.jpg'
      
    },
        {
      name: "Elizabeth McDonald",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript",
        "node.js"
      ],
      uid: 6,
      img: '/solve/img/profile/11178300_10204740852374910_429041292436772476_n.jpg'
      
    },
        {
      name: "Leonard Morgan",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 7,
      img: '/solve/img/profile/10881556_10204779256979881_2483213791056456687_n.jpg'
      
    },
        {
      name: "Benjamin Campbell",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 8,
      img: '/solve/img/profile/10460178_10206174571139177_4940363198446242053_n.jpg'
      
    },
        {
      name: "Julia Lyman",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 9,
      img: '/solve/img/profile/11700962_10207249629028363_6849408457103841997_n.jpg'
      
    },
        {
      name: "Alexandra Fisher",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 10,
      img: '/solve/img/profile/11659431_10205894547076310_1051849578793935347_n.jpg'
      
    },
        {
      name: "Gordon Gray",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 11,
      img: '/solve/img/profile/10801858_10152835757631043_3663312421316075585_n.jpg'
      
    },
        {
      name: "Angela Clarkson",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 12,
      img: '/solve/img/profile/11695869_10155728504685307_8527232522786866655_n.jpg'
      
    },
        {
      name: "Karen Hudson",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 13,
      img: '/solve/img/profile/11796346_10207103439694180_4608964378456140749_n.jpg'
      
    },
        {
      name: "Phil Morgan",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 14,
      img: '/solve/img/profile/1662231_10202903370606758_1331349394_n.jpg'
      
    },
        {
      name: "Tim Mackenzie",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 15,
      img: '/solve/img/profile/10430509_10203421831680596_5088138802663734207_n.jpg'
      
    },
        {
      name: "Neil Simpson",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 16,
      img: '/solve/img/profile/11705139_779823610856_3270216087504082693_n.jpg'
      
    },
        {
      name: "Warren Mackay",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 17,
      img: '/solve/img/profile/11745955_10207233001412734_8649529077905204364_n.jpg'
      
    },
        {
      name: "Max Bond",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 18,
      img: '/solve/img/profile/11755632_10153506815709222_6080161421567438335_n.jpg'
      
    },
        {
      name: "Angela Clarkson",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 19,
      img: '/solve/img/profile/11737901_10153364332636578_3658556208940384403_n.jpg'
      
    },
        {
      name: "Nicholas Wright",
      tags: [
        "hardware",
        "software",
        "PHP",
        "Javascript"
      ],
      uid: 20,
      img: '/solve/img/profile/10476606_10202441603679649_5509627530562783856_n.jpg'
      
    }
  ];
  
  $scope.tag = function(message) {
    if ($scope.tags) {
      return $scope.tags.replace(/\s*,\s*/g, ',').split(',').every(function(tag) {
        return message.tags.some(function(objTag){
          return objTag.indexOf(tag) !== -1;
        });
      });
    }
    else {
      return false;
    }
  };
  
});