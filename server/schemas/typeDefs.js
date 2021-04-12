// import the gql tagged template function
const { gql } = require("apollo-server-express");

// make a different input type and pass it into actions

const typeDefs = gql`
  type DungeonMaster {
    _id: ID
    dungeonMaster: String
    email: String
    players: [Player]
    monsters: [Monster]
  }

  type Player {
    _id: ID
    playerName: String
    playerClass: String
    playerRace: String
    playerLevel: Int
    playerArmorClass: Int
    playerHitPoints: Int
    playerStrengthStat: Int
    playerDexterityStat: Int
    playerConstitutionStat: Int
    playerIntelligenceStat: Int
    playerWisdomStat: Int
    playerCharismaStat: Int
  }

  input monsterInput {
    monsterName: String!
    monsterSize: String!
    monsterType: String!
    monsterAlignment: String!
    monsterSpeed: Int
    monsterChallenge: Int!
    monsterArmorClass: Int!
    monsterHitPoints: Int!
    monsterStrengthStat: Int!
    monsterDexterityStat: Int!
    monsterConstitutionStat: Int!
    monsterIntelligenceStat: Int!
    monsterWisdomStat: Int!
    monsterCharismaStat: Int!
  }

  type Monster {
    monsterName: String
    monsterSize: String
    monsterType: String
    monsterAlignment: String
    monsterSpeed: Int
    monsterChallenge: Int
    monsterArmorClass: Int
    monsterHitPoints: Int
    monsterStrengthStat: Int
    monsterDexterityStat: Int
    monsterConstitutionStat: Int
    monsterIntelligenceStat: Int
    monsterWisdomStat: Int
    monsterCharismaStat: Int
  }

  type Query {
    me: DungeonMaster
    dungeonMasters: [DungeonMaster]
    dungeonMaster(username: String): [DungeonMaster]
    players: [Player]
    player(playerName: String): [Player]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addDungeonMaster(
      dungeonMaster: String!
      email: String!
      password: String!
    ): Auth
    addPlayer(
      _id: ID
      playerName: String!
      playerClass: String!
      playerRace: String!
      playerLevel: Int
      playerArmorClass: Int
      playerHitPoints: Int
      playerStrengthStat: Int
      playerDexterityStat: Int
      playerConstitutionStat: Int
      playerIntelligenceStat: Int
      playerWisdomStat: Int
      playerCharismaStat: Int
    ): Player
    saveMonster(monsterData: monsterInput): Monster
    removeMonster(monsterName: String!): DungeonMaster
  }

  type Auth {
    token: ID!
    dungeonMaster: DungeonMaster
  }
`;

module.exports = typeDefs;
