import gql from 'graphql-tag';

// add back in the 'dungeonMaster under the _id line
export const LOGIN_DM = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      dungeonMaster {
        _id
        dungeonMaster
      }
    }
  }
`;

export const ADD_DM = gql`
    mutation addDungeonMaster($dungeonMaster: String!, $password: String!, $email: String!) {
        addDungeonMaster(dungeonMaster: $dungeonMaster, password: $password, email: $email) {
            token
            dungeonMaster {
                _id
                dungeonMaster
            }
        }
    }
`;

// zk: not sure if this is 100% correct
// removed actions
export const SAVE_MONSTER = gql`
    mutation saveMonster($monsterData: monsterInput!) {
      saveMonster(monsterData: $monsterData) {
          monsterName
          monsterSize
          monsterType
          monsterAlignment
          monsterSpeed
          monsterChallenge
          monsterArmorClass
          monsterHitPoints
          monsterStrengthStat
          monsterDexterityStat
          monsterConstitutionStat
          monsterIntelligenceStat
          monsterWisdomStat
          monsterCharismaStat
      }
    }
  `;

// // zk: not sure if this is 100% correct
//   export const REMOVE_MONSTER = gql`
//     mutation removeMonster($monsterName: String!) {
//       removeMonster(monsterName: $monsterName) {
//         _id
//         dungeonMaster
//         email
//         monsters {
//           monsterName
//           monsterSize
//           monsterType
//           monsterAlignment
//           monsterSpeed
//           monsterChallenge
//           monsterArmorClass
//           monsterHitPoints
//           monsterStrengthStat
//           monsterDexterityStat
//           monsterConstitutionStat
//           monsterIntelligenceStat
//           monsterWisdomStat
//           monsterCharismaStat
//           monsterActions
//         }
//       }
//     }
//   `;