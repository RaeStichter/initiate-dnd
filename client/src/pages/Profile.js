import React from 'react';
import PlayerList from "../components/PlayerList";
import MonsterList from '../components/MonsterList';
import { Redirect, useParams } from 'react-router-dom';

import PlayerForm from '../components/PlayerForm';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_DM, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
//import { Player } from '../../../server/models';

const Profile = () => {
  const { dungeonMaster: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_DM : QUERY_ME, {
    variables: { dungeonMaster: userParam }
  });
  //console.log("data", data);
  //console.log("data.me", data.me);

  const dungeonMaster = data?.me || data?.dungeonMaster || {};
  //console.log(dungeonMaster);

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.dungeonMaster === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dungeonMaster?.dungeonMaster) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }
  console.log(dungeonMaster.dungeonMaster);
  console.log(dungeonMaster);
  console.log(dungeonMaster.players);
  
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="p-3 display-inline-block">
          {/* THIS IS THE DM PROFILE */}
          Viewing {`${dungeonMaster.dungeonMaster}'s`} profile
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <PlayerList
            players={dungeonMaster.players}
            title={`${dungeonMaster.dungeonMaster}'s player...`}
          />
          <MonsterList
            monsters={dungeonMaster.monsters}
            title={`${dungeonMaster.dungeonMaster}'s monster...`}
          />
          </div>
        </div>
        <div className="mb-3"><PlayerForm /></div>
      </div>
  
  );
};

export default Profile;
