import React from "react";
import "../../css/CourseEditorStyle.css"
import "../../../node_modules/font-awesome/css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import {
    createWidget_dis,
    deleteWidget_dis,
    findAllWidget_dis,
    findWidgetForTopic_dis,
    updateWidget_dis
} from "../../actions/WidgetAction";
import {connect} from "react-redux";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.findWidgetForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetForTopic(this.props.topicId)
        }
        console.log(this.props.widgets)
    }

    render() {
        return (
            <div className="wbdv-content">


                <a type="button" className="preview" style={{fontSize: "20px"}}>Preview <i className="fa fa-toggle-off"
                                                                                           style={{fontSize: "25px"}}></i></a>

                {this.props.widgets && this.props.widgets.map(widget =>


                    <div className="wbdv-boxed" key={widget.id}>
                        <div>
                            {widget.type === "HEADING" &&
                            <h2 className="wbdv-big-heading">Heading Widget</h2>}
                            {widget.type === "PARAGRAPH" &&
                            <h2 className="wbdv-big-heading">Paragraph Widget</h2>}


                            <button className="wbdv-up"><i className="fa fa-arrow-up"></i></button>
                            <button className="wbdv-down"><i className="fa fa-arrow-down"></i></button>
                            <div className="form-group col-md-2 wbdv-heading">
                                <label for="heading"></label>

                                <select id="heading" className="form-control"
                                        onChange={(e) => {
                                            const newType = e.target.value
                                            // this.setState(prevState => ({
                                            //         widget: {
                                            //             ...prevState.widget,
                                            //             type: newType
                                            //         }
                                            //     })
                                            // )
                                            widget.type = newType

                                        }}
                                        value={widget.type}>
                                    <option value={"HEADING"}>Heading</option>
                                    <option value={"PARAGRAPH"}>Paragraph</option>
                                </select>
                            </div>
                            <button className="wbdv-red-close"
                            onClick={() => this.props.deleteWidget(widget.id)}>
                                <i className="fa fa-times"></i></button>
                            <button type="button" className="btn btn-success">Save</button>
                        </div>
                        {widget.type === "HEADING" &&
                        <HeadingWidgetComponent
                        widget = {widget}
                        editing = {this.state.widget.id === widget.id}
                        />}
                        {widget.type === "PARAGRAPH" &&
                        <ParagraphWidgetComponent
                            widget = {widget}
                            editing = {this.state.widget.id === widget.id}
                            />}


                    </div>
                )}
                <button className="wbdv-red-plus"
                        onClick={() => this.props.createWidget({
                            id: (new Date()).getTime() + "",
                            title: "New Widget",
                            type: "HEADING",
                            size: 1,
                            topicId: this.props.topicId
                        })}><i className="fa fa-plus"></i></button>

            </div>

        )
    }
}

const  stateToPropertyMapper = (state) => {
    return {
        widgets: state.widgets.widgets
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetForTopic: (topicId) => {
            WidgetService.findWidgetForTopic(topicId)
                .then(actualWidgets => dispatch(
                    findWidgetForTopic_dis(actualWidgets)
                ))
        },

        createWidget: (widget) => {
            WidgetService.createWidget(widget)
                .then(actualWidget =>
                    dispatch(createWidget_dis(actualWidget)))
        },

        deleteWidget: (widgetId) =>
            WidgetService.deleteWidget(widgetId)
                .then(status =>
                    dispatch(deleteWidget_dis(widgetId))),

        updateWidget: (widget) =>
            WidgetService.updateWidget(widget)
                .then(newWidget =>
                    dispatch(updateWidget_dis(newWidget))),

        findAllWidget: () =>
            WidgetService.findAllWidget()
                .then(actualWidget =>
                    dispatch(findAllWidget_dis(actualWidget)))
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListComponent);