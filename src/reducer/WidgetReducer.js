import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    FIND_WIDGETS_FOR_TOPIC,
    UPDATE_WIDGET,
    FIND_ALL_WIDGET,
    UP_WIDGET,
    DOWN_WIDGET, FIND_WIDGET_BY_ID
} from "../actions/WidgetAction";

const initialState = {
    widgets:[]
}

const WidgetReducer = (state= initialState, action) => {
    switch (action.type){
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget => widget.id === action.newWidget.id ? action.widget : widget)
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }
        case FIND_ALL_WIDGET:
            return {
                widgets: action.widgets
            }

        case UP_WIDGET:
            return{
                widgets: action.widgets
            }
        case DOWN_WIDGET:
            return{
                widgets: action.widgets
            }
        case FIND_WIDGET_BY_ID:
            return {
                widgets: action.widget
            }
        default:
            return state
    }
}

export default WidgetReducer;


