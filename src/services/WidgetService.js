

export const findWidgetForTopic = async(tid) => {
    const response = await fetch(`http://localhost:8080/topics/${tid}/widgets`)
    return response.json()
}

export const orderWidget = async(wid, up) => {
    const response = await fetch(`http://localhost:8080/widgets/${wid}/${up}`, {
        method: "POST"
    });
    return response.json()
}


    export const createWidget = async (widget) =>{
    const response = await fetch(`http://localhost:8080/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
    return response.json()
}

export const deleteWidget = async (wid) => {
    const response = await fetch(`http://localhost:8080/widgets/${wid}`, {
        method: "DELETE"
    })
    return response.json()
}

export const updateWidget = async (widget) => {
    const response = await fetch(`http://localhost:8080/widgets/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}
export const findAllWidget = async () =>{
    const response = await fetch("http://localhost:8080/widgets")
    return response.json()
}


export default {
    findWidgetForTopic,
    createWidget,
    deleteWidget,
    updateWidget,
    findAllWidget,
    orderWidget
}