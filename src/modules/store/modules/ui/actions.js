import {
    LOGIN,
    LOGOUT,
    UPDATE_API_LIMIT,
    LOAD_RECENT_QUERIES,
    SELECT_SOBJECT,
    DESELECT_SOBJECT,
    TOGGLE_FIELD,
    TOGGLE_RELATIONSHIP,
    UPDATE_SOQL,
    FORMAT_SOQL,
    SELECT_CHILD_RELATIONSHIP,
    DESELECT_CHILD_RELATIONSHIP
} from './constants';

export function login() {
    return {
        type: LOGIN
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function updateApiLimit() {
    return {
        type: UPDATE_API_LIMIT
    };
}

export function loadRecentQueries() {
    return {
        type: LOAD_RECENT_QUERIES
    };
}

export function selectSObject(sObjectName) {
    return {
        type: SELECT_SOBJECT,
        payload: { sObjectName }
    };
}

export function deselectSObject() {
    return {
        type: DESELECT_SOBJECT
    };
}

export function toggleField(fieldName, relationships, childRelationship) {
    return {
        type: TOGGLE_FIELD,
        payload: {
            fieldName,
            relationships,
            childRelationship
        }
    };
}

export function toggleRelationship(relationshipName) {
    return {
        type: TOGGLE_RELATIONSHIP,
        payload: { relationshipName }
    };
}

export function updateSoql(soql) {
    return {
        type: UPDATE_SOQL,
        payload: { soql }
    };
}

export function formatSoql() {
    return {
        type: FORMAT_SOQL
    };
}

export function selectChildRelationship(childRelationship) {
    return {
        type: SELECT_CHILD_RELATIONSHIP,
        payload: { childRelationship }
    };
}

export function deselectChildRelationship() {
    return {
        type: DESELECT_CHILD_RELATIONSHIP
    };
}
