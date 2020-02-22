export const CREATE_WIDGET = "CREATE_WIDGET";

export const createWidget_dis = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
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

export const UPDATE_WIDGET = "UPDATE_WIDGET";

export const updateWidget_dis = (widget) => ({
    type: UPDATE_WIDGET,
    newWidget: widget,
    widgetId: widget.id

})

export const FIND_ALL_WIDGET = "FIND_ALL_WIDGET";

export const findAllWidget_dis = (widgets) => ({
    type: FIND_ALL_WIDGET,
    widgets: widgets

})

export const UP_WIDGET = "UP_WIDGET";
export const upWidget_dis = (widgets) => ({
    type: UP_WIDGET,
    widgets: widgets
})

export const DOWN_WIDGET = "DOWN_WIDGET";
export const downWidget_dis = (widgets) => ({
    type: DOWN_WIDGET,
    widgets: widgets
})

export const FIND_WIDGET_BY_ID = "FIND_WIDGET_BY_ID";
export const findWidgetById_dis = (widget) => ({
    type: FIND_WIDGET_BY_ID,
    widget: widget
})