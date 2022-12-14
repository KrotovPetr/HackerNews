import {AppDispatch} from "../../utils/Types/store";
import {TArticleElem, TElem} from "../../utils/Types/types";

export const SET_ARTICLE_FETCH_ACTIVE: 'SET_ARTICLE_FETCH_ACTIVE' = 'SET_ARTICLE_FETCH_ACTIVE';
export const SET_ARTICLE_FETCH_SUCCESS: 'SET_ARTICLE_FETCH_SUCCESS' = 'SET_ARTICLE_FETCH_SUCCESS';
export const SET_ARTICLE_FETCH_ERROR: 'SET_ARTICLE_FETCH_ERROR' = 'SET_ARTICLE_FETCH_ERROR';
export const SET_ROOT_COMMENTS_ERROR: 'SET_ROOT_COMMENTS_ERROR' = 'SET_ROOT_COMMENTS_ERROR';
export const SET_ROOT_COMMENTS_SUCCESS: 'SET_ROOT_COMMENTS_SUCCESS' = 'SET_ROOT_COMMENTS_SUCCESS';
export const SET_ROOT_COMMENTS_ACTIVE: 'SET_ROOT_COMMENTS_ACTIVE' = 'SET_ROOT_COMMENTS_ACTIVE';
export const GET_SECONDARY_COMMENTS_ACTIVE: 'GET_SECONDARY_COMMENTS_ACTIVE' = 'GET_SECONDARY_COMMENTS_ACTIVE';
export const GET_SECONDARY_COMMENTS_ERROR: 'GET_SECONDARY_COMMENTS_ERROR' = 'GET_SECONDARY_COMMENTS_ERROR';
export const GET_SECONDARY_COMMENTS_SUCCESS: 'GET_SECONDARY_COMMENTS_SUCCESS' = 'GET_SECONDARY_COMMENTS_SUCCESS';
export const SET_CURRENT_ARTICLE: 'SET_CURRENT_ARTICLE' = 'SET_CURRENT_ARTICLE';
export const GET_CURRENT_ARTICLE_SUCCESS: 'GET_CURRENT_ARTICLE_SUCCESS' = 'GET_CURRENT_ARTICLE_SUCCESS';
export const GET_CURRENT_ARTICLE_ERROR: 'GET_CURRENT_ARTICLE_ERROR' = 'GET_CURRENT_ARTICLE_ERROR';
export const GET_CURRENT_ARTICLE_ACTIVE: 'GET_CURRENT_ARTICLE_ACTIVE' = 'GET_CURRENT_ARTICLE_ACTIVE';
export const CLEAR_SECONDARY_COMMENTS: 'CLEAR_SECONDARY_COMMENTS' = 'CLEAR_SECONDARY_COMMENTS';


export function clearAllComments() {
    return function (dispatch: AppDispatch) {
        dispatch({type: CLEAR_SECONDARY_COMMENTS});
    }
}

export function saveRootComments() {
    return function (dispatch: AppDispatch) {
        fetch("/api/comments/roots", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(response => {
                dispatch({type: SET_ROOT_COMMENTS_ACTIVE})
                return response.json();
            })
            .then(result => {

                let arr = result.data;
                arr.forEach((elem: TElem) => {
                    elem.hasShown = false;
                })
                dispatch({type: SET_ROOT_COMMENTS_SUCCESS, data: result.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({type: SET_ROOT_COMMENTS_ERROR})
            });
    }
}

export function getSecondaryComments(id: number, commentsData: TElem[]) {
    return function (dispatch: AppDispatch) {
        fetch(`/api/comments/secondary?id=${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                dispatch({type: GET_SECONDARY_COMMENTS_ACTIVE})
                return response.json();
            })
            .then(result => {
                let index = commentsData.findIndex((elem: TElem) => {
                    return id === elem.id
                })
                result.data.forEach((elem: TElem, current: number) => {
                    elem["hasShown"] = true;
                })

                let newArr: [] | TElem[] = commentsData.slice(0, index).concat(result.data).concat(commentsData.slice(index + 1, commentsData.length));
                dispatch({type: GET_SECONDARY_COMMENTS_SUCCESS, data: newArr})
            })
            .catch(error => {
                console.log(error)
                dispatch({type: SET_ROOT_COMMENTS_ERROR})
            });
    }
}


export function getArticlesFromServer() {
    return function (dispatch: AppDispatch) {
        fetch("/api/articles/all", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(response => {
                dispatch({type: SET_ARTICLE_FETCH_ACTIVE})
                return response.json();
            })
            .then(result => {
                dispatch({type: SET_ARTICLE_FETCH_SUCCESS, data: result.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({type: SET_ROOT_COMMENTS_ERROR})
            });
    }
}

export function getCurrentArticle(elem: TArticleElem) {
    return function (dispatch: AppDispatch) {
        dispatch({type: SET_CURRENT_ARTICLE, data: elem})
    }
}


export function getCurrentArticleFromServer(id: string) {
    return function (dispatch: AppDispatch) {
        fetch(`/api/articles/current?id=${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(response => {
                dispatch({type: GET_CURRENT_ARTICLE_ACTIVE})
                return response.json();
            })
            .then(result => {
                dispatch({type: GET_CURRENT_ARTICLE_SUCCESS})
                dispatch({type: SET_CURRENT_ARTICLE, data: result.data[0]})
            })
            .catch(error => {
                console.log(error)
                dispatch({type: SET_ROOT_COMMENTS_ERROR})
            });
    }
}