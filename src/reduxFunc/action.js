export const SaveContact = (data) => {
    return {
        type: "SAVE_CONTACT",
        data: data
    }
}

export const EditContact = (data) => {
    return {
        type: "EDIT_CONTACT",
        editData: data
    }
}

export const ViewContact = (data) => {
    return {
        type: "VIEW_CONTACT",
        viewData: data
    }
}

export const UpdateContact = (data) => {
    return {
        type: "UPDATE_CONTACT",
        data: data
    }
}

export const RemoveContact = (data) => {
    return {
        type: "REMOVE_CONTACT",
        data: data
    }
}

