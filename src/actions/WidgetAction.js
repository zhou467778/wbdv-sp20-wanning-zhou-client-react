

export const CREATE_WIDGET = "CREATE_WIDGET";

export const createWidget_dis = (widget) => ({
    type: CREATE_WIDGET,
    newWidget : widget
})

export const DELETE_WIDGET = "DELETE_WIDGET";

export const deleteWidget_dis = (wid) => ({
    type: DELETE_WIDGET,
    widgetId: wid

})

export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC ";

export const findWidgetForTopic_dis = (widgets) => ({
    type: FIND_WIDGETS_FOR_TOPIC,
    widgets: widgets
});

export const UPDATE_WIDGET ="UPDATE_WIDGET";

export const updateWidget_dis = (widget) =>({
    type: UPDATE_WIDGET,
    newWidget: widget,
    widgetId : widget.id

})

export const FIND_ALL_WIDGET = "FIND_ALL_WIDGET";

export const findAllWidget_dis = (widgets) => ({
    type: FIND_ALL_WIDGET,
    widgets: widgets

})