export const ADD_PRODUCT= "ADD_TITLE";
export const EDIT_PRODUCT= "ADD_SUBTITLE";

const initialState = {
    bestParts_title: "Выбирай лучшие детали",
    bestParts_subtitle: "Твой автомобиль должен быть обслужен деталями высокого качества"
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TITLE:
            return addTitle()
    }
}

export const addTitle = (title) => {
    return{
        type: ADD_TITLE,
        payload: title
    }
}

export const addSubtitle = (subtitle) => {
    return{
        type: ADD_SUBTITLE,
        payload: subtitle
    }
}