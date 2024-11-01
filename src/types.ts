import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from 'kysely'


export interface Database{           //Database export
  Event: EventTable
  Player: PlayerTable
  Team: TeamTable
  Fixture: FixtureTable
  Fixture_Team: FixtureTeamTable
  Tournament: TournamentTable
  Team_Tournament: TeamTournamentTable
  EventType: EventTypeTable
  Draft: DraftTable 
}

export interface EventTable {     //Tabelle Events (e.g Goal 22 min. Shaqiri)
  event_id: Generated<number>
  eventtype_id: number
  player_id: number
  fixtureid: number
  typeid: number
  related_player_id: string | null
  minute: number
  injured: boolean | null     //evtl. zu EventType
}

export interface PlayerTable {    //Tabelle Player (e.g Shaqiri)
  player_id: Generated<number>
  team_id: number | null
  first_name: string
  last_name: string | null
  image_path: string | null
  date_of_birth: number | null
  jersey_number: number | null
  captain: boolean | null
  position_id: number | null
  country_id: number | null
}

export interface TeamTable {    //Tabelle Team (e.g Switzerland)
  team_id: Generated<number>
  player_id: number 
  team_name: string
  team_logo: string | null
  ranking: number | null
}

export interface FixtureTable {   //Tabelle Fixture (e.g Switzerland - Germany)
  fixture_id: Generated<number>
  date: number
  time: number
  venue: number | null
  result: number | null
}

export interface FixtureTeamTable {   //Zwischentabelle (? Es wird kein FK definiert, also Zwecklos?)
  team_id: number
  fixture_id: number
}

export interface TournamentTable {    //Tabelle Tournament (e.g Weltmeisterschaft 2026)
  tournament_id: Generated<number>
  tournament_name: string
  start_date: number
  end_date: number
  mode: string
}

export interface TeamTournamentTable {  //Zwischentabelle
  tournament_id: number
  team_id: number
}

export interface EventTypeTable {       // Tabelle EventTyp (e.g Goal)
  eventtype_id: Generated<number>
  event: string
  event_Score: number
}

export interface DraftTable {           //Tabelle Draft (e.g Team Dirty Sanchez)
  draft_id: Generated<number>
  playerid: number | null
  myTeam_name: string
  myTeam_Logo: string | null
  user: string
  titles: number | null
  title: 'Titelverteidiger' | 'Durchschnitts-Dribbler' | 'Die Elf der Elendes' | null
}


// ------------------------------------------------------------------------------------
//Kyseli Syntax Info
//-----------------------------------------------------------------------------------
// You can specify a different type for each operation (select, insert and
 // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
// wrapper. Here we define a column `created_at` that is selected as
// a `Date`, can optionally be provided as a `string` in inserts and
// can never be updated:
// created_at: ColumnType<Date, string | undefined, never>

// You should not use the table schema interfaces directly. Instead, you should
// use the `Selectable`, `Insertable` and `Updateable` wrappers. These wrappers
// make sure that the correct types are used in each operation.
//
// Most of the time you should trust the type inference and not use explicit
// types at all. These types can be useful when typing function arguments.


// Typen für Insert, Select und Update Operationen
export type Event = Selectable<EventTable>
export type NewEvent = Insertable<EventTable>
export type EventUpdate = Updateable<EventTable>

export type Player = Selectable<PlayerTable>
export type NewPlayer = Insertable<PlayerTable>
export type PlayerUpdate = Updateable<PlayerTable>

export type Team = Selectable<TeamTable>
export type NewTeam = Insertable<TeamTable>
export type TeamUpdate = Updateable<TeamTable>

export type Fixture = Selectable<FixtureTable>
export type NewFixture = Insertable<FixtureTable>
export type FixtureUpdate = Updateable<FixtureTable>

export type FixtureTeam = Selectable<FixtureTeamTable>
export type NewFixtureTeam = Insertable<FixtureTeamTable>
export type FixtureTeamUpdate = Updateable<FixtureTeamTable>

export type Tournament = Selectable<TournamentTable>
export type NewTournament = Insertable<TournamentTable>
export type TournamentUpdate = Updateable<TournamentTable>

export type TeamTournament = Selectable<TeamTournamentTable>
export type NewTeamTournament = Insertable<TeamTournamentTable>
export type TeamTournamentUpdate = Updateable<TeamTournamentTable>

export type EventType = Selectable<EventTypeTable>
export type NewEventType = Insertable<EventTypeTable>
export type EventTypeUpdate = Updateable<EventTypeTable>

export type Draft = Selectable<DraftTable>
export type NewDraft = Insertable<DraftTable>
export type DraftUpdate = Updateable<DraftTable>