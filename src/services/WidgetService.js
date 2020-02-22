export const findWidgetForTopic = async (tid) => {
    if (tid) {
        const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/topics/${tid}/widgets`)
        return response.json()
    }

}
export const findWidgetById = async (wid) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/widgets/${wid}`)
    return response.json()
}


export const upWidget = async (widget) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/widgets/up`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
    return response.json()
}

export const downWidget = async (widget) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/widgets/down`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
    return response.json()
}


export const createWidget = async (widget) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
    return response.json()
}

export const deleteWidget = async (wid) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/widgets/${wid}`, {
        method: "DELETE"
    })
    return response.json()
}

export const updateWidget = async (widget) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/widgets/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}
export const findAllWidget = async () => {
    const response = await fetch("https://cs4550-wanning.herokuapp.com/api/widgets")
    return response.json()
}


export default {
    findWidgetForTopic,
    createWidget,
    deleteWidget,
    updateWidget,
    findAllWidget,
    upWidget,
    downWidget,
    findWidgetById
}