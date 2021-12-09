const local = 'http://localhost:19516/challenge/';
const prod = 'https://motiservice.azurewebsites.net/challenge/'
const baseUrl = local;

export const createChallenge = async (challenge) => {
    var res = await fetch(
        baseUrl,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(challenge)
        });
    return res;
};

export const getUserChallenges = async (userId) => {
    var res = await fetch(
        baseUrl + `user/${userId}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        }
    )
    return res;
}

export const getChallengeMembersRequest = async (challengeId) => {
    var res = await fetch(
        baseUrl + `${challengeId}/members`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        }
    );
    return res;
}

export const joinChallenge = async (challenge) => {

};

export const quitChallenge = async (challenge) => {

};