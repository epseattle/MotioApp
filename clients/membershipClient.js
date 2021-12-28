const local = 'http://localhost:19516/membership/';
const prod = 'https://motiservice.azurewebsites.net/membership/'
const baseUrl = local;

export const createMembership = async (challengeId, userId) => {
    var res = await fetch(
        baseUrl + `challenge/${challengeId}/user/${userId}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

    return res;
}

export const approveMembershipByMembershipId = async (membershipId) => {
    var res = await fetch(
        baseUrl + `${membershipId}/approve`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    return res;
};

export const rejectMembershipByMembershipId = async (membershipId) => {
    var res = await fetch(
        baseUrl + `${membershipId}/reject`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    return res;
};

export const approveMembershipByChallengeId = async (membershipId) => {
    var res = await fetch(
        baseUrl + `challenge/${challengeId}/user/${userId}/approve`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    return res;
};

export const rejectMembershipByChallengeId = async (membershipId) => {
    var res = await fetch(
        baseUrl + `challenge/${challengeId}/user/${userId}/reject`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });
    return res;
};