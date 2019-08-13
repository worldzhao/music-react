const Mock = require('mockjs');

module.exports = {
  'GET /api/banner': Mock.mock({
    banners: [
      {
        imageUrl: 'http://p1.music.126.net/LQecAxwMKFjIbu5ScX1m9Q==/109951164287532536.jpg',
        targetId: 0,
        targetType: 3000,
        titleColor: 'blue',
        typeTitle: '数字专辑',
        url: 'https://music.163.com/store/newalbum/detail?id=80752440'
      },
      {
        imageUrl: 'http://p1.music.126.net/jLxoo76RFaBkgJ_nQCtjYw==/109951164288293582.jpg',
        targetId: 10883245,
        targetType: 1004,
        titleColor: 'red',
        typeTitle: '独家策划',
        url: null
      }
    ],
    code: 200
  }),
  'GET /api/album/newest': Mock.mock({
    code: 200,
    albums: [
      {
        name: '明明',
        id: 80754355,
        type: 'EP/Single',
        size: 2,
        picId: 109951164260658160,
        blurPicUrl: 'http://p3.music.126.net/AEqLLwzHzHBTQU5QobRA0w==/109951164260658166.jpg',
        companyId: 0,
        pic: 109951164260658160,
        picUrl: 'http://p4.music.126.net/AEqLLwzHzHBTQU5QobRA0w==/109951164260658166.jpg',
        publishTime: 1564848000000,
        description: '',
        tags: '',
        company: '智慧大狗 × 环球唱片',
        briefDesc: '',
        artist: {
          name: '摩登兄弟刘宇宁',
          id: 1094010,
          picId: 109951164250429500,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/I1uF8g0-1avqicEcCsZIUg==/109951164250429506.jpg',
          img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 25,
          alias: [],
          trans: '',
          musicSize: 94,
          topicPerson: 0,
          picId_str: '109951164250429506',
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: ['电视剧《加油你是最棒的》超级推广曲'],
        status: 0,
        copyrightId: 1416382,
        commentThreadId: 'R_AL_3_80754355',
        artists: [
          {
            name: '摩登兄弟刘宇宁',
            id: 1094010,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164260658166'
      },
      {
        name: '好喜欢你',
        id: 80756606,
        type: 'EP/Single',
        size: 2,
        picId: 109951164269237710,
        blurPicUrl: 'http://p4.music.126.net/9ZCTtbguiCmW_FIr9B-jsA==/109951164269237713.jpg',
        companyId: 0,
        pic: 109951164269237710,
        picUrl: 'http://p4.music.126.net/9ZCTtbguiCmW_FIr9B-jsA==/109951164269237713.jpg',
        publishTime: 1565020800000,
        description: '',
        tags: '',
        company: '中视鸣达',
        briefDesc: '',
        artist: {
          name: '颜人中',
          id: 31376161,
          picId: 109951164082499570,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/eTxQR4lHlLGx5hX90uq3VA==/109951164082499569.jpg',
          img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 7,
          alias: [],
          trans: '',
          musicSize: 13,
          topicPerson: 0,
          picId_str: '109951164082499569',
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 0,
        copyrightId: 1416389,
        commentThreadId: 'R_AL_3_80756606',
        artists: [
          {
            name: '颜人中',
            id: 31376161,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164269237713'
      },
      {
        name: 'Save the Night',
        id: 80585222,
        type: 'EP/Single',
        size: 1,
        picId: 109951164235924540,
        blurPicUrl: 'http://p4.music.126.net/9Gmcnpr4nPK0RfHk-LlTkw==/109951164235924545.jpg',
        companyId: 0,
        pic: 109951164235924540,
        picUrl: 'http://p4.music.126.net/9Gmcnpr4nPK0RfHk-LlTkw==/109951164235924545.jpg',
        publishTime: 1564675200000,
        description: '',
        tags: '',
        company: 'Transparent & 网易云音乐',
        briefDesc: '',
        artist: {
          name: 'Far East Movement',
          id: 92526,
          picId: 3401888982584384,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/hVLq_pXrq364NAHT9cLjsg==/3401888982584384.jpg',
          img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 48,
          alias: [],
          trans: '远东韵律',
          musicSize: 399,
          topicPerson: 0,
          transNames: ['远东韵律'],
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 0,
        copyrightId: 1405820,
        commentThreadId: 'R_AL_3_80585222',
        artists: [
          {
            name: 'Far East Movement',
            id: 92526,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          },
          {
            name: '李玟',
            id: 8331,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          },
          {
            name: 'Shaggy',
            id: 42980,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164235924545'
      },
      {
        name: 'The Sailor',
        id: 80536506,
        type: '专辑',
        size: 12,
        picId: 109951164238945650,
        blurPicUrl: 'http://p3.music.126.net/vrMxThVE9RgDManGChrZ2Q==/109951164238945644.jpg',
        companyId: 0,
        pic: 109951164238945650,
        picUrl: 'http://p3.music.126.net/vrMxThVE9RgDManGChrZ2Q==/109951164238945644.jpg',
        publishTime: 1564070400000,
        description: '',
        tags: '',
        company: 'StreetVoice/88rising',
        briefDesc: '',
        artist: {
          name: 'Rich Brian',
          id: 12024301,
          picId: 109951164240685390,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/m8xMe6muJQGYIrwRTKxMTg==/109951164240685392.jpg',
          img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 16,
          alias: ['Rich Chigga', 'Brian Imanuel'],
          trans: '',
          musicSize: 67,
          topicPerson: 0,
          picId_str: '109951164240685392',
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 0,
        copyrightId: -1,
        commentThreadId: 'R_AL_3_80536506',
        artists: [
          {
            name: 'Rich Brian',
            id: 12024301,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164238945644'
      },
      {
        name: 'color on me',
        id: 80574686,
        type: '专辑',
        size: 5,
        picId: 109951164234623490,
        blurPicUrl: 'http://p4.music.126.net/HVC6ZJPSnbA3lOJqq7NNUw==/109951164234623493.jpg',
        companyId: 0,
        pic: 109951164234623490,
        picUrl: 'http://p3.music.126.net/HVC6ZJPSnbA3lOJqq7NNUw==/109951164234623493.jpg',
        publishTime: 1563984000000,
        description: '',
        tags: '',
        company: '索尼音乐',
        briefDesc: '',
        artist: {
          name: '姜丹尼尔',
          id: 31153219,
          picId: 109951164231686540,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/iCc8XklEixqAgQE0xYAPrQ==/109951164231686545.jpg',
          img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 1,
          alias: [],
          trans: '강다니엘',
          musicSize: 5,
          topicPerson: 0,
          picId_str: '109951164231686545',
          transNames: ['강다니엘'],
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 3,
        copyrightId: 7001,
        commentThreadId: 'R_AL_3_80574686',
        artists: [
          {
            name: '姜丹尼尔',
            id: 31153219,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164234623493'
      },
      {
        name: '天気の子',
        id: 80440087,
        type: '专辑',
        size: 31,
        picId: 109951164220136540,
        blurPicUrl: 'http://p4.music.126.net/dRwInA9PpkiKkmNWeUvi0w==/109951164220136544.jpg',
        companyId: 0,
        pic: 109951164220136540,
        picUrl: 'http://p3.music.126.net/dRwInA9PpkiKkmNWeUvi0w==/109951164220136544.jpg',
        publishTime: 1563465600000,
        description: '',
        tags: '',
        company: '℗ 2019 voque ting co., ltd.',
        briefDesc: '',
        artist: {
          name: 'RADWIMPS',
          id: 21132,
          picId: 109951164103417900,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/pLvtNC2TzXvbBgFKCeo_yg==/109951164103417903.jpg',
          img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 41,
          alias: ['拉德温普斯'],
          trans: '',
          musicSize: 272,
          topicPerson: 0,
          picId_str: '109951164103417903',
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: ['动画电影《天気の子》原声带'],
        status: 0,
        copyrightId: 587012,
        commentThreadId: 'R_AL_3_80440087',
        artists: [
          {
            name: 'RADWIMPS',
            id: 21132,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164220136544'
      },
      {
        name: 'No.6 Collaborations Project',
        id: 80316851,
        type: '专辑',
        size: 15,
        picId: 109951164205140600,
        blurPicUrl: 'http://p4.music.126.net/qC1oR23TqVbb_ZlSXvYmzw==/109951164205140613.jpg',
        companyId: 0,
        pic: 109951164205140600,
        picUrl: 'http://p3.music.126.net/qC1oR23TqVbb_ZlSXvYmzw==/109951164205140613.jpg',
        publishTime: 1562860800000,
        description: '',
        tags: '',
        company: '华纳音乐',
        briefDesc: '',
        artist: {
          name: 'Ed Sheeran',
          id: 33184,
          picId: 109951164191874510,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/rrhUbkCgJowe-w3PwPMikw==/109951164191874511.jpg',
          img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 73,
          alias: [],
          trans: '艾德·希兰',
          musicSize: 732,
          topicPerson: 0,
          picId_str: '109951164191874511',
          transNames: ['艾德·希兰'],
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 0,
        copyrightId: 7002,
        commentThreadId: 'R_AL_3_80316851',
        artists: [
          {
            name: 'Ed Sheeran',
            id: 33184,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164205140613'
      },
      {
        name: 'bad guy (with Justin Bieber)',
        id: 80352303,
        type: 'EP/Single',
        size: 1,
        picId: 109951164208231740,
        blurPicUrl: 'http://p4.music.126.net/9u0Yh6-yefEGNTFZ4ZNjNg==/109951164208231738.jpg',
        companyId: 0,
        pic: 109951164208231740,
        picUrl: 'http://p4.music.126.net/9u0Yh6-yefEGNTFZ4ZNjNg==/109951164208231738.jpg',
        publishTime: 1562774400000,
        description: '',
        tags: '',
        company: '环球唱片',
        briefDesc: '',
        artist: {
          name: 'Billie Eilish',
          id: 11972054,
          picId: 109951164219905470,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/xTuyRnnOXrZ44lMMg7iawQ==/109951164219905464.jpg',
          img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 26,
          alias: [],
          trans: '',
          musicSize: 105,
          topicPerson: 0,
          picId_str: '109951164219905464',
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 3,
        copyrightId: 7003,
        commentThreadId: 'R_AL_3_80352303',
        artists: [
          {
            name: 'Billie Eilish',
            id: 11972054,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          },
          {
            name: 'Justin Bieber',
            id: 35531,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164208231738'
      },
      {
        name: '流淌的美好时光 影视原声带',
        id: 80067034,
        type: 'EP/Single',
        size: 6,
        picId: 109951164179136400,
        blurPicUrl: 'http://p3.music.126.net/TqF_j-ueOE7ABBdaBPCz1Q==/109951164179136396.jpg',
        companyId: 0,
        pic: 109951164179136400,
        picUrl: 'http://p3.music.126.net/TqF_j-ueOE7ABBdaBPCz1Q==/109951164179136396.jpg',
        publishTime: 1562601600000,
        description: '',
        tags: '',
        company: '华研国际&红火火传媒',
        briefDesc: '',
        artist: {
          name: '群星',
          id: 122455,
          picId: 3261151501061433,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/HnrjpF8WyWqxgsvOEqPaWw==/3261151501061433.jpg',
          img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 10079,
          alias: ['华语群星'],
          trans: '',
          musicSize: 44848,
          topicPerson: 0,
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 0,
        copyrightId: 677020,
        commentThreadId: 'R_AL_3_80067034',
        artists: [
          {
            name: '群星',
            id: 122455,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164179136396'
      },
      {
        name: 'Joytime III',
        id: 79904422,
        type: '专辑',
        size: 13,
        picId: 109951164161475440,
        blurPicUrl: 'http://p4.music.126.net/qOzi5hQa9oxtn-A0YaRqUg==/109951164161475447.jpg',
        companyId: 0,
        pic: 109951164161475440,
        picUrl: 'http://p3.music.126.net/qOzi5hQa9oxtn-A0YaRqUg==/109951164161475447.jpg',
        publishTime: 1562083200000,
        description: '',
        tags: '',
        company: 'Joytime Collective',
        briefDesc: '',
        artist: {
          name: 'Marshmello',
          id: 1060019,
          picId: 3408486049709356,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/uz5h8hV4Ophe7LswLlykqA==/3408486049709356.jpg',
          img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 74,
          alias: ['棉花糖'],
          trans: '',
          musicSize: 317,
          topicPerson: 0,
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 1,
        copyrightId: 1416200,
        commentThreadId: 'R_AL_3_79904422',
        artists: [
          {
            name: 'Marshmello',
            id: 1060019,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164161475447'
      },
      {
        name: '带着爸爸去留学 电视原声带',
        id: 80119648,
        type: '专辑',
        size: 10,
        picId: 109951164258450660,
        blurPicUrl: 'http://p3.music.126.net/hw7rhIAeNrmgYIyATzV_Mw==/109951164258450654.jpg',
        companyId: 0,
        pic: 109951164258450660,
        picUrl: 'http://p4.music.126.net/hw7rhIAeNrmgYIyATzV_Mw==/109951164258450654.jpg',
        publishTime: 1561996800000,
        description: '',
        tags: '',
        company: '智慧大狗 × 天才联盟',
        briefDesc: '',
        artist: {
          name: '群星',
          id: 122455,
          picId: 3261151501061433,
          img1v1Id: 18686200114669624,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/HnrjpF8WyWqxgsvOEqPaWw==/3261151501061433.jpg',
          img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
          albumSize: 10079,
          alias: ['华语群星'],
          trans: '',
          musicSize: 44848,
          topicPerson: 0,
          img1v1Id_str: '18686200114669622'
        },
        songs: null,
        alias: [],
        status: 0,
        copyrightId: -1,
        commentThreadId: 'R_AL_3_80119648',
        artists: [
          {
            name: '群星',
            id: 122455,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: '',
            picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
            img1v1Url: 'http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg',
            albumSize: 0,
            alias: [],
            trans: '',
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: '18686200114669622'
          }
        ],
        paid: false,
        onSale: false,
        picId_str: '109951164258450654'
      }
    ]
  })
};
