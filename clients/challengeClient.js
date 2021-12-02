const MotiServiceUrl = 'http://localhost:19516/challenge/';

export const createChallenge = async (challenge) => {
    var res = await fetch(
        MotiServiceUrl,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(challenge)
        });
    console.log(res);
    return res;
};

export const joinChallenge = async (challenge) => {

};

export const quitChallenge = async (challenge) => {

};