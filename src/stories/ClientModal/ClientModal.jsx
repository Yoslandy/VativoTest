import React, { useState } from "react"
import PropTypes from "prop-types"

import ClientModal from "../../components/Modal/ClientModal"

export default function CustomClientModal({ title, message }) {
    const [open, setOpen] = useState(true)
    return (
        <ClientModal
            title={title}
            message={message}
            open={open}
            toggle={() => setOpen(!open)}
        />
    )
}

CustomClientModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
}

CustomClientModal.defaultProps = {
    title: "Modal title",
    message: "Modal message.",
}
