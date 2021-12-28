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

export const shareChallenge = async (challengeId) => {
    var res = await fetch(
        baseUrl + `${challengeId}/share`,
        {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
        }
    )

    return res;
}

export const getChallengeWithCode = async (code) => {
    console.log(baseUrl)
    console.log(code)
    var res = await fetch(
        baseUrl + `code/${code}`,
        {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        }
    )

    return res;
}

export const joinChallengeWithCode = async (challengeCode, userId) => {
    var res = await fetch(
        baseUrl + `code/${challengeCode}/user/${userId}/join`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }
    );

    return res;
}

export const joinChallenge = async (challengeid, userId) => {
    var res = await fetch(
        baseUrl + `${challengeId}/user/${userId}/join`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }
    );
    return res;
};

export const quitChallenge = async (challenge) => {
    var res = await fetch();
    return res;
};