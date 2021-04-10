import gql from 'graphql-tag';

export const QUERY_DMS = gql`
  query dungeonMasters($dungeonMasters: String) {
    dungeonMasters(dungeonMasters: $dungeonMasters) {
      _id
      dungeonMaster
      email
      players {
        _id
        playerName
        playerClass
        playerRace
        playerLevel
        playerArmorClass
        playerHitPoints
      }
    }
  }
`;

export const QUERY_PLAYER = gql`
  query getSinglePlayer($playerName: String!) {
    player(playerName: $playerName) {
      _id
      playerName
      playerClass
      playerRace
      playerLevel
      playerArmorClass
      playerHitPoints
    }
  }
`;
// this works
export const QUERY_PLAYERS = gql`
  query {
    players {
      _id
      playerName
      playerClass
      playerRace
      playerLevel
      playerArmorClass
      playerHitPoints
    }
  }
`;

export const QUERY_DM = gql`
  query dungeonMasters($dungeonMaster: String) {
    dungeonMasters(dungeonMaster: $dungeonMaster) {
      _id
      dungeonMaster
      email
      players {
        _id
        playerName
        playerClass
        playerRace
        playerLevel
        playerArmorClass
        playerHitPoints
        playerStrengthStat
        playerDexterityStat
        playerConstitutionStat
        playerIntelligenceStat
        playerWisdomStat
        playerCharismaStat
      }
    }
  }
`;


export const QUERY_ME = gql`
  {
    me {
      _id
      dungeonMaster
      email
      players {
        _id
        playerName
        playerClass
        playerRace
        playerLevel
        playerArmorClass
        playerHitPoints
        playerStrengthStat
        playerDexterityStat
        playerConstitutionStat
        playerIntelligenceStat
        playerWisdomStat
        playerCharismaStat
      }
    }
  }
`;

//   query dungeonMasters($dungeonMaster: String) {
//     dungeonMasters(dungeonMaster: $dungeonMaster) {
//       _id
//       dungeonMaster
//       email
//       players {
//         _id
//         playerName
//         playerClass
//         playerRace
//         playerLevel
//         playerArmorClass
//         playerHitPoints
//         playerStrengthStat
//         playerDexterityStat
//         playerConstitutionStat
//         playerIntelligenceStat
//         playerWisdomStat
//         playerCharismaStat
//       }
//     }
//   }

// me {
//   _id
//   dungeonMaster
//   email
// }
// }



// query {
//   dungeonMasters {
//     _id
//     dungeonMaster
//     email
//     players {
//       _id
//       playerName
//   		playerClass
//   		playerRace
//   		playerLevel
//   		playerArmorClass
//   		playerHitPoints
//     }
//   }
// }