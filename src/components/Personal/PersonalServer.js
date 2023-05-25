const API_URL = "http://127.0.0.1:8000/api/personal/";

export const listPersonal = async () => {
    return await fetch(API_URL);
};

export const getPersonal = async (personalId) => {
    return await fetch(`${API_URL}${personalId}`);
};

export const registerPersonal = async (newPersonal) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newPersonal.name).trim(),
            "foundation": parseInt(newPersonal.foundation),
            "website": String(newPersonal.website).trim(),
        })
    });
};

export const updatePersonal = async (personalId, updatePersonal) => {
    return await fetch(`${API_URL}${personalId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatePersonal.name).trim(),
            "foundation": parseInt(updatePersonal.foundation),
            "website": String(updatePersonal.website).trim(),
        })
    });
};

export const deletePersonal = async (personalId) => {
    return await fetch(`${API_URL}${personalId}`, {
        method: 'DELETE'
    });
};